import { db } from '../connection';
import { dimPrepItem, factDailyPrepList, dimKitchen } from '../schema';
import { format } from 'date-fns';
import { logger } from '../../middleware/winston.middleware';
import { eq } from 'drizzle-orm';

/**
 * Seed script to populate prep items and daily prep items for testing
 */
async function seedPrepItems() {
  try {
    logger.info('[seed][prep-items][START] Seeding prep items data');
    
    // First, check if we already have kitchen departments
    const existingDepartments = await db.select().from(dimKitchen);
    
    // If no departments exist, create them
    if (existingDepartments.length === 0) {
      logger.info('[seed][prep-items] Creating kitchen departments');
      
      await db.insert(dimKitchen).values([
        { departmentName: 'Hot Line', restaurantId: 1 },
        { departmentName: 'Cold Line', restaurantId: 1 },
        { departmentName: 'Pastry', restaurantId: 1 }
      ]);
    }
    
    // Get the kitchen departments
    const kitchenDepartments = await db.select().from(dimKitchen);
    
    // Check if we already have prep items
    const existingPrepItems = await db.select().from(dimPrepItem);
    
    // If prep items already exist, don't add more
    if (existingPrepItems.length > 0) {
      logger.info(`[seed][prep-items] ${existingPrepItems.length} prep items already exist, skipping creation`);
    } else {
      logger.info('[seed][prep-items] Creating prep items');
      
      // Define prep items for each department
      const hotLinePrepItems = [
        { name: 'Marinara Sauce', description: 'House marinara sauce for pasta dishes', itemCategory: 1, restaurantId: 1 },
        { name: 'Mashed Potatoes', description: 'Creamy garlic mashed potatoes', itemCategory: 1, restaurantId: 1 },
        { name: 'Grilled Chicken', description: 'Marinated and grilled chicken breasts', itemCategory: 2, restaurantId: 1 },
        { name: 'Beef Stock', description: 'House-made beef stock for soups and sauces', itemCategory: 3, restaurantId: 1 }
      ];
      
      const coldLinePrepItems = [
        { name: 'Caesar Dressing', description: 'House-made caesar dressing', itemCategory: 4, restaurantId: 1 },
        { name: 'Chopped Vegetables', description: 'Diced onions, peppers, and celery', itemCategory: 5, restaurantId: 1 },
        { name: 'Herb Oil', description: 'Infused olive oil with fresh herbs', itemCategory: 4, restaurantId: 1 },
        { name: 'Pickled Onions', description: 'Quick-pickled red onions', itemCategory: 5, restaurantId: 1 }
      ];
      
      const pastryPrepItems = [
        { name: 'Chocolate Ganache', description: 'Dark chocolate ganache for desserts', itemCategory: 6, restaurantId: 1 },
        { name: 'Vanilla Custard', description: 'Vanilla bean custard base', itemCategory: 6, restaurantId: 1 },
        { name: 'Pie Dough', description: 'All-butter pie dough', itemCategory: 7, restaurantId: 1 },
        { name: 'Whipped Cream', description: 'Sweetened whipped cream', itemCategory: 6, restaurantId: 1 }
      ];
      
      // Assign kitchen department IDs
      const hotLineId = kitchenDepartments.find(d => d.departmentName === 'Hot Line')?.kitchenId || 1;
      const coldLineId = kitchenDepartments.find(d => d.departmentName === 'Cold Line')?.kitchenId || 2;
      const pastryId = kitchenDepartments.find(d => d.departmentName === 'Pastry')?.kitchenId || 3;
      
      // Add kitchen department IDs to prep items
      const hotLineItems = hotLinePrepItems.map(item => ({ ...item, kitchenDepartmentId: hotLineId }));
      const coldLineItems = coldLinePrepItems.map(item => ({ ...item, kitchenDepartmentId: coldLineId }));
      const pastryItems = pastryPrepItems.map(item => ({ ...item, kitchenDepartmentId: pastryId }));
      
      // Insert all prep items
      await db.insert(dimPrepItem).values([
        ...hotLineItems,
        ...coldLineItems,
        ...pastryItems
      ]);
      
      logger.info('[seed][prep-items] Successfully created prep items');
    }
    
    // Now create daily prep items for today
    const today = format(new Date(), 'yyyyMMdd');
    const dateId = parseInt(today);
    
    // Check if we already have daily prep items for today
    const existingDailyPrepItems = await db.select()
      .from(factDailyPrepList)
      .where(eq(factDailyPrepList.dateId, dateId));
    
    if (existingDailyPrepItems.length > 0) {
      logger.info(`[seed][prep-items] ${existingDailyPrepItems.length} daily prep items already exist for today, skipping creation`);
    } else {
      logger.info('[seed][prep-items] Creating daily prep items for today');
      
      // Get all prep items
      const prepItems = await db.select().from(dimPrepItem);
      
      // Create daily prep items with different statuses
      const dailyPrepItems = prepItems.map((item, index) => {
        // Assign different statuses to create a mix
        let status: 'todo' | 'in-progress' | 'complete';
        if (index % 3 === 0) {
          status = 'complete';
        } else if (index % 3 === 1) {
          status = 'in-progress';
        } else {
          status = 'todo';
        }
        
        return {
          prepItemId: item.prepItemId,
          restaurantId: 1,
          dateId,
          quantity: ((index + 1) * 2.5).toString(), // Random quantity
          unit: index % 2 === 0 ? 'quarts' : 'pounds',
          status,
          notes: `Prep notes for ${item.name}`,
        };
      });
      
      // Insert daily prep items
      await db.insert(factDailyPrepList).values(dailyPrepItems);
      
      logger.info('[seed][prep-items] Successfully created daily prep items for today');
    }
    
    logger.info('[seed][prep-items][SUCCESS] Seeding completed successfully');
    return { success: true, message: 'Prep items and daily prep items seeded successfully' };
  } catch (error) {
    logger.error('[seed][prep-items][ERROR]', { error });
    return { success: false, message: `Error seeding prep items: ${error}` };
  }
}

// Export the seed function
export default seedPrepItems; 