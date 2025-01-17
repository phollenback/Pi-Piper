import { Department } from "./department.model";
import { execute } from '../services/pg.connector';
import { departmentQueries } from './department.queries';
import { logger } from '../middleware/winston.middleware';

export const getCategories = async (restaurantId : number) => {
    logger.info('[category.dao][getCategories][START]');
    try {
        const categories = await execute<Department[]>(departmentQueries.getDepartments, [restaurantId]);
        logger.info('[category.dao][getCategories][SUCCESS]', { categories });
        return categories;
    } catch (error) {
        logger.error('[category.dao][getCategories][ERROR]', { error });
        throw error;
    }
};