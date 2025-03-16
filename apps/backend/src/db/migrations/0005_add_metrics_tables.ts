import { sql } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2';

export async function up(db: MySql2Database<any>) {
  // Create fact_restaurant_metrics table
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS fact_restaurant_metrics (
      metric_id INT AUTO_INCREMENT PRIMARY KEY,
      restaurant_id INT NOT NULL,
      date DATE NOT NULL,
      inventory_turnover DECIMAL(10, 2) NULL,
      avg_prep_time_hours DECIMAL(10, 2) NULL,
      overall_ingredient_price_avg DECIMAL(10, 2) NULL,
      monthly_cleaning_completion_pct DECIMAL(5, 2) NULL,
      weekly_cleaning_completion_pct DECIMAL(5, 2) NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE(restaurant_id, date),
      INDEX restaurant_id_idx (restaurant_id),
      INDEX restaurant_date_idx (restaurant_id, date)
    )
  `);

  // Create dim_cleaning_task table
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS dim_cleaning_task (
      task_id INT AUTO_INCREMENT PRIMARY KEY,
      restaurant_id INT NOT NULL,
      task_name VARCHAR(255) NOT NULL,
      description TEXT NULL,
      frequency VARCHAR(20) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX restaurant_id_idx (restaurant_id)
    )
  `);

  // Create fact_cleaning_completion table
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS fact_cleaning_completion (
      completion_id INT AUTO_INCREMENT PRIMARY KEY,
      restaurant_id INT NOT NULL,
      task_id INT NOT NULL,
      date DATE NOT NULL,
      completed BOOLEAN DEFAULT FALSE,
      completed_by INT NULL,
      completed_at TIMESTAMP NULL,
      notes TEXT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE(restaurant_id, task_id, date),
      INDEX restaurant_task_date_idx (restaurant_id, task_id, date),
      INDEX task_id_idx (task_id)
    )
  `);
}

export async function down(db: MySql2Database<any>) {
  await db.execute(sql`DROP TABLE IF EXISTS fact_cleaning_completion`);
  await db.execute(sql`DROP TABLE IF EXISTS dim_cleaning_task`);
  await db.execute(sql`DROP TABLE IF EXISTS fact_restaurant_metrics`);
} 