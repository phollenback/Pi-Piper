import { Request, Response } from 'express';
import * as CategoryDal from './category.dal';
import { logger } from '../middleware/winston.middleware';

export const readCategories = async (req: Request, res: Response) => {
    logger.info('[category.controller][readCategories][START]');

    try {
        const response = await CategoryDal.getCategories();
        logger.info('[category.controller][readCategories][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[category.controller][readCategories][ERROR]', { error });

        res.status(500).json({
            message: 'There was an error when fetching categories'
        });
    }
};