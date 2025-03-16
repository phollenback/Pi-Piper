import { db } from '../db/connection';
import { eq, and, sql, gte, lt, desc, count, avg, sum } from 'drizzle-orm';
import { 
  factRestaurantMetrics, 
  dimRestaurant, 
  factInventory, 
  dimIngredient, 
  factDailyPrepList, 
  dimCleaningTask, 
  factCleaningCompletion,
  factPrepCompletion,
  factInventoryTransaction
} from '../db/schema';
import { logger } from '../middleware/winston.middleware';
import { format, subMonths, subWeeks, startOfDay, endOfDay } from 'date-fns';

/**
 * Calculate and update metrics for all restaurants
 */
export const updateAllRestaurantMetrics = async (): Promise<void> => {
  try {
    logger.info('[metrics.service][updateAllRestaurantMetrics][START]');
    
    // Get all active restaurants
    const restaurants = await db.select({
      restaurantId: dimRestaurant.restaurantId,
      restaurantName: dimRestaurant.restaurantName
    })
    .from(dimRestaurant)
    .where(eq(dimRestaurant.isActive, true));
    
    // Calculate metrics for each restaurant
    for (const restaurant of restaurants) {
      try {
        await updateRestaurantMetrics(restaurant.restaurantId);
        logger.info(`[metrics.service][updateAllRestaurantMetrics] Updated metrics for restaurant ${restaurant.restaurantId} (${restaurant.restaurantName})`);
      } catch (error) {
        logger.error(`[metrics.service][updateAllRestaurantMetrics] Error updating metrics for restaurant ${restaurant.restaurantId}:`, error);
      }
    }
    
    logger.info('[metrics.service][updateAllRestaurantMetrics][SUCCESS]');
  } catch (error) {
    logger.error('[metrics.service][updateAllRestaurantMetrics][ERROR]', error);
    throw error;
  }
};

/**
 * Calculate and update metrics for a specific restaurant
 */
export const updateRestaurantMetrics = async (restaurantId: number): Promise<void> => {
  try {
    logger.info(`[metrics.service][updateRestaurantMetrics][START] restaurantId: ${restaurantId}`);
    
    const today = new Date();
    const dateStr = format(today, 'yyyy-MM-dd');
    
    // Calculate inventory turnover
    const inventoryTurnover = await calculateInventoryTurnover(restaurantId);
    
    // Calculate average prep time
    const avgPrepTime = await calculateAveragePrepTime(restaurantId);
    
    // Calculate average ingredient price
    const avgIngredientPrice = await calculateAverageIngredientPrice(restaurantId);
    
    // Calculate cleaning completion percentages
    const monthlyCleaningPct = await calculateCleaningCompletionPercentage(restaurantId, 'monthly');
    const weeklyCleaningPct = await calculateCleaningCompletionPercentage(restaurantId, 'weekly');
    
    // Use raw SQL to insert or update metrics
    await db.execute(sql`
      INSERT INTO fact_restaurant_metrics (
        restaurant_id, 
        date, 
        inventory_turnover, 
        avg_prep_time_hours, 
        overall_ingredient_price_avg, 
        monthly_cleaning_completion_pct, 
        weekly_cleaning_completion_pct
      ) 
      VALUES (
        ${restaurantId}, 
        ${dateStr}, 
        ${inventoryTurnover}, 
        ${avgPrepTime}, 
        ${avgIngredientPrice}, 
        ${monthlyCleaningPct}, 
        ${weeklyCleaningPct}
      )
      ON DUPLICATE KEY UPDATE
        inventory_turnover = ${inventoryTurnover},
        avg_prep_time_hours = ${avgPrepTime},
        overall_ingredient_price_avg = ${avgIngredientPrice},
        monthly_cleaning_completion_pct = ${monthlyCleaningPct},
        weekly_cleaning_completion_pct = ${weeklyCleaningPct},
        updated_at = CURRENT_TIMESTAMP
    `);
    
    logger.info(`[metrics.service][updateRestaurantMetrics][SUCCESS] restaurantId: ${restaurantId}`);
  } catch (error) {
    logger.error(`[metrics.service][updateRestaurantMetrics][ERROR] restaurantId: ${restaurantId}`, error);
    throw error;
  }
};

/**
 * Calculate inventory turnover (turns/month)
 * Measures how many times the entire inventory is replenished per month
 */
