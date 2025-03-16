import { sql } from 'drizzle-orm';

export const up = async (db: any) => {
  try {
    console.log('Running migration: 0007_add_inventory_transaction_table - UP');
    
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS fact_inventory_transaction (
        transaction_id INT AUTO_INCREMENT PRIMARY KEY,
        ingredient_id INT NOT NULL,
        restaurant_id INT NOT NULL,
        date_id INT NOT NULL,
        quantity_change DECIMAL(10, 2) NOT NULL,
        transaction_type VARCHAR(50) NOT NULL,
        reference_id INT,
        previous_quantity DECIMAL(10, 2),
        new_quantity DECIMAL(10, 2),
        notes TEXT,
        created_by INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX transaction_ingredient_id_idx (ingredient_id),
        INDEX transaction_restaurant_id_idx (restaurant_id),
        INDEX transaction_date_id_idx (date_id),
        INDEX transaction_type_idx (transaction_type)
      );
    `);
    
    console.log('Migration 0007_add_inventory_transaction_table completed successfully');
  } catch (error) {
    console.error('Error running migration 0007_add_inventory_transaction_table:', error);
    throw error;
  }
};

export const down = async (db: any) => {
  try {
    console.log('Running migration: 0007_add_inventory_transaction_table - DOWN');
    
    await db.execute(sql`
      DROP TABLE IF EXISTS fact_inventory_transaction;
    `);
    
    console.log('Rollback of migration 0007_add_inventory_transaction_table completed successfully');
  } catch (error) {
    console.error('Error rolling back migration 0007_add_inventory_transaction_table:', error);
    throw error;
  }
}; 