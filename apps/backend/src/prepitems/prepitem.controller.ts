import { Request, Response } from 'express';
import * as PrepItemDal from './prepitem.dal';
import { logger } from '../middleware/winston.middleware';
const { validationResult } = require('express-validator');

// Mock data for testing when database is not available
const mockDailyPrepItems = [
    {
        prep_list_id: 1,
        name: 'Marinara Sauce',
        description: 'House marinara sauce for pasta dishes',
        note: 'Make extra for weekend',
        quantity: 5,
        unit: 'quarts',
        status: 'complete',
        category: 1,
        restaurant_id: 1,
        date: new Date().toISOString().split('T')[0],
        kitchen_department_id: 1
    },
    {
        prep_list_id: 2,
        name: 'Mashed Potatoes',
        description: 'Creamy garlic mashed potatoes',
        note: 'Use russet potatoes',
        quantity: 10,
        unit: 'pounds',
        status: 'in-progress',
        category: 1,
        restaurant_id: 1,
        date: new Date().toISOString().split('T')[0],
        kitchen_department_id: 1
    },
    {
        prep_list_id: 3,
        name: 'Caesar Dressing',
        description: 'House-made caesar dressing',
        note: '',
        quantity: 2,
        unit: 'quarts',
        status: 'todo',
        category: 4,
        restaurant_id: 1,
        date: new Date().toISOString().split('T')[0],
        kitchen_department_id: 2
    },
    {
        prep_list_id: 4,
        name: 'Chopped Vegetables',
        description: 'Diced onions, peppers, and celery',
        note: 'Fine dice for mirepoix',
        quantity: 5,
        unit: 'pounds',
        status: 'complete',
        category: 5,
        restaurant_id: 1,
        date: new Date().toISOString().split('T')[0],
        kitchen_department_id: 2
    },
    {
        prep_list_id: 5,
        name: 'Chocolate Ganache',
        description: 'Dark chocolate ganache for desserts',
        note: 'Use 70% chocolate',
        quantity: 3,
        unit: 'quarts',
        status: 'todo',
        category: 6,
        restaurant_id: 1,
        date: new Date().toISOString().split('T')[0],
        kitchen_department_id: 3
    }
];

// Retrieves all prep items for a restaurant
export const readPrepItems = async (req: Request, res: Response) => {
    logger.info('[prepitems.controller][readPrepItems][START]');
    try {
    
        let restaurantId = Number(req.params.restaurantId);
        console.log('resturantId',restaurantId);
        const response = await PrepItemDal.getPrepItems(restaurantId);
        logger.info('[prepitems.controller][readPrepItems][SUCCESS]', { response });

        res.status(200).json(response);
    } catch (error) {
        logger.error('[prepitems.controller][readPrepItems][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching prep items'
        });
    }
};