const calculateInventoryTurnover = async (restaurantId: number): Promise<number | null> => {
  try {
    logger.info(`[metrics.service][calculateInventoryTurnover][START] restaurantId: ${restaurantId}`);
    
    const oneMonthAgo = subMonths(new Date(), 1);
    const today = new Date();
    const oneMonthAgoDateId = parseInt(format(oneMonthAgo, 'yyyyMMdd'));
    const todayDateId = parseInt(format(today, 'yyyyMMdd'));
    
    // Get all active ingredients for this restaurant
    const ingredients = await db.select({
      ingredientId: dimIngredient.ingredientId,
      ingredientName: dimIngredient.ingredientName
    })
    .from(dimIngredient)
    .where(
      and(
        eq(dimIngredient.restaurantId, restaurantId),
        eq(dimIngredient.isActive, true)
      )
    );
    
    if (ingredients.length === 0) {
      logger.info(`[metrics.service][calculateInventoryTurnover] No active ingredients found for restaurant ${restaurantId}`);
      return null;
    }
    
    logger.info(`[metrics.service][calculateInventoryTurnover] Found ${ingredients.length} active ingredients for restaurant ${restaurantId}`);
    
    // For each ingredient, count replenishment events from the transaction table
    let totalReplenishmentCount = 0;
    
    for (const ingredient of ingredients) {
      // Get replenishment transactions (where quantityChange > 0 and transactionType = 'order')
      const replenishmentTransactions = await db.select({
        transactionId: factInventoryTransaction.transactionId,
        quantityChange: factInventoryTransaction.quantityChange,
        dateId: factInventoryTransaction.dateId
      })
      .from(factInventoryTransaction)
      .where(
        and(
          eq(factInventoryTransaction.restaurantId, restaurantId),
          eq(factInventoryTransaction.ingredientId, ingredient.ingredientId),
          gte(factInventoryTransaction.dateId, oneMonthAgoDateId),
          lt(factInventoryTransaction.dateId, todayDateId),
          eq(factInventoryTransaction.transactionType, 'order'),
          sql`quantity_change > 0`
        )
      );
      
      const replenishmentCount = replenishmentTransactions.length;
      totalReplenishmentCount += replenishmentCount;
      
      logger.info(`[metrics.service][calculateInventoryTurnover] Ingredient ${ingredient.ingredientName} was replenished ${replenishmentCount} times in the last month`);
    }
    
    // Calculate average replenishment count per ingredient
    const avgReplenishmentPerIngredient = totalReplenishmentCount / ingredients.length;
    
    logger.info(`[metrics.service][calculateInventoryTurnover] Total replenishments: ${totalReplenishmentCount}, Average per ingredient: ${avgReplenishmentPerIngredient}`);
    
    return parseFloat(avgReplenishmentPerIngredient.toFixed(2));
  } catch (error) {
    logger.error(`[metrics.service][calculateInventoryTurnover][ERROR] restaurantId: ${restaurantId}`, error);
    return null;
  }
};

/**
 * Calculate average prep time in hours
 * Measures from 6 AM until the last completed item for each day, then averages
 */
