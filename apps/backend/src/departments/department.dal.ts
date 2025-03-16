// Import models, database connector, queries, and logger
import { Department, DepartmentProg } from "./department.model";
import { query } from '../db/connection';
import { departmentQueries } from './department.queries';
import { logger } from '../middleware/winston.middleware';

// Get categories by restaurant ID
export const getCategories = async (restaurantId: number): Promise<any[]> => {
    logger.info('[category.dao][getCategories][START]');
    try {
        const [categories] = await query(departmentQueries.getDepartments, [restaurantId]);
        logger.info('[category.dao][getCategories][SUCCESS]', { categories });
        return categories as any[];
    } catch (error) {
        logger.error('[category.dao][getCategories][ERROR]', { error });
        throw error;
    }
};

// Get department progress by restaurant ID
export const getDepProgress = async (restaurantId: number): Promise<DepartmentProg[]> => {
    logger.info('[department.dao][getDepProgress][START]');
    try {
        // Format date as YYYYMMDD integer
        const today = parseInt(new Date().toISOString().split('T')[0].replace(/-/g, ''));
        const [rows] = await query(departmentQueries.getDepProgress, [today.toString(), restaurantId.toString()]);
        
        // Format the progress data
        const formattedData = (rows as any[]).map((item) => ({
            kitchen_department_id: item.kitchen_department_id,
            department_name: item.department_name,
            restaurant_id: item.restaurant_id,
            total_items: Number(item.total_items),
            completed_items: Number(item.completed_items),
            progress: Number(item.progress)
        }));

        logger.info('[department.dao][getDepProgress][SUCCESS]', { 
            progressData: formattedData,
            dateUsed: today
        });
        return formattedData;
    } catch (error) {
        logger.error('[department.dao][getDepProgress][ERROR]', { error });
        throw error;
    }
};