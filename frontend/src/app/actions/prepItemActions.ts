import { PrepItem } from "@/app/types/models/PrepItem";
import {PrepListItem} from "@/app/types/models/PrepListItem";
import {Category} from "@/app/types/models/Category";

// Define ItemFields type since the import is missing
interface ItemFields {
  name: string;
  description: string;
  note?: string;
  quantity: number;
  unit: string;
  category: number;
}

// Get all prep items for a restaurant
export const getPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch prep items');
    return response.json();
};

// Create a new prep item
export const createPrepItem = async (data: ItemFields, restaurantId: number): Promise<PrepItem> => {
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create prep item');
    return response.json();
};

// Delete a prep item
export const deletePrepItem = async (prepItemId: number, restaurantId: number): Promise<{ success: boolean; message: string }> => {
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}/${prepItemId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to delete prep item');
    return response.json();
};

// Fetch all prep items
export const fetchAllPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch all prep items');
    return response.json();
};

// Post a prep item
export const postPrepItem = async (restaurantId: number, formData: PrepItem): Promise<PrepItem> => {
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error('Failed to post prep item');
    return response.json();
};

// Post daily prep list
export const postDailyPrep = async (prepList: PrepListItem[], restaurantId: number): Promise<{ success: boolean; message: string }> => {
    const response = await fetch(`http://localhost:3001/prepitems/daily/${restaurantId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prepList }),
    });
    if (!response.ok) throw new Error('Failed to post daily prep');
    return response.json();
};

// Fetch daily prep list
export const fetchDailyList = async (restaurantId: number): Promise<PrepListItem[]> => {
    try {
        const response = await fetch(`http://localhost:3001/prepitems/daily/${restaurantId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch daily prep items');
        }
        const data = await response.json();
        console.log('Fetched daily prep items:', data);
        return data;
    } catch (error) {
        console.error('Error fetching daily prep items:', error);
        return [];
    }
};

// Centralized fetch function for categories
export const fetchCategories = async (restaurantId: number = 1): Promise<Category[]> => {
    const response = await fetch(`http://localhost:3001/categories/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
};

// Unified fetch function for all prep-related data
export const fetchPrepData = async (restaurantId: number) => {
    const [prepItems, dailyList, categories] = await Promise.all([
        getPrepItems(restaurantId),
        fetchDailyList(restaurantId),
        fetchCategories(restaurantId)
    ]);
    return { prepItems, dailyList, categories };
}; 