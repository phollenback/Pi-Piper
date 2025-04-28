import request from 'supertest';
import { app } from '../app';
import { readCategories } from './category.controller';

// Mock the database connection
jest.mock('../db/connection', () => ({
  testConnection: jest.fn().mockResolvedValue(true),
  query: jest.fn(),
  db: {
    query: jest.fn()
  }
}));

jest.mock('./category.controller');

describe('Category API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /categories/:restaurantId', () => {
    it('should return all categories for a restaurant', async () => {
      const mockCategories = [
        { category_id: 1, category_name: 'Meat', restaurant_id: 1 },
        { category_id: 2, category_name: 'Produce', restaurant_id: 1 }
      ];

      (readCategories as jest.Mock).mockResolvedValue(mockCategories);

      const response = await request(app).get('/categories/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCategories);
      expect(readCategories).toHaveBeenCalled();
    });

    it('should handle errors when fetching categories', async () => {
      (readCategories as jest.Mock).mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/categories/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch categories' });
    });
  });
}); 