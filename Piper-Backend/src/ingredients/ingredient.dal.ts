import  {Ingredient}  from "./ingredient.model";
import { execute } from '../services/pg.connector'
import { ingredientQueries } from './ingredient.queries'


export const getIngredients = async (restaurantId: number) => {
    console.log('[ingredient.dao][getIngredients][DAL] ');
    console.log('fetching Ingredients for restaurant : ', restaurantId);
    return execute<Ingredient[]>(ingredientQueries.getIngredients, [restaurantId]);

};

export const createIngredient = async (restaurantId: number, ingredientData: Ingredient) => {
    console.log('[ingredient.dao][createIngredients][DAL] ');
    console.log(`Create Ingredient : ${ingredientData.ingredient_name} For Restaurant : ${restaurantId}`);
    return execute<Ingredient[]>(ingredientQueries.createIngredient, [ingredientData.ingredient_name, ingredientData.unit_of_measure, ingredientData.cost_per_unit, ingredientData.ingredient_category, restaurantId]);

};

export const updateIngredient = async (ingredientData: Ingredient) => {
    console.log('[ingredient.dao][updateIngredients][DAL] ');
    console.log(`Update Ingredient : ${ingredientData.ingredient_name} For Restaurant : ${ingredientData.restaurant_id}`);
    return execute<Ingredient[]>(ingredientQueries.updateIngredient, [ingredientData.ingredient_name, ingredientData.unit_of_measure, ingredientData.cost_per_unit, ingredientData.ingredient_category, ingredientData.restaurant_id, ingredientData.ingredient_id]);
};

export const deleteIngredient = async (ingredientId: number, restaurantId: number) => {
    console.log('[ingredient.dao][deleteIngredients][DAL] ');
    console.log(`Delete Ingredient # : ${ingredientId} For Restaurant # : ${restaurantId}`);
    return execute<Ingredient[]>(ingredientQueries.deleteIngredient, [ingredientId, restaurantId]);

};