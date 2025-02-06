"use server"
import Category from "../types/models/Category";
import Department from "../types/models/Department";
import DepartmentProg from "../types/models/DepartmentProg";
import Ingredient from "../types/models/Ingredient";
import IngredientDetails from "../types/models/IngredientDetails";
import {PrepItem, PrepItemAdapter} from "../types/models/PrepItem";
import PrepListItem from "../types/models/PrepListItem";

export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await fetch('http://localhost:3000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const data: Category[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        throw error;
    }
};

export const fetchAllIngredients = async (restaurantId: number): Promise<Ingredient[]> => {
    try {
        const response = await fetch(`http://localhost:3000/ingredients/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const data: Ingredient[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        throw error;
    }
};


export const fetchIngredientPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    try {
        const response = await fetch(`http://localhost:3000/ingredients/pricing/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const data: IngredientDetails[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        throw error;
    }
};
interface Suggestion {
    ingredient_id: number;
    ingredient_name: string;
}

export const fetchCriticals = async (restaurantId: number): Promise<Suggestion[]> => {
    try {
        const response = await fetch(`http://localhost:3000/ingredients/suggestions/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching ingredient suggestions: ${response.statusText}`);
        }
        const data: Suggestion[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients suggestions:", error);
        throw error;
    }
};

export const fetchAllPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    try {
        console.log("fetching prep items pricing");
        const response = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching categories pricing: ${response.statusText}`);
        }
        const data: PrepItem[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients pricing:", error);
        throw error;
    }
};

export const fetchDepartments = async (restaurantId: number): Promise<Department[]> => {
    try {
        console.log("fetching prep items");
        const response = await fetch(`http://localhost:3000/departments/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching departments: ${response.statusText}`);
        }
        const data: Department[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch departments:", error);
        throw error;
    }
};


export const postPrepItem = async (restaurantId: number, formData: PrepItem): Promise<Department[]> => {
    try {
        console.log("fetching prep items");
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
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to post Prep Item:", error);
        throw error;
    }
};

export const fetchDepProgress = async (restaurantId: number): Promise<DepartmentProg[]> => {
    try {
        const response = await fetch(`http://localhost:3000/departments/daily/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching department Prog: ${response.statusText}`);
        }
        const data: DepartmentProg[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        throw error;
    }
};

export const postDailyPrep = async (prepList: PrepListItem[],restaurantId: number): Promise<PrepItemAdapter[]> => {
    try {
        const response = await fetch(`http://localhost:3000/prepitems/daily/${restaurantId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prepList })
        });

        if (!response.ok) {
            throw new Error(`Error fetching department Prog: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to post daily prep:", error);
        throw error;
    }
};

export const fetchDailyList = async (): Promise<PrepListItem[]> => {
    try {
        const response = await fetch(`http://localhost:3000/prepitems/daily/1`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            console.error("Error fetching daily list:", response.statusText);
            return []; //
        }

        const data: PrepListItem[] = await response.json();
        return data || []; // 
    } catch (error) {
        console.error("Failed to get daily prep:", error);
        return []; // 
    }
};
