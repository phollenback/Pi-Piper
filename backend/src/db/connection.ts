/**
 * Database connection module
 * 
 * This module provides a connection to the database and utility functions
 * for executing queries.
 */

import { Pool } from 'pg';
import { logger } from '../middleware/winston.middleware';

// Create a connection pool
const pool = new Pool({
  user: process.env.DB_USER || 'root',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'Piper_Net_Test',
  password: process.env.DB_PASSWORD || 'root',
  port: parseInt(process.env.DB_PORT || '3306'),
});

// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    logger.error('Error connecting to database', { error: err.message });
  } else {
    logger.info('Connected to database');
    release();
  }
});

/**
 * Execute a database query
 * @param text - SQL query text
 * @param params - Query parameters
 * @returns Query result
 */
export const query = async (text: string, params?: any[]) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    logger.debug('Executed query', { 
      text, 
      duration, 
      rows: res.rowCount 
    });
    return res;
  } catch (error: any) {
    logger.error('Query error', { 
      text, 
      error: error.message 
    });
    throw error;
  }
};

// Export the pool for direct use if needed
export { pool };

// Close the pool when the application shuts down
process.on('SIGINT', () => {
  pool.end();
  process.exit(0);
}); 