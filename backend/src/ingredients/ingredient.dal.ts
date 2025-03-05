import { logger } from '../middleware/winston.middleware';
import { db } from '../db/connection';
import { dimIngredient } from "../db/schema";
import { Ingredient } from '../types/db.types';
import { eq, desc, and, sql } from 'drizzle-orm';

// Define the IngredientDetails interface
interface IngredientDetails {
  ingredientId: number;
  ingredientName: string;
  unit: string;
  unitPrice: number;
  supplier: string;
}

// Retrieves all ingredients for a given restaurant.
export const getIngredients = async (restaurantId: number): Promise<Ingredient[]> => {
    logger.info('[ingredient.dao][getIngredients][START]', { restaurantId });
    try {
        const ingredients = await db.select()
            .from(dimIngredient)
            .where(eq(dimIngredient.restaurantId, restaurantId));
        
        logger.info('[ingredient.dao][getIngredients][SUCCESS]');
        return ingredients;
    } catch (error) {
        logger.error('[ingredient.dao][getIngredients][ERROR]', { error });
        throw error; // Re-throwing the error allows the calling function to handle it.
    }
};

// Get an ingredient by ID
export const getIngredientById = async (ingredientId: number, restaurantId: number): Promise<Ingredient | undefined> => {
    logger.info('[ingredient.dao][getIngredientById][START]', { ingredientId, restaurantId });
    try {
        const ingredients = await db.select()
            .from(dimIngredient)
            .where(and(
                eq(dimIngredient.ingredientId, ingredientId),
                eq(dimIngredient.restaurantId, restaurantId)
            ))
            .limit(1);
        
        const ingredient = ingredients[0];
        logger.info('[ingredient.dao][getIngredientById][SUCCESS]', { ingredient });
        return ingredient;
    } catch (error) {
        logger.error('[ingredient.dao][getIngredientById][ERROR]', { error, ingredientId, restaurantId });
        throw error;
    }
};

// Creates a new ingredient for a given restaurant.
export const createIngredient = async (restaurantId: number, ingredientData: Omit<Ingredient, 'ingredientId' | 'createdAt' | 'updatedAt'>): Promise<Ingredient> => {
    logger.info('[ingredient.dao][createIngredient][START]', { restaurantId, ingredientData });
    try {
        // Ensure restaurantId is set
        const dataWithRestaurantId = {
            ...ingredientData,
            restaurantId
        };
        
        await db.insert(dimIngredient)
            .values(dataWithRestaurantId);
        
        // Get the newly created ingredient
        const ingredients = await db.select()
            .from(dimIngredient)
            .where(and(
                eq(dimIngredient.ingredientName, ingredientData.ingredientName),
                eq(dimIngredient.restaurantId, restaurantId)
            ))
            .orderBy(desc(dimIngredient.createdAt))
            .limit(1);
        
        const newIngredient = ingredients[0];
        if (!newIngredient) {
            throw new Error('Failed to retrieve created ingredient');
        }
        
        logger.info('[ingredient.dao][createIngredient][SUCCESS]', { newIngredient });
        return newIngredient;
    } catch (error) {
        logger.error('[ingredient.dao][createIngredient][ERROR]', { error });
        throw error;
    }
};

// Updates an existing ingredient.
export const updateIngredient = async (ingredientId: number, restaurantId: number, ingredientData: Partial<Omit<Ingredient, 'ingredientId' | 'restaurantId' | 'createdAt' | 'updatedAt'>>): Promise<Ingredient> => {
    logger.info('[ingredient.dao][updateIngredient][START]', { ingredientId, restaurantId, ingredientData });
    try {
        // Map the ingredient data to the schema fields
        const updateData: any = {};
        if (ingredientData.ingredientName) updateData.ingredientName = ingredientData.ingredientName;
        if (ingredientData.unit) updateData.unit = ingredientData.unit;
        if (ingredientData.unitPrice) updateData.unitPrice = ingredientData.unitPrice;
        if (ingredientData.categoryId) updateData.categoryId = ingredientData.categoryId;

        await db.update(dimIngredient)
            .set(updateData)
            .where(and(
                eq(dimIngredient.ingredientId, ingredientId),
                eq(dimIngredient.restaurantId, restaurantId)
            ));

        // Fetch the updated ingredient
        const ingredients = await db.select()
            .from(dimIngredient)
            .where(and(
                eq(dimIngredient.ingredientId, ingredientId),
                eq(dimIngredient.restaurantId, restaurantId)
            ))
            .limit(1);

        if (ingredients.length === 0) {
            throw new Error('Ingredient not found after update');
        }

        const updatedIngredient = ingredients[0];
        
        // Map the schema fields back to the Ingredient interface
        const result: Ingredient = {
            ingredientId: updatedIngredient.ingredientId,
            ingredientName: updatedIngredient.ingredientName,
            unit: updatedIngredient.unit || '',
            unitPrice: updatedIngredient.unitPrice,
            categoryId: updatedIngredient.categoryId,
            restaurantId: updatedIngredient.restaurantId,
            supplierId: updatedIngredient.supplierId,
            parLevel: updatedIngredient.parLevel,
            currentStock: updatedIngredient.currentStock,
            reorderPoint: updatedIngredient.reorderPoint,
            isActive: updatedIngredient.isActive,
            createdAt: updatedIngredient.createdAt,
            updatedAt: updatedIngredient.updatedAt
        };

        logger.info('[ingredient.dao][updateIngredient][SUCCESS]', { updatedIngredient: result });
        return result;
    } catch (error) {
        logger.error('[ingredient.dao][updateIngredient][ERROR]', { error });
        throw error;
    }
};

