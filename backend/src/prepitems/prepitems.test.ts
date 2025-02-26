import request from 'supertest';
import express from 'express';
import prepItemsRoutes from './prepitems.routes';
import * as PrepItemController from './prepitem.controller';
import { Request, Response, NextFunction } from 'express';

// Mock the prepitem controller
jest.mock('./prepitem.controller', () => ({
  readPrepItems: jest.fn<Promise<void>, [Request, Response]>(),
  readDailyPrepItems: jest.fn<Promise<void>, [Request, Response]>(),
  updateDailyPrepItem: jest.fn<Promise<void>, [Request, Response]>(),
  createDailyPrepItems: jest.fn<Promise<void>, [Request, Response]>(),
  createPrepItem: jest.fn<Promise<void>, [Request, Response]>()
}));

// Mock express-validator
jest.mock('express-validator', () => ({
  checkSchema: () => [(_req: Request, _res: Response, next: NextFunction) => next()],
  validationResult: jest.fn(() => ({ isEmpty: () => true }))
}));

// Mock the database connection
jest.mock('../services/pg.connector', () => ({
  pool: {
    end: jest.fn()
  }
}));

const app = express();
app.use(express.json());
app.use('/prepitems', prepItemsRoutes);

describe('PrepItem API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /prepitems/:restaurantId', () => {
    it('should return prep items for a restaurant', async () => {
      const mockPrepItems = [
        { prep_item_id: 1, name: 'Slice Prosciutto', description: 'Thinly slice prosciutto', category: 1 },
        { prep_item_id: 2, name: 'Chop Carrots', description: 'Dice carrots into small cubes', category: 2 }
      ];
      
      // Mock the readPrepItems function
      jest.mocked(PrepItemController.readPrepItems).mockImplementation((req, res) => {
        res.status(200).json(mockPrepItems);
        return Promise.resolve();
      });

      const response = await request(app).get('/prepitems/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPrepItems);
      expect(PrepItemController.readPrepItems).toHaveBeenCalled();
    });

    it('should handle errors when fetching prep items', async () => {
      // Mock the readPrepItems function to simulate an error
      jest.mocked(PrepItemController.readPrepItems).mockImplementation((req, res) => {
        res.status(500).json({ error: 'Failed to fetch prep items' });
        return Promise.resolve();
      });

      const response = await request(app).get('/prepitems/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch prep items' });
    });
  });

  describe('GET /prepitems/daily/:restaurantId', () => {
    it('should return daily prep items for a restaurant', async () => {
      const mockDailyPrepItems = [
        { prep_list_id: 1, name: 'Slice Prosciutto', description: 'Thinly slice prosciutto', category: 1, status: 'todo' },
        { prep_list_id: 2, name: 'Chop Carrots', description: 'Dice carrots into small cubes', category: 2, status: 'in-progress' }
      ];
      
      // Mock the readDailyPrepItems function
      jest.mocked(PrepItemController.readDailyPrepItems).mockImplementation((req, res) => {
        res.status(200).json(mockDailyPrepItems);
        return Promise.resolve();
      });

      const response = await request(app).get('/prepitems/daily/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockDailyPrepItems);
      expect(PrepItemController.readDailyPrepItems).toHaveBeenCalled();
    });
  });

  describe('PUT /prepitems/daily/:restaurantId', () => {
    it('should update a daily prep item', async () => {
      const updatedPrepItem = {
        prep_list_id: 1,
        name: 'Slice Prosciutto',
        description: 'Thinly slice prosciutto',
        category: 1,
        status: 'complete'
      };
      
      // Mock the updateDailyPrepItem function
      jest.mocked(PrepItemController.updateDailyPrepItem).mockImplementation((req, res) => {
        res.status(200).json(updatedPrepItem);
        return Promise.resolve();
      });

      const response = await request(app)
        .put('/prepitems/daily/1')
        .send(updatedPrepItem);
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedPrepItem);
      expect(PrepItemController.updateDailyPrepItem).toHaveBeenCalled();
    });
  });

  describe('POST /prepitems/daily/:restaurantId', () => {
    it('should create daily prep items', async () => {
      const newDailyPrepItems = [
        { prep_item_id: 1, quantity: 5 },
        { prep_item_id: 2, quantity: 3 }
      ];
      
      const mockResponse = { message: 'Daily prep items created successfully' };
      
      // Mock the createDailyPrepItems function
      (jest.mocked(PrepItemController.createDailyPrepItems) as jest.Mock).mockImplementation(
        (req: Request, res: Response) => {
          res.status(201).json(mockResponse);
          return Promise.resolve();
        }
      );

      const response = await request(app)
        .post('/prepitems/daily/1')
        .send(newDailyPrepItems);
      
      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockResponse);
      expect(PrepItemController.createDailyPrepItems).toHaveBeenCalled();
    });
  });

  describe('POST /prepitems/:restaurantId', () => {
    it('should create a new prep item', async () => {
      const newPrepItem = {
        name: 'Dice Onions',
        description: 'Dice onions into small pieces',
        category: 2
      };
      
      const mockResponse = { 
        prep_item_id: 3,
        ...newPrepItem
      };
      
      // Mock the createPrepItem function
      (jest.mocked(PrepItemController.createPrepItem) as jest.Mock).mockImplementation(
        (req: Request, res: Response) => {
          res.status(201).json(mockResponse);
          return Promise.resolve();
        }
      );

      const response = await request(app)
        .post('/prepitems/1')
        .send(newPrepItem);
      
      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockResponse);
      expect(PrepItemController.createPrepItem).toHaveBeenCalled();
    });
  });
}); 