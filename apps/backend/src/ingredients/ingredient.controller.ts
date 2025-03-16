import { Request, Response } from 'express';
import * as IngredientDal from './ingredient.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');
import { IngredientService } from  '../services/ingredient.service';


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
        const ingredientId = Number(req.params.ingredientId);
        const restaurantId = Number(req.params.restaurantId);
        const ingredientData = req.body;

        logger.info('[ingredient.controller][updateIngredient][INFO]', { restaurantId, ingredientId, ingredientData });

        const updatedIngredient = await IngredientDal.updateIngredient(ingredientId, restaurantId, ingredientData);
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

export class IngredientController {
    static async getInventoryStatus(req: Request, res: Response) {
        try {
            const { restaurantId } = req.params;
            const inventoryData = await IngredientService.getInventoryStatus(parseInt(restaurantId));
            res.status(200).json(inventoryData);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch inventory data', error });
        }
    }

    static async completePrepItem(req: Request, res: Response) {
        try {
            const restaurantId = Number(req.params.restaurantId);
            const { prepItemId } = req.body;
            await IngredientService.completePrepItem(prepItemId, restaurantId);
            res.status(200).json({ message: 'Prep item completed successfully' });
        } catch (error: any) {
            if (error?.message.includes('out of stock')) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Failed to complete prep item', error });
            }
        }
    }

    static async updateMinStock(req: Request, res: Response) {
        try {
            const ingredientId = parseInt(req.params.ingredientId);
            const restaurantId = parseInt(req.params.restaurantId);
            const { minStock } = req.body;
            
            await IngredientService.updateIngredientThreshold(ingredientId, restaurantId, minStock);
            res.status(200).json({ message: 'Minimum stock level updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to update minimum stock level', error });
        }
    }

    static async getOutOfStockItems(req: Request, res: Response) {
        try {
            const { restaurantId } = req.params;
            const outOfStockItems = await IngredientService.getOutOfStockItems(parseInt(restaurantId));
            res.status(200).json(outOfStockItems);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch out of stock items', error });
        }
    }

    static async updateNotificationThreshold(req: Request, res: Response) {
        try {
            const restaurantId = parseInt(req.params.restaurantId);
            const { userId, threshold } = req.body;
            // Since we don't have a user preferences table yet, we'll just return success
            // In a real implementation, you would save this to a user preferences table
            // and associate it with the restaurant ID
            logger.info('[ingredient.controller][updateNotificationThreshold][SUCCESS]', { 
                userId, 
                threshold, 
                restaurantId 
            });
            res.status(200).json({ 
                message: 'Notification threshold updated successfully',
                restaurantId
            });
        } catch (error) {
            logger.error('[ingredient.controller][updateNotificationThreshold][ERROR]', { error });
            res.status(500).json({ message: 'Failed to update notification threshold', error });
        }
    }

    static async getInventoryTransactions(req: Request, res: Response) {
        try {
            const { restaurantId } = req.params;
            // Since we don't have a factInventoryTransaction table yet, we'll return an empty array
            // In a real implementation, you would query the factInventoryTransaction table
            res.status(200).json([]);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch inventory transactions', error });
        }
    }
}

export const getInventoryStatus = IngredientController.getInventoryStatus;
export const completePrepItem = IngredientController.completePrepItem;
export const updateMinStock = IngredientController.updateMinStock;
export const getOutOfStockItems = IngredientController.getOutOfStockItems;
export const updateNotificationThreshold = IngredientController.updateNotificationThreshold;
export const getInventoryTransactions = IngredientController.getInventoryTransactions;