// Deletes an ingredient.
export const deleteIngredient = async (ingredientId: number, restaurantId: number): Promise<boolean> => {
    logger.info('[ingredient.dao][deleteIngredient][START]', { ingredientId, restaurantId });
    try {
        await db.delete(dimIngredient)
            .where(and(
                eq(dimIngredient.ingredientId, ingredientId),
                eq(dimIngredient.restaurantId, restaurantId)
            ));
        
        logger.info('[ingredient.dao][deleteIngredient][SUCCESS]', { ingredientId, restaurantId });
        return true;
    } catch (error) {
        logger.error('[ingredient.dao][deleteIngredient][ERROR]', { error });
        throw error;
    }
};

// Gets suggestions for ingredients that need to be ordered
export const getSuggestions = async (restaurantId: number): Promise<{ingredientId: number, ingredientName: string, inv: any}[]> => {
    logger.info('[ingredient.dao][getSuggestions][START]', { restaurantId });
    try {
        const suggestions = await db.select({
            ingredientId: dimIngredient.ingredientId,
            ingredientName: dimIngredient.ingredientName,
            inv: sql`CAST(${dimIngredient.currentStock} AS DECIMAL(10,2))`
        })
        .from(dimIngredient)
        .where(eq(dimIngredient.restaurantId, restaurantId));

        const result = suggestions.map(item => ({
            ingredientId: item.ingredientId,
            ingredientName: item.ingredientName,
            inv: item.inv ?? 0
        }));

        logger.info('[ingredient.dao][getSuggestions][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[ingredient.dao][getSuggestions][ERROR]', { error });
        throw error;
    }
};

// Get Sysco pricing
const getSyscoPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    logger.info('[ingredient.dao][getSyscoPricing][START]', { restaurantId });
    try {
        const ingredients = await db.select({
            ingredientId: dimIngredient.ingredientId,
            ingredientName: dimIngredient.ingredientName,
            unit: dimIngredient.unit,
            unitPrice: dimIngredient.unitPrice,
            supplier: sql`'Sysco'`
        })
        .from(dimIngredient)
        .where(eq(dimIngredient.restaurantId, restaurantId));
        
        logger.info('[ingredient.dao][getSyscoPricing][SUCCESS]', { ingredients });
        return ingredients as unknown as IngredientDetails[];
    } catch (error) {
        logger.error('[ingredient.dao][getSyscoPricing][ERROR]', { error });
        throw error;
    }
};

// Get US Foods pricing
const getUsFoodsPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    logger.info('[ingredient.dao][getUsFoodsPricing][START]', { restaurantId });
    try {
        const ingredients = await db.select({
            ingredientId: dimIngredient.ingredientId,
            ingredientName: dimIngredient.ingredientName,
            unit: dimIngredient.unit,
            unitPrice: dimIngredient.unitPrice,
            supplier: sql`'US Foods'`
        })
        .from(dimIngredient)
        .where(eq(dimIngredient.restaurantId, restaurantId));
        
        logger.info('[ingredient.dao][getUsFoodsPricing][SUCCESS]', { ingredients });
        return ingredients as unknown as IngredientDetails[];
    } catch (error) {
        logger.error('[ingredient.dao][getUsFoodsPricing][ERROR]', { error });
        throw error;
    }
};

// Get all pricing
export const getAllPricing = async (restaurantId: number): Promise<IngredientDetails[]> => {
    logger.info('[ingredient.dao][getAllPricing][START]', { restaurantId });
    try {
        const syscoPricing = await getSyscoPricing(restaurantId);
        const usFoodsPricing = await getUsFoodsPricing(restaurantId);
        
        const allPricing = [...syscoPricing, ...usFoodsPricing];
        logger.info('[ingredient.dao][getAllPricing][SUCCESS]', { allPricing });
        return allPricing;
    } catch (error) {
        logger.error('[ingredient.dao][getAllPricing][ERROR]', { error });
        throw error;
    }
};