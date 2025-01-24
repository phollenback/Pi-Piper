import { Request, Response } from 'express';
import * as DepartmentDal from './department.dal';
import { logger } from '../middleware/winston.middleware';

export const readDepartments = async (req: Request, res: Response) => {
    logger.info('[department.controller][readDepartments][START]');

    try {
        const id = Number(req.params.restaurantId);
        const response = await DepartmentDal.getCategories(id);
        logger.info('[department.controller][readDepartments][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[department.controller][readDepartments][ERROR]', { error });

        res.status(500).json({
            message: 'There was an error when fetching categories'
        });
    }
};

export const readDepProgress = async (req: Request, res: Response) => {
    logger.info('[department.controller][readDepProgress][START]');

    try {
        const id = Number(req.params.restaurantId);
        const response = await DepartmentDal.getDepProgress(id);
        logger.info('[department.controller][readDepProgress][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[department.controller][readDepProgress][ERROR]', { error });

        res.status(500).json({
            message: 'There was an error when fetching categories'
        });
    }
};