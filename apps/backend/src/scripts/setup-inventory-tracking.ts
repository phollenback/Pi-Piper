import { db } from '../db/connection';
import { sql } from 'drizzle-orm';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Script to set up inventory tracking:
 * 1. Run the migration to create the factInventoryTransaction table
 * 2. Generate mock historical data
 */
async function setupInventoryTracking() {
  try {
    console.log('Setting up inventory tracking...');
    
    // Step 1: Run the migration
    console.log('Step 1: Running migration to create factInventoryTransaction table...');
    
    try {
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
      
      console.log('Migration completed successfully');
    } catch (error) {
      console.error('Error running migration:', error);
      throw error;
    }
    
    // Step 2: Generate mock historical data
    console.log('Step 2: Generating mock historical data...');
    
    try {
      // Run the generate-inventory-history.ts script
      const { stdout, stderr } = await execAsync('npx ts-node src/scripts/generate-inventory-history.ts');
      
      if (stderr) {
        console.error('Error generating mock data:', stderr);
      }
      
      console.log(stdout);
      console.log('Mock data generation completed successfully');
    } catch (error) {
      console.error('Error generating mock data:', error);
      throw error;
    }
    
    console.log('Inventory tracking setup completed successfully!');
  } catch (error) {
    console.error('Error setting up inventory tracking:', error);
  } finally {
    process.exit(0);
  }
}

// Run the script
setupInventoryTracking(); 