import { Request, Response } from 'express';
import * as UserDal from './users.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');

// Retrieves users with prep role for a given restaurant
export const getUsers = async (req: Request, res: Response) => {
    logger.info('[users.controller][getUsers][START]', { restaurantId: req.params.restaurantId });

    try {
        const restaurantId = Number(req.params.restaurantId);
        const users = await UserDal.getUsers(restaurantId);
        logger.info('[users.controller][getUsers][SUCCESS]', { users });
        res.status(200).json(users);
    } catch (error) {
        logger.error('[users.controller][getUsers][ERROR]', { error });
        res.status(500).json({ message: 'Failed to retrieve users' });
    }
};

// Creates a new user
export const createUser = async (req: Request, res: Response) => {
    logger.info('[users.controller][createUser][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[users.controller][createUser][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const userData = req.body;
        const newUser = await UserDal.createUser(userData);
        logger.info('[users.controller][createUser][SUCCESS]', { newUser });
        res.status(201).json(newUser);
    } catch (error) {
        logger.error('[users.controller][createUser][ERROR]', { error });
        res.status(500).json({ message: 'Failed to create user' });
    }
};

// Updates an existing user
export const updateUser = async (req: Request, res: Response) => {
    logger.info('[users.controller][updateUser][START]', { userId: req.params.userId });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[users.controller][updateUser][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const userId = Number(req.params.userId);
        const userData = req.body;
        const updatedUser = await UserDal.updateUser(userId, userData);
        
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        logger.info('[users.controller][updateUser][SUCCESS]', { updatedUser });
        res.status(200).json(updatedUser);
    } catch (error) {
        logger.error('[users.controller][updateUser][ERROR]', { error });
        res.status(500).json({ message: 'Failed to update user' });
    }
};

// Deletes a user
export const deleteUser = async (req: Request, res: Response) => {
    logger.info('[users.controller][deleteUser][START]', { userId: req.params.userId });

    try {
        const userId = Number(req.params.userId);
        const result = await UserDal.deleteUser(userId);
        
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        logger.info('[users.controller][deleteUser][SUCCESS]', { result });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        logger.error('[users.controller][deleteUser][ERROR]', { error });
        res.status(500).json({ message: 'Failed to delete user' });
    }
}; 