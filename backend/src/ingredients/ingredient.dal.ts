import { Ingredient } from "./ingredient.model";
import { execute } from '../services/pg.connector';
import { ingredientQueries } from './ingredient.queries';
import { logger } from '../middleware/winston.middleware';

export const getIngredients = async (restaurantId: number) => {
    logger.info('[ingredient.dao][getIngredients][START]', { restaurantId });
    try {
        const ingredients = await execute<Ingredient[]>(ingredientQueries.getIngredients, [restaurantId]);
        logger.info('[ingredient.dao][getIngredients][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][getIngredients][ERROR]', { error });
        throw error;
    }
};

export const createIngredient = async (restaurantId: number, ingredientData: Ingredient) => {
    logger.info('[ingredient.dao][createIngredient][START]', { restaurantId, ingredientData });
    try {
        const ingredients = await execute<Ingredient[]>(ingredientQueries.createIngredient, [
            ingredientData.ingredient_name,
            ingredientData.unit_of_measure,
            ingredientData.cost_per_unit,
            ingredientData.ingredient_category,
            restaurantId
        ]);
        logger.info('[ingredient.dao][createIngredient][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][createIngredient][ERROR]', { error });
        throw error;
    }
};

export const updateIngredient = async (ingredientData: Ingredient) => {
    logger.info('[ingredient.dao][updateIngredient][START]', { ingredientData });
    try {
        const ingredients = await execute<Ingredient[]>(ingredientQueries.updateIngredient, [
            ingredientData.ingredient_name,
            ingredientData.unit_of_measure,
            ingredientData.cost_per_unit,
            ingredientData.ingredient_category,
            ingredientData.restaurant_id,
            ingredientData.ingredient_id
        ]);
        logger.info('[ingredient.dao][updateIngredient][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][updateIngredient][ERROR]', { error });
        throw error;
    }
};

export const deleteIngredient = async (ingredientId: number, restaurantId: number) => {
    logger.info('[ingredient.dao][deleteIngredient][START]', { ingredientId, restaurantId });
    try {
        const ingredients = await execute<Ingredient[]>(ingredientQueries.deleteIngredient, [ingredientId, restaurantId]);
        logger.info('[ingredient.dao][deleteIngredient][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][deleteIngredient][ERROR]', { error });
        throw error;
    }
};