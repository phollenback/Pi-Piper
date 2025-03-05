import { PrepListItem, Category } from "./db.types";

export type FetchDailyListResponse = PrepListItem[];
export type FetchCategoriesResponse = Category[];

export type CreatePrepItemRequest = {
    name: string;
    description: string;
    category: number;
    kitchen_department_id: number;
    restaurant_id: number;
}; 