import { Ingredient, IngredientDetails } from "./ingredient.model";
import { execute } from '../services/pg.connector';
import { ingredientQueries } from './ingredient.queries';
import { logger } from '../middleware/winston.middleware';

// Retrieves all ingredients for a given restaurant.
export const getIngredients = async (restaurantId: number): Promise<Ingredient[]> => {
    logger.info('[ingredient.dao][getIngredients][START]', { restaurantId });
    try {
        const ingredients = await execute<Ingredient[]>(ingredientQueries.getIngredients, [restaurantId]);
        logger.info('[ingredient.dao][getIngredients][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][getIngredients][ERROR]', { error });
        throw error; // Re-throwing the error allows the calling function to handle it.
    }
};

// Creates a new ingredient for a given restaurant.
export const createIngredient = async (restaurantId: number, ingredientData: Ingredient): Promise<Ingredient[]> => {
    logger.info('[ingredient.dao][createIngredient][START]', { restaurantId, ingredientData });
    try {
        const newIngredient = await execute<Ingredient[]>(ingredientQueries.createIngredient, [
            ingredientData.ingredient_name,
            ingredientData.unit_of_measure,
            ingredientData.cost_per_unit,
            ingredientData.ingredient_category,
            restaurantId,
        ]);
        logger.info('[ingredient.dao][createIngredient][SUCCESS]', { newIngredient });
        return newIngredient;
    } catch (error) {
        logger.error('[ingredient.dao][createIngredient][ERROR]', { error });
        throw error;
    }
};

// Updates an existing ingredient.
export const updateIngredient = async (ingredientData: Ingredient): Promise<Ingredient[]> => {
    logger.info('[ingredient.dao][updateIngredient][START]', { ingredientData });
    try {
        const updatedIngredient = await execute<Ingredient[]>(ingredientQueries.updateIngredient, [
            ingredientData.ingredient_name,
            ingredientData.unit_of_measure,
            ingredientData.cost_per_unit,
            ingredientData.ingredient_category,
            ingredientData.restaurant_id,
            ingredientData.ingredient_id,
        ]);
        logger.info('[ingredient.dao][updateIngredient][SUCCESS]', { updatedIngredient });
        return updatedIngredient;
    } catch (error) {
        logger.error('[ingredient.dao][updateIngredient][ERROR]', { error });
        throw error;
    }
};

// Deletes an ingredient.
export const deleteIngredient = async (ingredientId: number, restaurantId: number): Promise<Ingredient[]> => {
    logger.info('[ingredient.dao][deleteIngredient][START]', { ingredientId, restaurantId });
    try {
        const result = await execute<Ingredient[]>(ingredientQueries.deleteIngredient, [ingredientId, restaurantId]);
        logger.info('[ingredient.dao][deleteIngredient][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[ingredient.dao][deleteIngredient][ERROR]', { error });
        throw error;
    }
};

// Retrieves ingredient suggestions for a given restaurant.
export const getSuggestions = async (restaurantId: number): Promise<{ingredient_id: number, ingredient_name: string, inv: number}[]> => {
    logger.info('[ingredient.dao][getSuggestions][START]', { restaurantId });
    try {
        const suggestions = await execute<{ingredient_id: number, ingredient_name: string, inv: number}[]>(ingredientQueries.getSuggestions, [restaurantId]);
        logger.info('[ingredient.dao][getSuggestions][SUCCESS]', { suggestions });
        return suggestions;
    } catch (error) {
        logger.error('[ingredient.dao][getSuggestions][ERROR]', { error });
        throw error;
    }
};

// Helper function to fetch pricing from Sysco.
const getSyscoPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    logger.info('[ingredient.dao][getSyscoPricing][START]', { restaurantId });
    try {
        const ingredients = await execute<IngredientDetails[]>(ingredientQueries.getSyscoPricing, [restaurantId]);
        logger.info('[ingredient.dao][getSyscoPricing][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][getSyscoPricing][ERROR]', { error });
        throw error;
    }
};

// Helper function to fetchpricing from US Foods.
const getUsFoodsPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    logger.info('[ingredient.dao][getUsFoodsPricing][START]', { restaurantId });
    try {
        const ingredients = await execute<IngredientDetails[]>(ingredientQueries.getUsFoodsPricing, [restaurantId]);
        logger.info('[ingredient.dao][getUsFoodsPricing][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][getUsFoodsPricing][ERROR]', { error });
        throw error;
    }
};

// Retrieves all pricing information (Sysco and US Foods) for a given restaurant.
export const getAllPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    logger.info('[ingredient.dao][getAllPricing][START]', { restaurantId });
    try {
        const [syscoIngredients, usFoodsIngredients] = await Promise.all([
            getSyscoPricing(restaurantId),
            getUsFoodsPricing(restaurantId),
        ]);

        // Use a Map for efficient merging based on ingredientId
        const ingredientMap = new Map<number, IngredientDetails>();

        // Add Sysco pricing
        syscoIngredients.forEach(ingredient => {
            ingredientMap.set(ingredient.ingredientId, {
                ...ingredient,
                usFoodsPrice: 0, // Initialize US Foods price to 0
                last_date_ordered: ingredient.last_date_ordered || new Date(), // Use existing date or default
                restaurantId, // Ensure restaurantId is included
            });
        });

        // Merge US Foods pricing
        usFoodsIngredients.forEach(ingredient => {
            const existingIngredient = ingredientMap.get(ingredient.ingredientId);
            if (existingIngredient) {
                ingredientMap.set(ingredient.ingredientId, {
                    ...existingIngredient,
                    usFoodsPrice: ingredient.usFoodsPrice,
                    last_date_ordered: ingredient.last_date_ordered || existingIngredient.last_date_ordered, // Prioritize existing date
                    category: ingredient.category, // Ensure category is updated
                });
            } else {
                ingredientMap.set(ingredient.ingredientId, {
                    ...ingredient,
                    syscoPrice: 0, // Initialize Sysco price to 0
                    last_date_ordered: ingredient.last_date_ordered || new Date(), // Use existing date or default
                    restaurantId, // Ensure restaurantId is included
                });
            }
        });

        // Convert the Map back to an array
        const allIngredients = Array.from(ingredientMap.values());
        logger.info('[ingredient.dao][getAllPricing][SUCCESS]', { allIngredients });
        return allIngredients;
    } catch (error) {
        logger.error('[ingredient.dao][getAllPricing][ERROR]', { error });
        throw error;
    }
};