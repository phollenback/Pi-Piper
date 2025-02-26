import { createPool, Pool } from 'mysql';
let pool: Pool | null = null;

export const initializePgConnector = async (): Promise<void> => {
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

        console.debug('Mysql Adapter Pool generated successfully');
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

export const execute = async <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) {
            await initializePgConnector();
        }
        
        return new Promise<T>((resolve, reject) => {
            pool!.query(query, params, (error: any, results: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

    } catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('Failed to execute MySql query');
    }
}