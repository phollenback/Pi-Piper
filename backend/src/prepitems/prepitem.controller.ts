import { Request, Response } from 'express';
import * as PrepItemDal from './prepitem.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');

export const readPrepItems = async (req: Request, res: Response) => {
    logger.info('[prepitems.controller][readPrepItems][START]');
    try {
        let restaurantId = Number(req.params.restaurantId);
        const response = await PrepItemDal.getPrepItems(restaurantId);
        logger.info('[prepitems.controller][readPrepItems][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[prepitems.controller][readPrepItems][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching prep items'
        });
    }
};

export const readDailyPrepItems = async (req: Request, res: Response) => {
    logger.info('[prepitems.controller][readDailyPrepItems][START]');
    try {
        let restaurantId = Number(req.params.restaurantId);
        const response = await PrepItemDal.getDailyPrepItems(restaurantId);
        logger.info('[prepitems.controller][readDailyPrepItems][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[prepitems.controller][readDailyPrepItems][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching prep items'
        });
    }
};



export const createPrepItem = async (req: Request, res: Response) => {
    logger.info('[prepitem.controller][createPrepItem][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[prepitem.controller][createPrepItem][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let restaurantId = Number(req.params.restaurantId);
        let itemData = req.body;

        const response = await PrepItemDal.createPrepItem(restaurantId, itemData);
        logger.info('[prepitem.controller][createPrepItem][SUCCESS]', { response });

        res.status(201).json(response);
    } catch (error) {
        logger.error('[prepitem.controller][createPrepItem][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when creating the prep item'
        });
    }
};

export const createDailyPrepItems = async (req: Request, res: Response) => {
    console.log('[prepitem.controller][createDailyPrepItems][START]');

    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('[prepitem.controller][createDailyPrepItems][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const restaurantId = Number(req.params.restaurantId);
        console.log('[prepitem.controller][createDailyPrepItems][RESTAURANT_ID]', { restaurantId });

        const items = Array.isArray(req.body) ? req.body : [req.body]; // Ensure we have an array
        console.log('[prepitem.controller][createDailyPrepItems][ITEMS]', { items });

        const response = await PrepItemDal.createDailyPrepItems(restaurantId, items); // Call the DAO function for arrays
        console.log('[prepitem.controller][createDailyPrepItems][RESPONSE]', { response });

        res.status(201).json(response);
    } catch (error) {
        console.error('[prepitem.controller][createDailyPrepItems][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when creating the prep items',
        });
    }
};