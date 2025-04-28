/**
 * Database connection module
 * 
 * This module provides a connection to the database and utility functions
 * for executing queries.
 */

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';
import { logger } from '../middleware/winston.middleware';

// Create MySQL connection pool
const dbConfig = {
  host: process.env.MY_SQL_DB_HOST || '127.0.0.1',
  user: process.env.MY_SQL_DB_USER || 'root',
  password: process.env.MY_SQL_DB_PASSWORD || 'new_password',
  database: process.env.MY_SQL_DB_DATABASE || 'Piper_Net',
  port: Number(process.env.MY_SQL_DB_PORT || 3306),
  connectionLimit: Number(process.env.MY_SQL_DB_CONNECTION_LIMIT || 10),
  charset: 'utf8mb4',
  supportBigNumbers: true,
  bigNumberStrings: true,
  decimalNumbers: true
};

// Log the database configuration
console.log('Database Configuration:', {
  host: dbConfig.host,
  user: dbConfig.user,
  database: dbConfig.database,
  port: dbConfig.port,
});

const pool = mysql.createPool(dbConfig);

// Initialize Drizzle with the connection pool
export const db = drizzle(pool, { schema, mode: 'default' });

// Test the connection
export const testConnection = async () => {
  try {
    const [rows] = await pool.query('SELECT DATABASE() as db_name');
    // Type the result properly
    const result = rows as Array<{db_name: string}>;
    const dbName = result[0].db_name;
    console.log(`Connected to database: ${dbName}`);
    logger.info(`Connected to database: ${dbName}`);
    
    return true;
  } catch (error) {
    console.error('Error connecting to database', error);
    logger.error('Error connecting to database', { error });
    return false;
  }
};

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
      rows: Array.isArray(res) && res[0] ? (Array.isArray(res[0]) ? res[0].length : 1) : 0
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

// Close the pool when the application shuts down
process.on('SIGINT', () => {
  pool.end();
  process.exit(0);
}); 