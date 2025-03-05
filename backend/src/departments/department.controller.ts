// Import required modules and types
import { Request, Response } from 'express';
import * as DepartmentDal from './department.dal'; 
import { logger } from '../middleware/winston.middleware';
import { db } from '../db/connection';
import { dimKitchen } from '../db/schema';
import { eq } from 'drizzle-orm';

// Handler to get departments for a specific restaurant
export const readDepartments = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params;
        // Using kitchen as a substitute for department since there's no department table
        const departments = await db.select().from(dimKitchen).where(eq(dimKitchen.restaurantId, Number(restaurantId)));
        res.json(departments);
    } catch (error) {
        logger.error('[department.controller][readDepartments][ERROR]', { error });
        res.status(500).json({
            message: 'Error fetching departments',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Handler to get department progress for a specific restaurant
export const readDepProgress = async (req: Request, res: Response) => {
    logger.info('[department.controller][readDepProgress][START]'); // Start log

    try {
        const id = Number(req.params.restaurantId); // Get restaurant ID from request
        const response = await DepartmentDal.getDepProgress(id); // Fetch department progress
        logger.info('[department.controller][readDepProgress][SUCCESS]', { response }); // Success log

        res.status(200).json(response); // Send progress as JSON response
    } catch (error) {
        logger.error('[department.controller][readDepProgress][ERROR]', { error }); // Error log

        res.status(500).json({ // Send error response
            message: 'Error fetching department progress'
        });
    }
};