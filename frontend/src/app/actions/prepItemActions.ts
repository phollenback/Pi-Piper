import { PrepItem } from "@/app/types/models/PrepItem";
import PrepListItem from "@/app/types/models/PrepListItem";

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
export const getPrepItems = async (restaurant_id: number): Promise<PrepItem[]> => {
    const response = await fetch(`http://localhost:3000/prepitems/${restaurant_id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<PrepItem[]>;
};

// Create a new prep item
export const createPrepItem = async (data: ItemFields, restaurantId: number): Promise<PrepItem> => {
    const res = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to create prep item');
    }

    return res.json();
};

// Delete a prep item
export const deletePrepItem = async (prepItemId: number, restaurantId: number): Promise<{ success: boolean; message: string }> => {
    const res = await fetch(`http://localhost:3000/prepitems/${restaurantId}/${prepItemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to delete prep item');
    }

    return res.json();
};

// Fetch all prep items
export const fetchAllPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    try {
        const response = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching prep items: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch prep items:", error);
        throw error;
    }
};

// Post a prep item
export const postPrepItem = async (restaurantId: number, formData: PrepItem): Promise<PrepItem> => {
    try {
        const response = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Error Posting PrepItem: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to post Prep Item:", error);
        throw error;
    }
};

// Post daily prep list
export const postDailyPrep = async (prepList: PrepListItem[], restaurantId: number): Promise<{ success: boolean; message: string }> => {
    try {
        const response = await fetch(`http://localhost:3000/prepitems/daily/${restaurantId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prepList })
        });

        if (!response.ok) {
            throw new Error(`Error posting daily prep: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to post daily prep:", error);
        throw error;
    }
};

// Fetch daily prep list
export const fetchDailyList = async (restaurantId: number = 1): Promise<PrepListItem[]> => {
    try {
        const response = await fetch(`http://localhost:3000/prepitems/daily/${restaurantId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            console.error("Error fetching daily list:", response.statusText);
            return [];
        }

        return await response.json() || [];
    } catch (error) {
        console.error("Failed to get daily prep:", error);
        return [];
    }
}; 