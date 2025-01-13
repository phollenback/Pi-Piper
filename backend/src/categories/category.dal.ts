import { Category } from "./category.model";
import { execute } from '../services/pg.connector';
import { categoryQueries } from './category.queries';
import { logger } from '../middleware/winston.middleware';

export const getCategories = async () => {
    logger.info('[category.dao][getCategories][START]');
    try {
        const categories = await execute<Category[]>(categoryQueries.getCategories, []);
        logger.info('[category.dao][getCategories][SUCCESS]', { categories });
        return categories;
    } catch (error) {
        logger.error('[category.dao][getCategories][ERROR]', { error });
        throw error;
    }
};