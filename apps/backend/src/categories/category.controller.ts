import { Request, Response } from 'express';
import * as CategoryDal from './category.dal';
import { logger } from '../middleware/winston.middleware';


// Read Categories from data store
export const readCategories = async (req: Request, res: Response) => {
    const { restaurantId } = req.params;
    logger.info('[category.controller][readCategories][START]', { restaurantId });
    const categories = await CategoryDal.getUniqueCategories(Number(restaurantId));
    logger.info('[category.controller][readCategories][SUCCESS]', { categories });
    res.json(categories);
};