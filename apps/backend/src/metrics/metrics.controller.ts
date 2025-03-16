import { Request, Response } from 'express';
import { db } from '../db/connection';
import { factRestaurantMetrics, factPrepCompletion } from '../db/schema';
import { eq, desc, and, gte, lte } from 'drizzle-orm';
import { logger } from '../middleware/winston.middleware';
import { format, subDays } from 'date-fns';
import { updateRestaurantMetrics } from '../services/metrics.service';

/**
 * Get the latest metrics for a restaurant
 */
export const getLatestMetrics = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    
    if (!restaurantId) {
      return res.status(400).json({ error: 'Restaurant ID is required' });
    }
    
    logger.info(`[metrics.controller][getLatestMetrics] Getting latest metrics for restaurant ${restaurantId}`);
    
    // Get the latest metrics for the restaurant
    const metrics = await db.select()
      .from(factRestaurantMetrics)
      .where(eq(factRestaurantMetrics.restaurantId, parseInt(restaurantId)))
      .orderBy(desc(factRestaurantMetrics.date))
      .limit(1);
    
    if (metrics.length === 0) {
      return res.status(404).json({ error: 'No metrics found for this restaurant' });
    }
    
    return res.status(200).json(metrics[0]);
  } catch (error) {
    logger.error('[metrics.controller][getLatestMetrics][ERROR]', error);
    return res.status(500).json({ error: 'Failed to get metrics' });
  }
};

/**
 * Get metrics for a restaurant within a date range
 */
export const getMetricsInRange = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    const { startDate, endDate } = req.query;
    
    if (!restaurantId) {
      return res.status(400).json({ error: 'Restaurant ID is required' });
    }
    
    // Default to last 30 days if no date range is provided
    const end = endDate ? new Date(endDate as string) : new Date();
    const start = startDate ? new Date(startDate as string) : subDays(end, 30);
    
    logger.info(`[metrics.controller][getMetricsInRange] Getting metrics for restaurant ${restaurantId} from ${format(start, 'yyyy-MM-dd')} to ${format(end, 'yyyy-MM-dd')}`);
    
    // Get metrics within the date range
    const metrics = await db.select()
      .from(factRestaurantMetrics)
      .where(
        and(
          eq(factRestaurantMetrics.restaurantId, parseInt(restaurantId)),
          gte(factRestaurantMetrics.date, start),
          lte(factRestaurantMetrics.date, end)
        )
      )
      .orderBy(factRestaurantMetrics.date);
    
    return res.status(200).json(metrics);
  } catch (error) {
    logger.error('[metrics.controller][getMetricsInRange][ERROR]', error);
    return res.status(500).json({ error: 'Failed to get metrics' });
  }
};

/**
 * Manually trigger metrics calculation for a restaurant
 */
export const calculateMetrics = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    
    if (!restaurantId) {
      return res.status(400).json({ error: 'Restaurant ID is required' });
    }
    
    logger.info(`[metrics.controller][calculateMetrics] Calculating metrics for restaurant ${restaurantId}`);
    
    // Calculate metrics for the restaurant
    await updateRestaurantMetrics(parseInt(restaurantId));
    
    return res.status(200).json({ message: 'Metrics calculation triggered successfully' });
  } catch (error) {
    logger.error('[metrics.controller][calculateMetrics][ERROR]', error);
    return res.status(500).json({ error: 'Failed to calculate metrics' });
  }
};

/**
 * Record prep list completion time for a restaurant
 */
export const recordPrepCompletion = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    const { completionTime, dateId } = req.body;
    
    if (!restaurantId || !completionTime || !dateId) {
      return res.status(400).json({ 
        error: 'Restaurant ID, completion time, and date ID are required' 
      });
    }
    
    logger.info(`[metrics.controller][recordPrepCompletion] Recording prep completion for restaurant ${restaurantId} on date ${dateId}`);
    
    // Insert the completion record
    await db.insert(factPrepCompletion).values({
      restaurantId: parseInt(restaurantId),
      dateId: dateId,
      completionTime: new Date(completionTime)
    });
    
    // Trigger metrics calculation to update the average prep time
    await updateRestaurantMetrics(parseInt(restaurantId));
    
    return res.status(200).json({ 
      message: 'Prep list completion time recorded successfully',
      restaurantId,
      dateId,
      completionTime
    });
  } catch (error) {
    logger.error('[metrics.controller][recordPrepCompletion][ERROR]', error);
    return res.status(500).json({ error: 'Failed to record prep list completion time' });
  }
}; 