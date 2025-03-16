import { createPool, Pool } from 'mysql';
let pool: Pool | null = null;

export const initializeMySqlConnector = async (): Promise<void> => {
    try
    {
        pool = createPool({
            host: process.env.MY_SQL_DB_HOST,
            user: process.env.MY_SQL_DB_USER,
            password: process.env.MY_SQL_DB_PASSWORD,
            port: Number(process.env.MY_SQL_DB_PORT),
            database: process.env.MY_SQL_DB_DATABASE,
            connectionLimit: Number(process.env.MY_SQL_DB_CONNECTION_LIMIT)
        });

        console.debug('MySQL Adapter Pool generated successfully');
        console.log('process.env.DB_MY_SQL_DATABASE', process.env.MY_SQL_DB_DATABASE);
        
        pool.getConnection((err: any, connection: any) => {
            if(err) {
                console.log('error mysql failed to connect');
                throw new Error('not able to connect to database');
            }
            else {
                console.log('connection made');
                connection.release();
            }
        })
    } catch (error) {
        console.error('[mysql.connector][initializeMySqlConnector][Error]: ', error);
        throw new Error('Failed to initialize pool'); 
    }
}

export { pool };

export const execute = async (query: string, params: any[], client?: any): Promise<any> => {
    try {
        if (!pool) {
            throw new Error('Pool not initialized');
        }
        
        return new Promise((resolve, reject) => {
            if (client) {
                client.query(query, params, (error: any, results: any) => {
                    if (error) return reject(error);
                    resolve(results);
                });
            } else {
                pool!.query(query, params, (error: any, results: any) => {
                    if (error) return reject(error);
                    resolve(results);
                });
            }
        });
    } catch (error) {
        throw error;
    }
};

export const beginTransaction = async () => {
    if (!pool) throw new Error('Pool not initialized');
    return new Promise((resolve, reject) => {
        pool?.getConnection((err, connection) => {
            if (err) return reject(err);
            connection.beginTransaction(err => {
                if (err) return reject(err);
                resolve(connection);
            });
        });
    });
};

export const commitTransaction = async (connection: any) => {
    return new Promise((resolve, reject) => {
        connection.commit((err: any) => {
            if (err) {
                connection.rollback(() => reject(err));
            } else {
                connection.release();
                resolve(true);
            }
        });
    });
};

export const rollbackTransaction = async (connection: any) => {
    return new Promise((resolve, reject) => {
        connection.rollback(() => {
            connection.release();
            resolve(true);
        });
    });
};