const calculateAveragePrepTime = async (restaurantId: number): Promise<number | null> => {
  try {
    const oneMonthAgo = subMonths(new Date(), 1);
    const today = new Date();
    const oneMonthAgoDateId = parseInt(format(oneMonthAgo, 'yyyyMMdd'));
    const todayDateId = parseInt(format(today, 'yyyyMMdd'));
    
    logger.info(`[metrics.service][calculateAveragePrepTime][START] restaurantId: ${restaurantId}, date range: ${oneMonthAgoDateId} to ${todayDateId}`);
    
    // Get completion records from the fact_prep_completion table
    const completionRecords = await db.select({
      dateId: factPrepCompletion.dateId,
      completionTime: factPrepCompletion.completionTime
    })
    .from(factPrepCompletion)
    .where(
      and(
        eq(factPrepCompletion.restaurantId, restaurantId),
        gte(factPrepCompletion.dateId, oneMonthAgoDateId),
        lt(factPrepCompletion.dateId, todayDateId)
      )
    );
    
    logger.info(`[metrics.service][calculateAveragePrepTime] Found ${completionRecords.length} completion records for restaurant ${restaurantId}`);
    
    if (completionRecords.length === 0) {
      logger.info(`[metrics.service][calculateAveragePrepTime] No completion records found for restaurant ${restaurantId}`);
      return null;
    }
    
    // Group completion times by date_id to find the latest completion time for each day
    const dateCompletionMap = new Map<number, Date>();
    for (const record of completionRecords) {
      const dateId = record.dateId;
      const completionTime = new Date(record.completionTime);
      
      if (!dateCompletionMap.has(dateId) || completionTime > dateCompletionMap.get(dateId)!) {
        dateCompletionMap.set(dateId, completionTime);
        logger.info(`[metrics.service][calculateAveragePrepTime] Set/updated completion time for date ${dateId}: ${completionTime.toISOString()}`);
      }
    }
    
    // Calculate hours from 6 AM to last completion for each day
    let totalHours = 0;
    let daysCount = 0;
    
    for (const [dateId, completionTime] of dateCompletionMap.entries()) {
      // Extract date components from dateId
      const dateStr = dateId.toString();
      const year = parseInt(dateStr.substring(0, 4));
      const month = parseInt(dateStr.substring(4, 6)) - 1; // JS months are 0-indexed
      const day = parseInt(dateStr.substring(6, 8));
      
      // Create a date object for this day at midnight in local time
      const dateAtMidnight = new Date(year, month, day, 0, 0, 0);
      
      // Create 6 AM time for this date in the local timezone
      const sixAM = new Date(dateAtMidnight);
      sixAM.setHours(6, 0, 0, 0);
      
      logger.info(`[metrics.service][calculateAveragePrepTime] Date ${dateId}: Date at midnight = ${dateAtMidnight.toISOString()}`);
      logger.info(`[metrics.service][calculateAveragePrepTime] Date ${dateId}: 6 AM time = ${sixAM.toISOString()}, completion time = ${completionTime.toISOString()}`);
      
      // Calculate hours difference
      const diffMs = completionTime.getTime() - sixAM.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);
      
      logger.info(`[metrics.service][calculateAveragePrepTime] Date ${dateId}: Hours difference = ${diffHours}`);
      
      // Only count positive differences (completions after 6 AM)
      if (diffHours > 0) {
        totalHours += diffHours;
        daysCount++;
        logger.info(`[metrics.service][calculateAveragePrepTime] Date ${dateId}: Added ${diffHours} hours to total`);
      } else {
        logger.info(`[metrics.service][calculateAveragePrepTime] Date ${dateId}: Skipped negative hours difference: ${diffHours}`);
      }
    }
    
    if (daysCount === 0) {
      logger.info(`[metrics.service][calculateAveragePrepTime] No valid completion records found for restaurant ${restaurantId}`);
      return null;
    }
    
    // Calculate average hours
    const avgHours = totalHours / daysCount;
    logger.info(`[metrics.service][calculateAveragePrepTime] Final calculation: Average hours = ${avgHours} (total: ${totalHours}, days: ${daysCount})`);
    
    return parseFloat(avgHours.toFixed(2));
  } catch (error) {
    logger.error(`[metrics.service][calculateAveragePrepTime][ERROR] restaurantId: ${restaurantId}`, error);
    return null;
  }
};

/**
 * Calculate average ingredient price
 */
const calculateAverageIngredientPrice = async (restaurantId: number): Promise<number | null> => {
  try {
    // Get average price of all ingredients for the restaurant
    const result = await db.select({
      avgPrice: avg(factInventory.unitPrice)
    })
    .from(factInventory)
    .innerJoin(dimIngredient, eq(factInventory.ingredientId, dimIngredient.ingredientId))
    .where(eq(factInventory.restaurantId, restaurantId));
    
    if (!result[0].avgPrice) return null;
    
    const avgPrice = Number(result[0].avgPrice);
    return parseFloat(avgPrice.toFixed(2));
  } catch (error) {
    logger.error(`[metrics.service][calculateAverageIngredientPrice][ERROR] restaurantId: ${restaurantId}`, error);
    return null;
  }
};

/**
 * Calculate cleaning completion percentage
 */
const calculateCleaningCompletionPercentage = async (
  restaurantId: number, 
  frequency: string
): Promise<number | null> => {
  try {
    // Determine date range based on frequency
    const today = new Date();
    let startDate: Date;
    
    if (frequency === 'weekly') {
      startDate = subWeeks(today, 1);
    } else if (frequency === 'monthly') {
      startDate = subMonths(today, 1);
    } else {
      return null;
    }
    
    // Get all cleaning tasks of the specified frequency
    const tasks = await db.select({
      taskId: dimCleaningTask.taskId
    })
    .from(dimCleaningTask)
    .where(
      and(
        eq(dimCleaningTask.restaurantId, restaurantId),
        eq(dimCleaningTask.frequency, frequency)
      )
    );
    
    if (tasks.length === 0) return null;
    
    // Get completion status for these tasks
    const completions = await db.select({
      completed: factCleaningCompletion.completed
    })
    .from(factCleaningCompletion)
    .where(
      and(
        eq(factCleaningCompletion.restaurantId, restaurantId),
        gte(factCleaningCompletion.date, startDate),
        lt(factCleaningCompletion.date, today)
      )
    );
    
    if (completions.length === 0) return null;
    
    // Calculate completion percentage
    const completedCount = completions.filter(c => c.completed).length;
    const percentage = (completedCount / completions.length) * 100;
    
    return parseFloat(percentage.toFixed(2));
  } catch (error) {
    logger.error(`[metrics.service][calculateCleaningCompletionPercentage][ERROR] restaurantId: ${restaurantId}, frequency: ${frequency}`, error);
    return null;
  }
}; 