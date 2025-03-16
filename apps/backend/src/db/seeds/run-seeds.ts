import seedPrepItems from './prep-items-seed';
import { logger } from '../../middleware/winston.middleware';

/**
 * Run all seed functions
 */
async function runSeeds() {
  try {
    logger.info('[seeds][START] Running all seed scripts');
    
    // Run prep items seed
    const prepItemsResult = await seedPrepItems();
    logger.info('[seeds][prep-items] Result:', prepItemsResult);
    
    // Add more seed functions here as needed
    
    logger.info('[seeds][SUCCESS] All seed scripts completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('[seeds][ERROR] Error running seed scripts:', { error });
    process.exit(1);
  }
}

// Run the seeds
runSeeds(); 