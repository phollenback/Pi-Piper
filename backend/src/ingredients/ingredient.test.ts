import request from 'supertest';
import express from 'express';
import ingredientRoutes from './ingredient.routes';
import * as IngredientController from './ingredient.controller';
import { Request, Response, NextFunction } from 'express';

// Mock the ingredient controller
jest.mock('./ingredient.controller', () => ({
  readIngredients: jest.fn<Promise<void>, [Request, Response]>(),
  readInventory: jest.fn<Promise<void>, [Request, Response]>(),
  readSuggestions: jest.fn<Promise<void>, [Request, Response]>(),
  readPricing: jest.fn<Promise<void>, [Request, Response]>(),
  createIngredient: jest.fn<Promise<void>, [Request, Response]>(),
  updateIngredient: jest.fn<Promise<void>, [Request, Response]>(),
  deleteIngredient: jest.fn<Promise<void>, [Request, Response]>()
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
app.use('/ingredients', ingredientRoutes);

describe('Ingredient API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /ingredients/:restaurantId', () => {
    it('should return ingredients for a restaurant', async () => {
      const mockIngredients = [
        { ingredient_id: 1, ingredient_name: 'Chicken', ingredient_category: 1, restaurant_id: 1 },
        { ingredient_id: 2, ingredient_name: 'Beef', ingredient_category: 1, restaurant_id: 1 }
      ];
      
      // Mock the readIngredients function
      jest.mocked(IngredientController.readIngredients).mockImplementation((req, res) => {
        res.status(200).json(mockIngredients);
        return Promise.resolve();
      });

      const response = await request(app).get('/ingredients/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockIngredients);
      expect(IngredientController.readIngredients).toHaveBeenCalled();
    });

    it('should handle errors when fetching ingredients', async () => {
      // Mock the readIngredients function to simulate an error
      jest.mocked(IngredientController.readIngredients).mockImplementation((req, res) => {
        res.status(500).json({ error: 'Failed to fetch ingredients' });
        return Promise.resolve();
      });

      const response = await request(app).get('/ingredients/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch ingredients' });
    });
  });

  describe('GET /ingredients/inventory/:restaurantId', () => {
    it('should return inventory status for a restaurant', async () => {
      const mockInventory = [
        { ingredient_id: 1, ingredient_name: 'Chicken', current_stock: 10, par_level: 15 },
        { ingredient_id: 2, ingredient_name: 'Beef', current_stock: 5, par_level: 10 }
      ];
      
      // Mock the readInventory function
      jest.mocked(IngredientController.readInventory).mockImplementation((req, res) => {
        res.status(200).json(mockInventory);
        return Promise.resolve();
      });

      const response = await request(app).get('/ingredients/inventory/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockInventory);
      expect(IngredientController.readInventory).toHaveBeenCalled();
    });
  });

  describe('POST /ingredients/:restaurantId', () => {
    it('should create a new ingredient', async () => {
      const newIngredient = {
        ingredient_name: 'Pork',
        ingredient_category: 1,
        restaurant_id: 1
      };
      
      const mockResponse = { 
        ingredient_id: 3,
        ...newIngredient
      };
      
      // Mock the createIngredient function
      (jest.mocked(IngredientController.createIngredient) as jest.Mock).mockImplementation(
        (req: Request, res: Response) => {
          res.status(201).json(mockResponse);
          return Promise.resolve();
        }
      );

      const response = await request(app)
        .post('/ingredients/1')
        .send(newIngredient);
      
      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockResponse);
      expect(IngredientController.createIngredient).toHaveBeenCalled();
    });
  });

  describe('PUT /ingredients/ingredient', () => {
    it('should update an existing ingredient', async () => {
      const updatedIngredient = {
        ingredient_id: 1,
        ingredient_name: 'Chicken Breast',
        ingredient_category: 1,
        restaurant_id: 1
      };
      
      // Mock the updateIngredient function
      jest.mocked(IngredientController.updateIngredient).mockImplementation((req, res) => {
        res.status(200).json(updatedIngredient);
        return Promise.resolve();
      });

      const response = await request(app)
        .put('/ingredients/ingredient')
        .send(updatedIngredient);
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedIngredient);
      expect(IngredientController.updateIngredient).toHaveBeenCalled();
    });
  });

  describe('DELETE /ingredients/:restaurantId/:ingredientId', () => {
    it('should delete an ingredient', async () => {
      const mockResponse = { message: 'Ingredient deleted successfully' };
      
      // Mock the deleteIngredient function
      jest.mocked(IngredientController.deleteIngredient).mockImplementation((req, res) => {
        res.status(200).json(mockResponse);
        return Promise.resolve();
      });

      const response = await request(app).delete('/ingredients/1/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockResponse);
      expect(IngredientController.deleteIngredient).toHaveBeenCalled();
    });
  });
}); 