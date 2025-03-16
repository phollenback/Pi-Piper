import { sql } from 'drizzle-orm';
import { db } from '../connection';
import { logger } from '../../middleware/winston.middleware';

export async function up() {
  try {
    logger.info('[migration][0006_add_prep_completion_table] Running migration');
    
    // Create the fact_prep_completion table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS fact_prep_completion (
        completion_id INT AUTO_INCREMENT PRIMARY KEY,
        restaurant_id INT NOT NULL,
        date_id INT NOT NULL,
        completion_time TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX prep_restaurant_date_idx (restaurant_id, date_id)
      )
    `);
    
    logger.info('[migration][0006_add_prep_completion_table] Migration completed successfully');
  } catch (error) {
    logger.error('[migration][0006_add_prep_completion_table] Migration failed', { error });
    throw error;
  }
}

export async function down() {
  try {
    logger.info('[migration][0006_add_prep_completion_table] Rolling back migration');
    
    // Drop the fact_prep_completion table
    await db.execute(sql`DROP TABLE IF EXISTS fact_prep_completion`);
    
    logger.info('[migration][0006_add_prep_completion_table] Rollback completed successfully');
  } catch (error) {
    logger.error('[migration][0006_add_prep_completion_table] Rollback failed', { error });
    throw error;
  }
} 