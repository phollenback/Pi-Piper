import { Request, Response } from 'express';
import * as GroupDal from './group.dal';
import { logger } from '../middleware/winston.middleware';
import { GroupItem } from './group.model';
import * as GroupService from './group.service';

export const createGroup = async (req: Request, res: Response): Promise<void> => {
  logger.info('[group.controller][createGroup][START]', { body: req.body });
  
  try {
    const { name, restaurant_id, items } = req.body;
    
    if (!name || !restaurant_id || !items?.length) {
      logger.error('[group.controller][createGroup][VALIDATION_ERROR]', { body: req.body });
      res.status(400).json({
        message: 'Missing required fields: name, restaurant_id, or items'
      });
      return; // Explicitly return to avoid further execution
    }

    const groupId = await GroupDal.createGroup(
      name,
      restaurant_id,
      items.map((item : any) => ({
        prep_item_id: item.prep_item_id || null,
        ingredient_id: item.ingredient_id || null
      }))
    );

    logger.info('[group.controller][createGroup][SUCCESS]', { groupId });
    res.status(201).json({ group_id: groupId });
  } catch (error) {
    const err = error as Error;
    logger.error('[group.controller][createGroup][ERROR]', { 
      error: err,
      errorMessage: err.message,
      stack: err.stack 
    });
    res.status(500).json({
      message: 'Error creating group',
      details: err.message
    });
  }
};

export const getGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    const groups = await GroupService.getGroups(req.params.restaurantId);
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch groups' });
  }
}; 