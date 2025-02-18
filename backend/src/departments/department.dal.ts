// Import models, database connector, queries, and logger
import { Department, DepartmentProg } from "./department.model";
import { execute } from '../services/pg.connector';
import { departmentQueries } from './department.queries';
import { logger } from '../middleware/winston.middleware';

// Get categories by restaurant ID
export const getCategories = async (restaurantId: number) => {
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

// Get department progress by restaurant ID
export const getDepProgress = async (restaurantId: number) => {
    logger.info('[department.dao][getDepProgress][START]');
    try {
        const categories = await execute<DepartmentProg[]>(departmentQueries.getDepProgress, ["2025-01-14", restaurantId]);
        logger.info('[category.dao][getDepProgress][SUCCESS]', { categories });
        return categories;
    } catch (error) {
        logger.error('[category.dao][getDepProgress][ERROR]', { error });
        throw error;
    }
};