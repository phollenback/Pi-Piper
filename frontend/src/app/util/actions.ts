"use server"
import Category from "../types/models/Category";
import Department from "../types/models/Department";
import Ingredient from "../types/models/Ingredient";
import PrepItem from "../types/models/PrepItem";

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
        console.log(data);
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
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        throw error;
    }
};

export const fetchAllPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    try {
        console.log("fetching prep items");
        const response = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const data: PrepItem[] = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
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
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch departments:", error);
        throw error;
    }
};

