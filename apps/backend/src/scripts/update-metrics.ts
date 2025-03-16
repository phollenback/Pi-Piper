#!/usr/bin/env node

import { updateAllRestaurantMetrics } from '../services/metrics.service';
import { logger } from '../middleware/winston.middleware';

/**
 * Script to update metrics for all restaurants
 * This script is designed to be run daily at 2 AM via a cron job
 * 
 * Example cron entry:
 * 0 2 * * * /path/to/node /path/to/backend/dist/scripts/update-metrics.js >> /path/to/logs/metrics-update.log 2>&1
 */
async function main() {
  try {
    logger.info('[update-metrics] Starting metrics update process');
    
    // Update metrics for all restaurants
    await updateAllRestaurantMetrics();
    
    logger.info('[update-metrics] Metrics update completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('[update-metrics] Error updating metrics:', error);
    process.exit(1);
  }
}

// Run the script
main(); 