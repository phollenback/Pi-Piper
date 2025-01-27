import { Request, Response } from 'express';
import * as IngredientDal from './ingredient.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');

export const readIngredients = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][readIngredients][START]');

    try {
        let restaurantId = Number(req.params.restaurantId);

        const response = await IngredientDal.getIngredients(restaurantId);
        logger.info('[ingredient.controller][readIngredients][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[ingredient.controller][readIngredients][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching ingredients'
        });
    }
};

export const readInventory = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][readIngredients][START]');

    try {
        let restaurantId = Number(req.params.restaurantId);

        const response = await IngredientDal.getIngredients(restaurantId);
        logger.info('[ingredient.controller][readIngredients][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[ingredient.controller][readIngredients][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching ingredients'
        });
    }
};

export const readPricing = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][readPricing][START]');

    try {
        let restaurantId = Number(req.params.restaurantId);

        const response = await IngredientDal.getAllPricing(restaurantId);
        logger.info('[ingredient.controller][readIngredients][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[ingredient.controller][readIngredients][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching ingredients'
        });
    }
};

export const createIngredient = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][createIngredient][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[ingredient.controller][createIngredient][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let restaurantId = Number(req.params.restaurantId);
        let ingredientData = req.body;

        const response = await IngredientDal.createIngredient(restaurantId, ingredientData);
        logger.info('[ingredient.controller][createIngredient][SUCCESS]', { response });

        res.status(201).json(response);
    } catch (error) {
        logger.error('[ingredient.controller][createIngredient][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when creating the ingredient'
        });
    }
};

export const updateIngredient = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][updateIngredient][START]');

    try {
        // let ingredientId = Number(req.params.ingredientId);
        let ingredientData = req.body;

        const response = await IngredientDal.updateIngredient(ingredientData);
        logger.info('[ingredient.controller][updateIngredient][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[ingredient.controller][updateIngredient][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when updating the ingredient'
        });
    }
};

export const deleteIngredient = async (req: Request, res: Response) => {
    logger.info('[ingredient.controller][deleteIngredient][START]');

    try {
        let ingredientId = Number(req.params.ingredientId);
        let restaurantId = Number(req.params.restaurantId);

        logger.info('[ingredient.controller][deleteIngredient][INFO]', { restaurantId, ingredientId });

        const response = await IngredientDal.deleteIngredient(ingredientId, restaurantId);
        logger.info('[ingredient.controller][deleteIngredient][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[ingredient.controller][deleteIngredient][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when deleting the ingredient'
        });
    }
};

export const readSuggestions = async (req:Request, res: Response) =>  {
    logger.info('[ingredient.controller][readSuggestions][START]');

    try {
        let restaurantId = Number(req.params.restaurantId);

        logger.info('[ingredient.controller][readSuggestions][INFO]', { restaurantId });

        const response = await IngredientDal.getSuggestions(restaurantId);
        logger.info('[ingredient.controller][readSuggestions][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[ingredient.controller][readSuggestions][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when reading the suggestions'
        });
    }
}
