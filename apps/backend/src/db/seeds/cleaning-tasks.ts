import { db } from '../connection';
import { dimCleaningTask } from '../schema';
import { logger } from '../../middleware/winston.middleware';

/**
 * Seed cleaning tasks for restaurants
 */
export async function seedCleaningTasks() {
  try {
    logger.info('[seeds][cleaning-tasks] Starting to seed cleaning tasks');
    
    // Weekly cleaning tasks
    const weeklyTasks = [
      { taskName: 'Deep clean refrigerators', frequency: 'weekly', description: 'Remove all items, clean shelves, walls, and door seals' },
      { taskName: 'Clean oven hoods', frequency: 'weekly', description: 'Remove and clean filters, degrease hood surfaces' },
      { taskName: 'Sanitize trash cans', frequency: 'weekly', description: 'Empty, wash with soap, sanitize, and air dry' },
      { taskName: 'Clean behind equipment', frequency: 'weekly', description: 'Move equipment where possible and clean floors and walls' },
      { taskName: 'Descale coffee machines', frequency: 'weekly', description: 'Run descaling solution through coffee machines' }
    ];
    
    // Monthly cleaning tasks
    const monthlyTasks = [
      { taskName: 'Clean freezer', frequency: 'monthly', description: 'Defrost if needed, clean all surfaces, check seals' },
      { taskName: 'Clean HVAC vents', frequency: 'monthly', description: 'Remove vent covers, vacuum, wipe down' },
      { taskName: 'Deep clean floors', frequency: 'monthly', description: 'Move all equipment possible, deep clean and sanitize floors' },
      { taskName: 'Clean light fixtures', frequency: 'monthly', description: 'Remove covers, clean fixtures and covers' },
      { taskName: 'Sanitize ice machine', frequency: 'monthly', description: 'Empty, sanitize, and run cleaning cycle' }
    ];
    
    // Get all restaurant IDs
    const restaurants = await db.query.dimRestaurant.findMany({
      columns: {
        restaurantId: true
      },
      where: (restaurant, { eq }) => eq(restaurant.isActive, true)
    });
    
    // Add tasks for each restaurant
    for (const restaurant of restaurants) {
      const restaurantId = restaurant.restaurantId;
      
      // Add weekly tasks
      for (const task of weeklyTasks) {
        await db.insert(dimCleaningTask).values({
          restaurantId,
          taskName: task.taskName,
          description: task.description,
          frequency: task.frequency
        });
      }
      
      // Add monthly tasks
      for (const task of monthlyTasks) {
        await db.insert(dimCleaningTask).values({
          restaurantId,
          taskName: task.taskName,
          description: task.description,
          frequency: task.frequency
        });
      }
      
      logger.info(`[seeds][cleaning-tasks] Added cleaning tasks for restaurant ${restaurantId}`);
    }
    
    logger.info('[seeds][cleaning-tasks] Completed seeding cleaning tasks');
  } catch (error) {
    logger.error('[seeds][cleaning-tasks] Error seeding cleaning tasks:', error);
    throw error;
  }
} 