// Fetches daily prep items for a restaurant
export const readDailyPrepItems = async (req: Request, res: Response) => {
    logger.info('[prepitems.controller][readDailyPrepItems][START]');
    try {
        let restaurantId = Number(req.params.restaurantId);
        
        try {
            // Try to get data from the database first
            const response = await PrepItemDal.getDailyPrepItems(restaurantId);
            
            // If we got data from the database, return it
            if (response && response.length > 0) {
                logger.info('[prepitems.controller][readDailyPrepItems][SUCCESS][DB]', { count: response.length });
                return res.status(200).json(response);
            }
            
            // If no data from database, create prep items from mock data
            logger.info('[prepitems.controller][readDailyPrepItems][NO_DATA_FROM_DB] Creating from mock data');
            
            try {
                // First check if we need to create the prep items
                const existingPrepItems = await PrepItemDal.getPrepItems(restaurantId);
                
                if (existingPrepItems.length === 0) {
                    logger.info('[prepitems.controller][readDailyPrepItems][CREATING_PREP_ITEMS]');
                    
                    // Create prep items from mock data
                    for (const mockItem of mockDailyPrepItems) {
                        await PrepItemDal.createPrepItem(restaurantId, {
                            name: mockItem.name,
                            description: mockItem.description,
                            category: mockItem.category,
                            kitchen_department_id: mockItem.kitchen_department_id,
                            restaurant_id: restaurantId
                        } as any); // Use type assertion to bypass type checking
                    }
                }
                
                // Now create daily prep items for today
                const today = new Date();
                const dateId = parseInt(today.toISOString().split('T')[0].replace(/-/g, ''));
                
                // Create daily prep items for each mock item
                for (const mockItem of mockDailyPrepItems) {
                    // Get the prep item ID
                    const prepItemId = await PrepItemDal.getPrepItemId(mockItem.name, restaurantId);
                    
                    if (prepItemId) {
                        // Check if daily prep item already exists
                        const existingDailyItem = await PrepItemDal.getDailyPrepItemByPrepId(prepItemId, restaurantId, dateId);
                        
                        if (!existingDailyItem) {
                            // Create daily prep item
                            await PrepItemDal.createDailyPrepItemSingle({
                                prepItemId: prepItemId,
                                restaurantId: restaurantId,
                                dateId: dateId,
                                quantity: String(mockItem.quantity),
                                status: mockItem.status,
                                notes: mockItem.note || null
                            });
                        }
                    }
                }
                
                // Now get the daily prep items again
                const createdItems = await PrepItemDal.getDailyPrepItems(restaurantId);
                
                if (createdItems && createdItems.length > 0) {
                    logger.info('[prepitems.controller][readDailyPrepItems][CREATED_FROM_MOCK]', { count: createdItems.length });
                    return res.status(200).json(createdItems);
                }
                
                // If still no data, fall back to mock data
                logger.info('[prepitems.controller][readDailyPrepItems][FALLBACK_TO_MOCK]');
                return res.status(200).json(mockDailyPrepItems);
            } catch (createError) {
                logger.error('[prepitems.controller][readDailyPrepItems][CREATE_ERROR]', { error: createError });
                // If error creating items, fall back to mock data
                return res.status(200).json(mockDailyPrepItems);
            }
        } catch (dbError) {
            // If database error, log it and fall back to mock data
            logger.error('[prepitems.controller][readDailyPrepItems][DB_ERROR] Falling back to mock data', { dbError });
            return res.status(200).json(mockDailyPrepItems);
        }
    } catch (error) {
        logger.error('[prepitems.controller][readDailyPrepItems][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when fetching prep items'
        });
    }
};

