import { execute } from '../services/mysql.connector';
import { initializeMySqlConnector } from '../services/mysql.connector';

async function setupSchema() {
  try {
    await initializeMySqlConnector();
    
    // Create dim_ingredient table if it doesn't exist
    const createDimIngredientQuery = `
      CREATE TABLE IF NOT EXISTS dim_ingredient (
        ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
        ingredient_name VARCHAR(255) NOT NULL,
        restaurant_id INT NOT NULL,
        category VARCHAR(100) DEFAULT 'Uncategorized',
        unit VARCHAR(50) DEFAULT 'units',
        quantity_threshold INT DEFAULT 10,
        max_stock INT DEFAULT 100,
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX (restaurant_id)
      )
    `;
    await execute(createDimIngredientQuery, []);
    console.log('dim_ingredient table created or already exists');
    
    // Create fact_inventory table if it doesn't exist
    const createFactInventoryQuery = `
      CREATE TABLE IF NOT EXISTS fact_inventory (
        inventory_id INT AUTO_INCREMENT PRIMARY KEY,
        ingredient_id INT NOT NULL,
        restaurant_id INT NOT NULL,
        quantity_after DECIMAL(10,2) DEFAULT 0,
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (ingredient_id) REFERENCES dim_ingredient(ingredient_id) ON DELETE CASCADE,
        INDEX (restaurant_id, ingredient_id)
      )
    `;
    await execute(createFactInventoryQuery, []);
    console.log('fact_inventory table created or already exists');
    
    // Create fact_prep_item_ingredients table if it doesn't exist
    const createFactPrepItemIngredientsQuery = `
      CREATE TABLE IF NOT EXISTS fact_prep_item_ingredients (
        id INT AUTO_INCREMENT PRIMARY KEY,
        prep_item_id INT NOT NULL,
        ingredient_id INT NOT NULL,
        quantity DECIMAL(10,2) NOT NULL,
        unit VARCHAR(50) DEFAULT 'units',
        FOREIGN KEY (ingredient_id) REFERENCES dim_ingredient(ingredient_id) ON DELETE CASCADE,
        INDEX (prep_item_id)
      )
    `;
    await execute(createFactPrepItemIngredientsQuery, []);
    console.log('fact_prep_item_ingredients table created or already exists');
    
    // Insert sample data if dim_ingredient is empty
    const countQuery = `SELECT COUNT(*) as count FROM dim_ingredient`;
    const countResult = await execute(countQuery, []);
    
    if (countResult[0].count === 0) {
      console.log('Inserting sample data...');
      
      // Insert sample ingredients
      const sampleIngredients = [
        ['Tomatoes', 1, 'Produce', 'kg', 5, 50],
        ['Onions', 1, 'Produce', 'kg', 10, 50],
        ['Chicken Breast', 1, 'Meat', 'kg', 15, 30],
        ['Rice', 1, 'Dry Goods', 'kg', 20, 100],
        ['Olive Oil', 1, 'Oils', 'liters', 2, 10],
        ['Salt', 1, 'Spices', 'kg', 1, 5],
        ['Pepper', 1, 'Spices', 'kg', 1, 5],
        ['Flour', 1, 'Baking', 'kg', 5, 25],
        ['Sugar', 1, 'Baking', 'kg', 5, 25],
        ['Milk', 1, 'Dairy', 'liters', 10, 30]
      ];
      
      for (const ingredient of sampleIngredients) {
        const insertIngredientQuery = `
          INSERT INTO dim_ingredient 
          (ingredient_name, restaurant_id, category, unit, quantity_threshold, max_stock) 
          VALUES (?, ?, ?, ?, ?, ?)
        `;
        await execute(insertIngredientQuery, ingredient);
      }
      
      // Get all ingredient IDs
      const ingredientIdsQuery = `SELECT ingredient_id FROM dim_ingredient`;
      const ingredientIds = await execute(ingredientIdsQuery, []);
      
      // Insert inventory data for each ingredient
      for (const { ingredient_id } of ingredientIds) {
        // Random quantity between threshold and max
        const ingredientQuery = `SELECT quantity_threshold, max_stock FROM dim_ingredient WHERE ingredient_id = ?`;
        const ingredientData = await execute(ingredientQuery, [ingredient_id]);
        const { quantity_threshold, max_stock } = ingredientData[0];
        
        const randomQuantity = Math.floor(Math.random() * (max_stock - quantity_threshold)) + quantity_threshold;
        
        const insertInventoryQuery = `
          INSERT INTO fact_inventory 
          (ingredient_id, restaurant_id, quantity_after) 
          VALUES (?, ?, ?)
        `;
        await execute(insertInventoryQuery, [ingredient_id, 1, randomQuantity]);
      }
      
      console.log('Sample data inserted successfully');
    } else {
      console.log('Database already has data, skipping sample data insertion');
    }
    
    console.log('Database setup completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error setting up schema:', error);
    process.exit(1);
  }
}

setupSchema(); 