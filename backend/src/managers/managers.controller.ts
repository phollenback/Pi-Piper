import { Request, Response } from 'express';
import * as ManagerDal from './manager.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');

// Retrieves manager information for a given restaurant.
export const readManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][readManager][START]', { restaurantId: req.params.restaurantId }); //Added restaurantId to log

    try {
        const restaurantId = Number(req.params.restaurantId);
        const managers = await ManagerDal.getManagers(restaurantId);
        logger.info('[manager.controller][readManager][SUCCESS]', { managers });
        res.status(200).json(managers);
    } catch (error) {
        logger.error('[manager.controller][readManager][ERROR]', { error });
        res.status(500).json({ message: 'Failed to retrieve managers' });
    }
};

// Creates a new manager.
export const createManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][createManager][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[manager.controller][createManager][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const managerData = req.body;
        const newManager = await ManagerDal.createManager(managerData);
        logger.info('[manager.controller][createManager][SUCCESS]', { newManager });
        res.status(201).json(newManager);
    } catch (error) {
        logger.error('[manager.controller][createManager][ERROR]', { error });
        res.status(500).json({ message: 'Failed to create manager' });
    }
};

// Updates an existing manager.
export const updateManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][updateManager][START]', { managerId: req.params.managerId }); //Added managerId to log

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[manager.controller][updateManager][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const managerId = Number(req.params.managerId);
        const managerData = req.body;
        const updatedManager = await ManagerDal.updateManager(managerId, managerData);
        logger.info('[manager.controller][updateManager][SUCCESS]', { updatedManager });
        res.status(200).json(updatedManager);
    } catch (error) {
        logger.error('[manager.controller][updateManager][ERROR]', { error });
        res.status(500).json({ message: 'Failed to update manager' });
    }
};

// Deletes a manager.
export const deleteManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][deleteManager][START]', { managerId: req.params.managerId });

    try {
        const managerId = Number(req.params.managerId);
        const result = await ManagerDal.deleteManager(managerId);
        logger.info('[manager.controller][deleteManager][SUCCESS]', { result });
        res.status(200).json(result);
    } catch (error) {
        logger.error('[manager.controller][deleteManager][ERROR]', { error });
        res.status(500).json({ message: 'Failed to delete manager' });
    }
};