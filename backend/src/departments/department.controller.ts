// Import required modules and types
import { Request, Response } from 'express';
import * as DepartmentDal from './department.dal'; 
import { logger } from '../middleware/winston.middleware';

// Handler to get departments for a specific restaurant
export const readDepartments = async (req: Request, res: Response) => {
    logger.info('[department.controller][readDepartments][START]'); // Start log

    try {
        const id = Number(req.params.restaurantId); // Get restaurant ID from request
        const response = await DepartmentDal.getCategories(id); // Fetch categories
        logger.info('[department.controller][readDepartments][SUCCESS]', { response }); // Success log

        res.status(200).json(response); // Send categories as JSON response
    } catch (error) {
        logger.error('[department.controller][readDepartments][ERROR]', { error }); // Error log

        res.status(500).json({ // Send error response
            message: 'Error fetching categories'
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