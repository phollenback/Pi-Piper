import { Restaurant } from "./restaurant.model";
import { execute } from '../services/pg.connector';
import { restaurantQueries } from './restaurant.queries';
import { logger } from '../middleware/winston.middleware';

export const getRestaurants = async () => {
    logger.info('[restaurant.dao][getRestaurants][START]');
    try {
        const restaurants = await execute<Restaurant[]>(restaurantQueries.getRestaurants, []);
        logger.info('[restaurant.dao][getRestaurants][SUCCESS]', { restaurants });
        return restaurants;
    } catch (error) {
        logger.error('[restaurant.dao][getRestaurants][ERROR]', { error });
        throw error;
    }
};