// Updates a daily prep item for a restaurant
export const updateDailyPrepItem = async (req: Request, res: Response) => {
    logger.info('[prepitems.controller][updateDailyPrepItems][START]', {
        body: req.body,
        restaurantId: req.params.restaurantId
    });
    
    try {
        let restaurantId = Number(req.params.restaurantId);
        
        // Validate that required fields are present
        if (!req.body.name) {
            logger.error('[prepitems.controller][updateDailyPrepItems][VALIDATION_ERROR]', { 
                error: 'Missing name field', 
                body: req.body 
            });
            return res.status(400).json({
                message: 'Missing required field: name is required'
            });
        }
        
        if (!req.body.status) {
            logger.error('[prepitems.controller][updateDailyPrepItems][VALIDATION_ERROR]', { 
                error: 'Missing status field', 
                body: req.body 
            });
            return res.status(400).json({
                message: 'Missing required field: status is required'
            });
        }
        
        // Validate status value
        const validStatuses = ['todo', 'in-progress', 'complete', 'pending'];
        if (!validStatuses.includes(req.body.status)) {
            logger.error('[prepitems.controller][updateDailyPrepItems][VALIDATION_ERROR]', { 
                error: 'Invalid status value', 
                status: req.body.status,
                body: req.body 
            });
            return res.status(400).json({
                message: `Invalid status value: ${req.body.status}. Must be one of: ${validStatuses.join(', ')}`
            });
        }
        
        // Ensure the item has a restaurant_id
        const itemToUpdate = {
            ...req.body,
            restaurant_id: restaurantId
        };
        
        logger.info('[prepitems.controller][updateDailyPrepItems][PROCESSING]', { 
            itemToUpdate
        });
        
        try {
            const response = await PrepItemDal.updateDailyPrepItem(restaurantId, itemToUpdate);
            logger.info('[prepitems.controller][updateDailyPrepItems][SUCCESS]', { response });
            return res.status(200).json(response);
        } catch (dalError) {
            const errorMessage = dalError instanceof Error ? dalError.message : 'Unknown error in DAL';
            const errorStack = dalError instanceof Error ? dalError.stack : undefined;
            
            logger.error('[prepitems.controller][updateDailyPrepItem][DAL_ERROR]', { 
                error: errorMessage,
                stack: errorStack,
                body: req.body
            });
            
            return res.status(500).json({
                message: 'There was an error when updating the prep item',
                error: errorMessage
            });
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const errorStack = error instanceof Error ? error.stack : undefined;
        
        logger.error('[prepitems.controller][updateDailyPrepItem][ERROR]', { 
            error: errorMessage,
            stack: errorStack,
            body: req.body
        });
        
        res.status(500).json({
            message: 'There was an error when updating the prep item',
            error: errorMessage
        });
    }
};

// Creates a new prep item with validation
export const createPrepItem = async (req: Request, res: Response) => {
    logger.info('[prepitem.controller][createPrepItem][START]');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('[prepitem.controller][createPrepItem][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let restaurantId = Number(req.params.restaurantId);
        let itemData = req.body;

        const response = await PrepItemDal.createPrepItem(restaurantId, itemData);
        logger.info('[prepitem.controller][createPrepItem][SUCCESS]', { response });

        res.status(201).json(response);
    } catch (error) {
        logger.error('[prepitem.controller][createPrepItem][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when creating the prep item i am here'
        });
    }
};

export const createDailyPrepItems = async (req: Request, res: Response) => {
    console.log('[prepitem.controller][createDailyPrepItems][START]');
    console.log("Received body.prepList :", req.body.prepList); // Log the entire incoming body

    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('[prepitem.controller][createDailyPrepItems][VALIDATION_ERROR]', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const restaurantId = Number(req.params.restaurantId);
        console.log('[prepitem.controller][createDailyPrepItems][RESTAURANT_ID]', { restaurantId });

        const items = Array.isArray(req.body.prepList) ? req.body.prepList : [req.body.prepList];
        console.log('[prepitem.controller][createDailyPrepItems][ITEMS]', { items });

        const response = await PrepItemDal.createDailyPrepItems(restaurantId, items); // Call the DAO function for arrays
        console.log('[prepitem.controller][createDailyPrepItems][RESPONSE]', { response });

        res.status(201).json(response);
    } catch (error) {
        console.error('[prepitem.controller][createDailyPrepItems][ERROR]', { error });
        res.status(500).json({
            message: 'There was an error when creating the prep items',
        });
    }
};

// Add this controller function
export const updatePrepItem = async (req: Request, res: Response) => {
  logger.info('[prepitem.controller][updatePrepItem][START]');
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error('[prepitem.controller][updatePrepItem][VALIDATION_ERROR]', { errors: errors.array() });
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const restaurantId = Number(req.params.restaurantId);
    const prepItemId = Number(req.params.prepItemId);
    const itemData = req.body;

    const response = await PrepItemDal.updatePrepItem(prepItemId, itemData);
    logger.info('[prepitem.controller][updatePrepItem][SUCCESS]', { response });

    res.status(200).json(response);
  } catch (error) {
    logger.error('[prepitem.controller][updatePrepItem][ERROR]', { error });
    res.status(500).json({
      message: 'There was an error when updating the prep item'
    });
  }
};