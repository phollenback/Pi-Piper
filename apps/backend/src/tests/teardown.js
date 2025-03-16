module.exports = async () => {
  const { pool } = require('../services/pg.connector');
  
  // Close any open database connections
  if (pool) {
    await pool.end();
    console.log('Database connection closed successfully.');
  }
}; 