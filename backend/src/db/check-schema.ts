import { execute } from '../services/mysql.connector';
import { initializeMySqlConnector } from '../services/mysql.connector';

async function checkSchema() {
  try {
    await initializeMySqlConnector();
    
    // Check if dim_ingredient table exists
    const dimIngredientQuery = `
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'dim_ingredient'
    `;
    const dimIngredientResult = await execute(dimIngredientQuery, [process.env.MY_SQL_DB_DATABASE || 'Piper_Net']);
    console.log('dim_ingredient table exists:', dimIngredientResult.length > 0);
    
    // Check if fact_inventory table exists
    const factInventoryQuery = `
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'fact_inventory'
    `;
    const factInventoryResult = await execute(factInventoryQuery, [process.env.MY_SQL_DB_DATABASE || 'Piper_Net']);
    console.log('fact_inventory table exists:', factInventoryResult.length > 0);
    
    // Check if fact_prep_item_ingredients table exists
    const factPrepItemIngredientsQuery = `
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'fact_prep_item_ingredients'
    `;
    const factPrepItemIngredientsResult = await execute(factPrepItemIngredientsQuery, [process.env.MY_SQL_DB_DATABASE || 'Piper_Net']);
    console.log('fact_prep_item_ingredients table exists:', factPrepItemIngredientsResult.length > 0);
    
    // If dim_ingredient exists, check its columns
    if (dimIngredientResult.length > 0) {
      const dimIngredientColumnsQuery = `
        SELECT COLUMN_NAME 
        FROM information_schema.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'dim_ingredient'
      `;
      const dimIngredientColumns = await execute(dimIngredientColumnsQuery, [process.env.MY_SQL_DB_DATABASE || 'Piper_Net']);
      console.log('dim_ingredient columns:', dimIngredientColumns.map((col: any) => col.COLUMN_NAME));
    }
    
    // If fact_inventory exists, check its columns
    if (factInventoryResult.length > 0) {
      const factInventoryColumnsQuery = `
        SELECT COLUMN_NAME 
        FROM information_schema.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'fact_inventory'
      `;
      const factInventoryColumns = await execute(factInventoryColumnsQuery, [process.env.MY_SQL_DB_DATABASE || 'Piper_Net']);
      console.log('fact_inventory columns:', factInventoryColumns.map((col: any) => col.COLUMN_NAME));
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error checking schema:', error);
    process.exit(1);
  }
}

checkSchema(); 