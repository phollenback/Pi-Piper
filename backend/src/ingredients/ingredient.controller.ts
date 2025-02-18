import { Request, Response } from 'express';
import * as IngredientDal from './ingredient.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');

// Retrieves all ingredients for a given restaurant.
export const readIngredients = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][readIngredients][START]');

    try {
        const restaurantId = Number(req.params.restaurantId); // Extract restaurant ID from request parameters.

        const ingredients = await IngredientDal.getIngredients(restaurantId);
        logger.info('[ingredient.controller][readIngredients][SUCCESS]', { ingredients });

        res.status(200).json(ingredients);
    } catch (error) {
        logger.error('[ingredient.controller][readIngredients][ERROR]', { error });
        res.status(500).json({ message: 'Failed to fetch ingredients' });
    }
};

// Retrieves inventory information for a given restaurant.  (This is likely redundant with readIngredients)
export const readInventory = async (req: Request, res: Response) => {

};

// Retrieves pricing information for a given restaurant.
export const readPricing = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][readPricing][START]');

    try {
        const restaurantId = Number(req.params.restaurantId);

        const pricing = await IngredientDal.getAllPricing(restaurantId);
        logger.info('[ingredient.controller][readPricing][SUCCESS]', { pricing }); 

        res.status(200).json(pricing);
    } catch (error) {
        logger.error('[ingredient.controller][readPricing][ERROR]', { error }); 
        res.status(500).json({ message: 'Failed to fetch pricing information' }); 
    }
};

// Creates a new ingredient for a given restaurant.
export const createIngredient = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][createIngredient][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[ingredient.controller][createIngredient][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const restaurantId = Number(req.params.restaurantId);
        const ingredientData = req.body;

        const newIngredient = await IngredientDal.createIngredient(restaurantId, ingredientData);
        logger.info('[ingredient.controller][createIngredient][SUCCESS]', { newIngredient }); // Changed Variable Name

        res.status(201).json(newIngredient); // Changed Variable Name
    } catch (error) {
        logger.error('[ingredient.controller][createIngredient][ERROR]', { error });
        res.status(500).json({ message: 'Failed to create ingredient' }); // More concise message
    }
};

// Updates an existing ingredient.
export const updateIngredient = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][updateIngredient][START]');

    try {
        const ingredientData = req.body; // Assuming ingredient ID is part of req.body

        const updatedIngredient = await IngredientDal.updateIngredient(ingredientData);
        logger.info('[ingredient.controller][updateIngredient][SUCCESS]', { updatedIngredient }); // Changed variable name

        res.status(200).json(updatedIngredient); // Changed variable name
    } catch (error) {
        logger.error('[ingredient.controller][updateIngredient][ERROR]', { error });
        res.status(500).json({ message: 'Failed to update ingredient' }); // More concise message
    }
};

// Deletes an ingredient.
export const deleteIngredient = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][deleteIngredient][START]');

    try {
        const ingredientId = Number(req.params.ingredientId);
        const restaurantId = Number(req.params.restaurantId);

logger.info('[ingredient.controller][deleteIngredient][INFO]', { restaurantId, ingredientId });

const result = await IngredientDal.deleteIngredient(ingredientId, restaurantId);
logger.info('[ingredient.controller][deleteIngredient][SUCCESS]', { result });

res.status(200).json(result);
} catch (error) {
logger.error('[ingredient.controller][deleteIngredient][ERROR]', { error });
res.status(500).json({ message: 'Failed to delete ingredient' });
}
};

// Retrieves ingredient suggestions for a given restaurant.
export const readSuggestions = async (req: Request, res: Response) => {
logger.info('[ingredient.controller][readSuggestions][START]');

try {
const restaurantId = Number(req.params.restaurantId);

logger.info('[ingredient.controller][readSuggestions][INFO]', { restaurantId });

const suggestions = await IngredientDal.getSuggestions(restaurantId);
logger.info('[ingredient.controller][readSuggestions][SUCCESS]', { suggestions });

res.status(200).json(suggestions);
} catch (error) {
logger.error('[ingredient.controller][readSuggestions][ERROR]', { error });
res.status(500).json({ message: 'Failed to fetch suggestions' });
}
};