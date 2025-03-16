import { sql } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { logger } from '../../middleware/winston.middleware';

export async function up(db: MySql2Database<any>) {
  try {
    logger.info('[migration][0008_add_restaurant_settings] Running migration');
    
    // Create the dim_restaurant_settings table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS dim_restaurant_settings (
        setting_id INT AUTO_INCREMENT PRIMARY KEY,
        restaurant_id INT NOT NULL,
        low_stock_threshold INT DEFAULT 40,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX settings_restaurant_id_idx (restaurant_id)
      )
    `);
    
    // Add foreign key constraint
    await db.execute(sql`
      ALTER TABLE dim_restaurant_settings
      ADD CONSTRAINT fk_settings_restaurant
      FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
      ON DELETE CASCADE
    `);
    
    // Insert default settings for existing restaurants
    await db.execute(sql`
      INSERT INTO dim_restaurant_settings (restaurant_id, low_stock_threshold)
      SELECT restaurant_id, 40 FROM dim_restaurant
      WHERE NOT EXISTS (
        SELECT 1 FROM dim_restaurant_settings rs 
        WHERE rs.restaurant_id = dim_restaurant.restaurant_id
      )
    `);
    
    logger.info('[migration][0008_add_restaurant_settings] Migration completed successfully');
  } catch (error) {
    logger.error('[migration][0008_add_restaurant_settings] Migration failed', { error });
    throw error;
  }
}

export async function down(db: MySql2Database<any>) {
  try {
    logger.info('[migration][0008_add_restaurant_settings] Reverting migration');
    
    // Drop the table
    await db.execute(sql`DROP TABLE IF EXISTS dim_restaurant_settings`);
    
    logger.info('[migration][0008_add_restaurant_settings] Migration reverted successfully');
  } catch (error) {
    logger.error('[migration][0008_add_restaurant_settings] Migration reversion failed', { error });
    throw error;
  }
} 