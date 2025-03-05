import { dimCategory, factDailyPrepList, dimPrepItem } from "../backend/src/db/schema";

// Export inferred types
export type Category = typeof dimCategory.$inferSelect;
export type PrepItem = typeof dimPrepItem.$inferSelect;
export type PrepListItem = typeof factDailyPrepList.$inferSelect & {
    name: string; // Add name from dimPrepItem
    description: string; // Add description from dimPrepItem
    category: number; // Add category from dimPrepItem
}; 