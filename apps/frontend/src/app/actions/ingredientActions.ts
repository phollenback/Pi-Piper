import Ingredient from "@/app/types/models/Ingredient";

// Define IngredientFields type since the import is missing
interface IngredientFields {
  ingredient_name: string;
  unit_of_measure: string;
  cost_per_unit: number;
  ingredient_category: number;
}

// Get all ingredients for a restaurant
export const getIngredients = async (restaurantId: number): Promise<Ingredient[]> => {
    const response = await fetch(`http://localhost:3001/ingredients/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch ingredients');
    return response.json();
};

// Create a new ingredient
export const createIngredient = async (data: IngredientFields, restaurantId: number): Promise<Ingredient> => {
    const response = await fetch(`http://localhost:3001/ingredients/${restaurantId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create ingredient');
    return response.json();
};

// Edit an existing ingredient
export const editIngredient = async (data: Ingredient, restaurantId: number): Promise<Ingredient> => {
    const response = await fetch(`http://localhost:3001/ingredients/${restaurantId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to edit ingredient');
    return response.json();
};

// Delete an ingredient
export const deleteIngredient = async (ingredientId: number, restaurantId: number): Promise<{ success: boolean; message: string }> => {
    const response = await fetch(`http://localhost:3001/ingredients/${restaurantId}/${ingredientId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to delete ingredient');
    return response.json();
};

// Get critical ingredients (low stock)
export const fetchCriticals = async (restaurantId: number): Promise<Ingredient[]> => {
    const response = await fetch(`http://localhost:3001/ingredients/suggestions/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch critical ingredients');
    return response.json();
}; 