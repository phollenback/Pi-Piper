import { sql } from 'drizzle-orm';
import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export async function up(db: any) {
  await db.execute(sql`
    ALTER TABLE dim_users
    ADD COLUMN phone_number varchar(15) AFTER email;
  `);
}

export async function down(db: any) {
  await db.execute(sql`
    ALTER TABLE dim_users
    DROP COLUMN phone_number;
  `);
} 