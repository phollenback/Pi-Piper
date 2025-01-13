import { Request, Response } from 'express';
import * as ManagerDal from './manager.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');

export const readManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][readManager][START]');

    try {
        let restaurantId = Number(req.params.restaurantId);

        const response = await ManagerDal.getManagers(restaurantId);
        logger.info('[manager.controller][readManager][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[manager.controller][readManager][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching managers'
        });
    }
};

export const createManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][createManager][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[manager.controller][createManager][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let managerData = req.body;

        const response = await ManagerDal.createManager(managerData);
        logger.info('[manager.controller][createManager][SUCCESS]', { response });

        res.status(201).json(response);
    } catch (error) {
        logger.error('[manager.controller][createManager][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when creating the manager'
        });
    }
};

export const updateManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][updateManager][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[manager.controller][updateManager][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let managerId = Number(req.params.managerId);
        let managerData = req.body;

        const response = await ManagerDal.updateManager(managerId, managerData);
        logger.info('[manager.controller][updateManager][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[manager.controller][updateManager][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when updating the manager'
        });
    }
};

export const deleteManager = async (req: Request, res: Response) => {
    logger.info('[manager.controller][deleteManager][START]');

    try {
        let managerId = Number(req.params.managerId);

        const response = await ManagerDal.deleteManager(managerId);
        logger.info('[manager.controller][deleteManager][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[manager.controller][deleteManager][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when deleting the manager'
        });
    }
};