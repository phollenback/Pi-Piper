import { dimCategory, factDailyPrepList, dimPrepItem } from "../backend/src/db/schema";

// Database Types
export type Category = typeof dimCategory.$inferSelect;
export type PrepItem = typeof dimPrepItem.$inferSelect;
export type PrepListItem = typeof factDailyPrepList.$inferSelect & {
    name: string; // Add name from dimPrepItem
    description: string; // Add description from dimPrepItem
    category: number; // Add category from dimPrepItem
};

// API Response Types
export type DailyPrepListResponse = PrepListItem[];
export type CategoriesResponse = Category[];

// API Request Types
export type CreatePrepItemRequest = {
    name: string;
    description: string;
    category: number;
    kitchen_department_id: number;
    restaurant_id: number;
}; 