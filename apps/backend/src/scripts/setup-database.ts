import { db, testConnection } from '../db/connection';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { logger } from '../middleware/winston.middleware';
import { sql } from 'drizzle-orm';

async function resetDatabase() {
  try {
    console.log('Resetting database...');
    
    // Drop all tables
    await db.execute(sql`
      SET FOREIGN_KEY_CHECKS = 0;
      DROP TABLE IF EXISTS bridge_group_items;
      DROP TABLE IF EXISTS dim_category;
      DROP TABLE IF EXISTS dim_date;
      DROP TABLE IF EXISTS dim_groups;
      DROP TABLE IF EXISTS dim_ingredient;
      DROP TABLE IF EXISTS dim_kitchen;
      DROP TABLE IF EXISTS dim_manager;
      DROP TABLE IF EXISTS dim_prep_item;
      DROP TABLE IF EXISTS dim_restaurant;
      DROP TABLE IF EXISTS dim_supplier;
      DROP TABLE IF EXISTS dim_users;
      DROP TABLE IF EXISTS fact_daily_prep_list;
      DROP TABLE IF EXISTS fact_inventory;
      DROP TABLE IF EXISTS fact_order_history;
      DROP TABLE IF EXISTS fact_prep_item_ingredients;
      DROP TABLE IF EXISTS fact_prep_log;
      DROP TABLE IF EXISTS fact_price_history;
      DROP TABLE IF EXISTS __drizzle_migrations;
      SET FOREIGN_KEY_CHECKS = 1;
    `);
    
    console.log('Database reset completed');
    logger.info('Database reset completed');
  } catch (error) {
    console.error('Error resetting database:', error);
    logger.error('Error resetting database:', { error });
    throw error;
  }
}

async function setupDatabase(reset: boolean = false) {
  try {
    console.log('Starting database setup...');
    
    // Test the connection
    const isConnected = await testConnection();
    if (!isConnected) {
      throw new Error('Failed to connect to database');
    }
    
    // Reset database if requested
    if (reset) {
      await resetDatabase();
    }
    
    console.log('Running migrations...');
    
    // Run migrations
    await migrate(db, {
      migrationsFolder: './src/db/migrations'
    });
    
    console.log('Database setup completed successfully!');
    logger.info('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
    logger.error('Error setting up database:', { error });
    process.exit(1);
  }
}

// Check if reset flag is provided
const reset = process.argv.includes('--reset');

// Run the setup
setupDatabase(reset); 