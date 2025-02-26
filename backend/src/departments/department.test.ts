import request from 'supertest';
import express from 'express';
import departmentRoutes from './department.routes';
import * as DepartmentController from './department.controller';

// Mock the department controller
jest.mock('./department.controller', () => ({
  readDepartments: jest.fn(),
  readDepProgress: jest.fn()
}));

// Mock the database connection
jest.mock('../services/pg.connector', () => ({
  pool: {
    end: jest.fn()
  }
}));

const app = express();
app.use(express.json());
app.use('/departments', departmentRoutes);

describe('Department API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /departments/:restaurantId', () => {
    it('should return departments for a restaurant', async () => {
      const mockDepartments = [
        { department_id: 1, department_name: 'Kitchen', restaurant_id: 1 },
        { department_id: 2, department_name: 'Bar', restaurant_id: 1 }
      ];
      
      // Mock the readDepartments function
      jest.mocked(DepartmentController.readDepartments).mockImplementation((req, res) => {
        res.status(200).json(mockDepartments);
        return Promise.resolve();
      });

      const response = await request(app).get('/departments/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockDepartments);
      expect(DepartmentController.readDepartments).toHaveBeenCalled();
    });

    it('should handle errors when fetching departments', async () => {
      // Mock the readDepartments function to simulate an error
      jest.mocked(DepartmentController.readDepartments).mockImplementation((req, res) => {
        res.status(500).json({ error: 'Failed to fetch departments' });
        return Promise.resolve();
      });

      const response = await request(app).get('/departments/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch departments' });
    });
  });

  describe('GET /departments/daily/:restaurantId', () => {
    it('should return department progress for a restaurant', async () => {
      const mockProgress = [
        { department_id: 1, department_name: 'Kitchen', total_items: 10, completed_items: 5 },
        { department_id: 2, department_name: 'Bar', total_items: 8, completed_items: 3 }
      ];
      
      // Mock the readDepProgress function
      jest.mocked(DepartmentController.readDepProgress).mockImplementation((req, res) => {
        res.status(200).json(mockProgress);
        return Promise.resolve();
      });

      const response = await request(app).get('/departments/daily/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockProgress);
      expect(DepartmentController.readDepProgress).toHaveBeenCalled();
    });

    it('should handle errors when fetching department progress', async () => {
      // Mock the readDepProgress function to simulate an error
      jest.mocked(DepartmentController.readDepProgress).mockImplementation((req, res) => {
        res.status(500).json({ error: 'Failed to fetch department progress' });
        return Promise.resolve();
      });

      const response = await request(app).get('/departments/daily/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch department progress' });
    });
  });
}); 