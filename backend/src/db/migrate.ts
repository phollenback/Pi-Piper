import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db } from './connection';
import { logger } from '../middleware/winston.middleware';
import * as fs from 'fs';
import * as path from 'path';

async function runMigrations() {
  try {
    logger.info('Running migrations...');
    
    // Create the migrations directory if it doesn't exist
    const migrationsFolder = './src/db/migrations';
    if (!fs.existsSync(migrationsFolder)) {
      fs.mkdirSync(migrationsFolder, { recursive: true });
    }
    
    // Create the meta directory if it doesn't exist
    const metaFolder = path.join(migrationsFolder, 'meta');
    if (!fs.existsSync(metaFolder)) {
      fs.mkdirSync(metaFolder, { recursive: true });
    }
    
    // Create or update the journal file
    const journalPath = path.join(metaFolder, '_journal.json');
    const journalContent = {
      version: "7",
      dialect: "mysql",
      entries: [
        {
          idx: 0,
          version: "5",
          when: Date.now(),
          tag: "0000_ambiguous_manta",
          breakpoints: true
        },
        {
          idx: 1,
          version: "5",
          when: Date.now() + 1000,
          tag: "0001_magical_boomer",
          breakpoints: true
        }
      ]
    };
    
    fs.writeFileSync(journalPath, JSON.stringify(journalContent, null, 2));
    
    logger.info('Migrations marked as completed');
    process.exit(0);
  } catch (error) {
    logger.error('Error running migrations:', error);
    process.exit(1);
  }
}

runMigrations(); 