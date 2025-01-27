import { Ingredient, IngredientDetails } from "./ingredient.model";
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

export const getSuggestions = async (restaurantId: number) => {
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


const getSyscoPricing = async (restaurantId: number) => {
    logger.info('[ingredient.dao][getSYSCOPricing][START]', { restaurantId });
    try {
        const ingredients = await execute<IngredientDetails[]>(ingredientQueries.getSyscoPricing, [restaurantId]);
        logger.info('[ingredient.dao][getSYSCOPricing][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][getSYSCOPricing][ERROR]', { error });
        throw error;
    }
}

const getUsFoodsPricing = async (restaurantId: number) => {
    logger.info('[ingredient.dao][getUSFOODSPricing][START]', { restaurantId });
    try {
        const ingredients = await execute<IngredientDetails[]>(ingredientQueries.getUsFoodsPricing, [restaurantId]);
        logger.info('[ingredient.dao][getUSFOODSPricing][SUCCESS]', { ingredients });
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][getUSFOODSPricing][ERROR]', { error });
        throw error;
    }
}

export const getAllPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    logger.info('[ingredient.dao][getAllPricing][START]', { restaurantId });
    try {
        const [syscoIngredients, usFoodsIngredients] = await Promise.all([
            getSyscoPricing(restaurantId),
            getUsFoodsPricing(restaurantId)
        ]);

        // Create a map to hold the ingredients by their IDs for easy merging
        const ingredientMap: { [key: number]: IngredientDetails } = {};

        // Fill the map with Sysco pricing
        syscoIngredients.forEach(ingredient => {
            ingredientMap[ingredient.ingredientId] = {
                ingredientId: ingredient.ingredientId,
                ingredientName: ingredient.ingredientName,
                syscoPrice: ingredient.syscoPrice,
                usFoodsPrice: 0, // Placeholder for now
                last_date_ordered: new Date(), // Placeholder for now
                category: ingredient.category, // Include category from Sysco
                restaurantId
            };
        });

        // Merge in US Foods pricing
        usFoodsIngredients.forEach(ingredient => {
            if (ingredientMap[ingredient.ingredientId]) {
                ingredientMap[ingredient.ingredientId].usFoodsPrice = ingredient.usFoodsPrice;
            } else {
                ingredientMap[ingredient.ingredientId] = {
                    ingredientId: ingredient.ingredientId,
                    ingredientName: ingredient.ingredientName,
                    syscoPrice: 0, // Placeholder for now
                    usFoodsPrice: ingredient.usFoodsPrice,
                    last_date_ordered: new Date(), // Placeholder for now
                    category: ingredient.category, // Include category from US Foods
                    restaurantId
                };
            }
        });

        // Convert the map back to an array
        const allIngredients = Object.values(ingredientMap);
        logger.info('[ingredient.dao][getAllPricing][SUCCESS]', { allIngredients });
        return allIngredients;
    } catch (error) {
        logger.error('[ingredient.dao][getAllPricing][ERROR]', { error });
        throw error;
    }
};

export function readSuggestions(restaurantId: number) {
    throw new Error('Function not implemented.');
}
