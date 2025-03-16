import mysql from 'mysql2/promise';
import { logger } from '../middleware/winston.middleware';

const pool = mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '3306'),
});

export const execute = async <T>(query: string, params?: any[]): Promise<T> => {
    try {
        const [rows] = await pool.query(query, params);
        return rows as T;
    } catch (error) {
        logger.error('[db.connector][execute][ERROR]', { error });
        throw error;
    }
};

export const initializeDbConnector = async (): Promise<void> => {
    try {
        await pool.getConnection();
        logger.info('[db.connector][initialize][SUCCESS] Database connected');
    } catch (error) {
        logger.error('[db.connector][initialize][ERROR]', { error });
        throw error;
    }
};

export { pool }; 