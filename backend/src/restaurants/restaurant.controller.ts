import { Request, Response } from 'express';
import { getRestaurants } from './restaurant.dal';
import { logger } from '../middleware/winston.middleware';

export const readRestaurants = async (req: Request, res: Response) => {
    logger.info('[restaurant.controller][readRestaurants][START]');

    try {
        const response = await getRestaurants();
        logger.info('[restaurant.controller][readRestaurants][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[restaurant.controller][readRestaurants][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching restaurants'
        });
    }
};