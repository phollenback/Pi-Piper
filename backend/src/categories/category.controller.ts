import { Request, Response } from 'express';
import * as CategoryDal from './category.dal';

export const readCategories = async (req: Request , res: Response) => {
    console.log('[category.controller][readCategories][CON] ');

    try {
        const response = await CategoryDal.getCategories();
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[category.controller][readCategories][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }

}
