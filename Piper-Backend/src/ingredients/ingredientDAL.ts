import  {Ingredient}  from "./ingredientModel";


export const getIngredients = async (restaurantId: number) => {
    console.log('[ingredient.dao][getIngredients][DAL] ');

};

export const createIngredient = async (ingredientData: Ingredient) => {
    console.log('[ingredient.dao][createIngredients][DAL] ');
};

export const updateIngredient = async (ingredientId: number, ingredientData: Ingredient) => {
    console.log('[ingredient.dao][updateIngredients][DAL] ');
};

export const deleteIngredient = async (restaurantId: number, ingredientId: number) => {
    console.log('[ingredient.dao][deleteIngredients][DAL] ');
};