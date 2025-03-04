import Ingredient from "@/app/types/models/Ingredient";

// Define IngredientFields type since the import is missing
interface IngredientFields {
  ingredient_name: string;
  unit_of_measure: string;
  cost_per_unit: number;
  ingredient_category: number;
}

// Get all ingredients for a restaurant
export const getIngredients = async (restaurant_id: number): Promise<Ingredient[]> => {
    const response = await fetch(`http://localhost:3000/ingredients/${restaurant_id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<Ingredient[]>;
};

// Create a new ingredient
export const createIngredient = async (data: IngredientFields, restaurantId: number): Promise<Ingredient> => {
    const res = await fetch(`http://localhost:3000/ingredients/${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to create ingredient');
    }

    return res.json();
};

// Edit an existing ingredient
export const editIngredient = async (data: Ingredient, restaurantId: number): Promise<Ingredient> => {
    const res = await fetch(`http://localhost:3000/ingredients/${restaurantId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to edit ingredient');
    }

    return res.json();
};

// Delete an ingredient
export const deleteIngredient = async (ingredientId: number, restaurantId: number): Promise<{ success: boolean; message: string }> => {
    const res = await fetch(`http://localhost:3000/ingredients/${restaurantId}/${ingredientId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to delete ingredient');
    }

    return res.json();
};

// Get critical ingredients (low stock)
export const fetchCriticals = async (restaurantId: number): Promise<Ingredient[]> => {
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
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch ingredients suggestions:", error);
        throw error;
    }
}; 