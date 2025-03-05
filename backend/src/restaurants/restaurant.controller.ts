import { Request, Response } from 'express';
import { getRestaurants } from './restaurant.dao';
import { logger } from '../middleware/winston.middleware';
import { eq } from 'drizzle-orm';
import { dimRestaurant } from '../db/schema';
import { db } from '../db/connection';

export const readRestaurants = async (req: Request, res: Response) => {
    logger.info('[restaurant.controller][readRestaurants][START]');

    try {
        const restaurants = await db.select().from(dimRestaurant);
        logger.info('[restaurant.controller][readRestaurants][SUCCESS]', { restaurants });

        res.status(200).json(restaurants);
    } catch (error) {
        logger.error('[restaurant.controller][readRestaurants][ERROR]', { error });
        res.status(500).json({
            message: 'Failed to fetch restaurants',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const readRestaurantById = async (req: Request, res: Response) => {
    const { restaurantId } = req.params;
    const restaurant = await db.select().from(dimRestaurant).where(eq(dimRestaurant.restaurantId, Number(restaurantId)));
    res.json(restaurant);
};