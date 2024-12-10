import { Request, Response } from 'express';
import * as PrepItemDal from './prepitem.dal'

export const readPrepItems = async (req: Request , res: Response) => {
    console.log('[prepitems.controller][readPrepItems][CON] ');
    try {
        let restaurantId = Number(req.params.restaurantId);
        const response = await PrepItemDal.getPrepItems(restaurantId);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[restaurants.controller[readRestaurants][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }

}

export const createPrepItem = async (req: Request , res: Response) => {
    console.log('[prepitem.controller][createPrepItem][CON] ');

    try {
        let restaurantId = Number(req.params.restaurantId);
        let itemData = req.body;

        const response = await PrepItemDal.createPrepItem(restaurantId, itemData);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[prepitem.controller][createPrepItem][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }

}

export const updatePrepItem = async (req: Request , res: Response) => {
    console.log('[prepitem.controller][updatePrepItem][CON] ');

    try {
        let prepItemId = Number(req.params.prepItemId);
        let itemData = req.body;

        const response = await PrepItemDal.updatePrepItem(prepItemId, itemData);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[prepitem.controller][updatePrepItem][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }

}

export const deletePrepItem = async (req: Request , res: Response) => {
    console.log('[prepitem.controller][deletePrepItem][CON] ');

    try {
        let restaurantId = Number(req.params.restaurantId);
        let prepItemId = Number(req.params.prepItemId);

        const response = await PrepItemDal.deletePrepItem(prepItemId, restaurantId);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[prepitem.controller][updatePrepItem][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }
}