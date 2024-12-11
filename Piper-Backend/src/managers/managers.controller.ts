import { Request, Response } from 'express';
import * as ManagerDal from './manager.dal';
const { validationResult} =  require('express-validator');

export const readManager = async (req: Request , res: Response) => {
    console.log('[manager.controller][readManager][CON] ');

    try {
        let restaurantId = Number(req.params.restaurantId);

        const response = await ManagerDal.getManagers(restaurantId);
 
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

export const createManager = async (req: Request , res: Response) => {
    console.log('[manager.controller][createManager][CON] ');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('[manager.controller][createManager][ERROR] ');
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let managerData = req.body;


        const response = await ManagerDal.createManager(managerData);
 
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

export const updateManager = async (req: Request , res: Response) => {
    console.log('[manager.controller][updateManager][CON] ');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('[manager.controller][updateManager][ERROR] ');
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let managerId = Number(req.params.managerId);
        let managerData = req.body;

        const response = await ManagerDal.updateManager(managerId, managerData);
 
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

export const deleteManager = async (req: Request , res: Response) => {
    console.log('[manager.controller][deleteManager][CON] ');

    try {
        let managerId = Number(req.params.managerId);

        const response = await ManagerDal.deleteManager(managerId);
 
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