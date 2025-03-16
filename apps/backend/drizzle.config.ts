import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.MY_SQL_DB_HOST || 'localhost',
    user: process.env.MY_SQL_DB_USER || 'root',
    password: process.env.MY_SQL_DB_PASSWORD || 'root',
    database: process.env.MY_SQL_DB_DATABASE || 'Piper_Net',
    port: Number(process.env.MY_SQL_DB_PORT || 3306),
  },
}); 