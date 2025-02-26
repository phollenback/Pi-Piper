import request from 'supertest';
import express, { Request, Response } from 'express';
import restaurantRoutes from './restaurant.routes';
import * as RestaurantController from './restaurant.controller';

// Mock the restaurant controller
jest.mock('./restaurant.controller', () => ({
  readRestaurants: jest.fn()
}));

// Mock database connection
jest.mock('../db/connection', () => ({
  query: jest.fn()
}));

describe('Restaurant API', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/restaurants', restaurantRoutes);
    jest.clearAllMocks();
  });

  describe('GET /restaurants', () => {
    it('should return all restaurants', async () => {
      const mockRestaurants = [
        { id: 1, name: 'Test Restaurant 1', location: 'Test Location 1' },
        { id: 2, name: 'Test Restaurant 2', location: 'Test Location 2' }
      ];

      (RestaurantController.readRestaurants as jest.Mock).mockImplementation((req: Request, res: Response) => {
        res.status(200).json(mockRestaurants);
      });

      const response = await request(app).get('/restaurants');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockRestaurants);
      expect(RestaurantController.readRestaurants).toHaveBeenCalled();
    });

    it('should handle errors when fetching restaurants', async () => {
      (RestaurantController.readRestaurants as jest.Mock).mockImplementation((req: Request, res: Response) => {
        res.status(500).json({ message: 'Error fetching restaurants' });
      });

      const response = await request(app).get('/restaurants');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Error fetching restaurants' });
      expect(RestaurantController.readRestaurants).toHaveBeenCalled();
    });
  });
}); 