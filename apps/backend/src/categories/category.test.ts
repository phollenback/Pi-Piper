import request from 'supertest';
import express from 'express';
import categoryRoutes from './category.routes';
import * as CategoryController from './category.controller';

// Mock the category controller
jest.mock('./category.controller', () => ({
  readCategories: jest.fn()
}));

// Mock the database connection
jest.mock('../services/pg.connector', () => ({
  pool: {
    end: jest.fn()
  }
}));

const app = express();
app.use(express.json());
app.use('/categories', categoryRoutes);

describe('Category API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /categories', () => {
    it('should return all categories', async () => {
      const mockCategories = [
        { category_id: 1, category_name: 'Meat', color: 'red' },
        { category_id: 2, category_name: 'Vegetables', color: 'green' }
      ];
      
      // Mock the readCategories function
      jest.mocked(CategoryController.readCategories).mockImplementation((req, res) => {
        res.status(200).json(mockCategories);
        return Promise.resolve();
      });

      const response = await request(app).get('/categories');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCategories);
      expect(CategoryController.readCategories).toHaveBeenCalled();
    });

    it('should handle errors when fetching categories', async () => {
      // Mock the readCategories function to simulate an error
      jest.mocked(CategoryController.readCategories).mockImplementation((req, res) => {
        res.status(500).json({ error: 'Failed to fetch categories' });
        return Promise.resolve();
      });

      const response = await request(app).get('/categories');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch categories' });
    });
  });

  describe('GET /categories/:restaurantId', () => {
    it('should return all categories', async () => {
      const mockCategories = [
        { category_id: 1, category_name: 'Meat', color: 'red' },
        { category_id: 2, category_name: 'Vegetables', color: 'green' }
      ];
      
      // Mock the readCategories function
      jest.mocked(CategoryController.readCategories).mockImplementation((req, res) => {
        res.status(200).json(mockCategories);
        return Promise.resolve();
      });

      const response = await request(app).get('/categories/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCategories);
      expect(CategoryController.readCategories).toHaveBeenCalled();
    });

    it('should handle errors when fetching categories', async () => {
      // Mock the readCategories function to simulate an error
      jest.mocked(CategoryController.readCategories).mockImplementation((req, res) => {
        res.status(500).json({ error: 'Failed to fetch categories' });
        return Promise.resolve();
      });

      const response = await request(app).get('/categories/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch categories' });
    });
  });
}); 