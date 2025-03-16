import { seedCleaningTasks } from './cleaning-tasks';
import { logger } from '../../middleware/winston.middleware';

/**
 * Run all seed functions
 */
export async function runAllSeeds() {
  try {
    logger.info('[seeds] Starting to run all seeds');
    
    // Run cleaning tasks seed
    await seedCleaningTasks();
    
    // Add other seed functions here as they are created
    
    logger.info('[seeds] Completed running all seeds');
  } catch (error) {
    logger.error('[seeds] Error running seeds:', error);
    throw error;
  }
}

// If this file is run directly, execute all seeds
if (require.main === module) {
  runAllSeeds()
    .then(() => {
      logger.info('[seeds] Seeds completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      logger.error('[seeds] Error running seeds:', error);
      process.exit(1);
    });
} 