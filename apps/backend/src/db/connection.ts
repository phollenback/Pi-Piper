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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectionLimit: 10,
  ssl: {
    rejectUnauthorized: false // Allow self-signed certificates
  }
};

// Log the database configuration (without sensitive data)
console.log('Database Configuration:', {
  host: dbConfig.host,
  user: dbConfig.user,
  database: dbConfig.database,
  port: dbConfig.port,
  ssl: dbConfig.ssl
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