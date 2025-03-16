// Import required modules and types
import { Request, Response } from 'express';
import * as DepartmentDal from './department.dal'; 
import { logger } from '../middleware/winston.middleware';
import { db } from '../db/connection';
import { dimKitchen } from '../db/schema';
import { eq } from 'drizzle-orm';
import { DepartmentProg } from './department.model';

// Handler to get departments for a specific restaurant
export const readDepartments = async (req: Request, res: Response) => {
    logger.info('[department.controller][readDepartments][START]');
    try {
        const restaurantId = Number(req.params.restaurantId);
        
        const departments = await db.select({
            kitchen_department_id: dimKitchen.kitchenId,
            department_name: dimKitchen.departmentName,
            restaurant_id: dimKitchen.restaurantId
        })
        .from(dimKitchen)
        .where(eq(dimKitchen.restaurantId, restaurantId));

        logger.info('[department.controller][readDepartments][SUCCESS]', { departmentCount: departments.length });
        res.status(200).json(departments);
    } catch (error) {
        logger.error('[department.controller][readDepartments][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching departments'
        });
    }
};

// Handler to get department progress for a specific restaurant
export const readDepProgress = async (req: Request, res: Response) => {
    logger.info('[department.controller][readDepProgress][START]');
    try {
        const restaurantId = Number(req.params.restaurantId);
        const progressData = await DepartmentDal.getDepProgress(restaurantId);
        
        // Format the progress data
        const formattedData = progressData.map((item: DepartmentProg) => ({
            kitchen_department_id: item.kitchen_department_id,
            department_name: item.department_name,
            restaurant_id: item.restaurant_id,
            total_items: Number(item.total_items),
            completed_items: Number(item.completed_items),
            progress: Number(item.progress)
        }));

        logger.info('[department.controller][readDepProgress][SUCCESS]', { 
            departmentCount: formattedData.length 
        });
        res.status(200).json(formattedData);
    } catch (error) {
        logger.error('[department.controller][readDepProgress][ERROR]', { error });
        res.status(500).json({ 
            message: 'Error fetching department progress',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};