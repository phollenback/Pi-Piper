import request from 'supertest';
import express from 'express';
import { jest } from '@jest/globals';
import managerRoutes from './managers.routes';
import * as UserDal from './manager.dal';
import { User } from './manager.dal';

// Mock the data access layer
jest.mock('./manager.dal', () => ({
  getUsers: jest.fn(),
  createUser: jest.fn(),
  updateUser: jest.fn(),
  deleteUser: jest.fn()
}));

const app = express();
app.use(express.json());
app.use('/managers', managerRoutes);

// Define a type for database query results
interface DbResult {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  serverStatus: number;
  warningCount: number;
  message: string;
  protocol41: boolean;
  changedRows: number;
}

describe('Manager API', () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('GET /managers/:restaurantId', () => {
    it('should return managers for a restaurant', async () => {
      const mockUsers: User[] = [
        {
          user_id: 1,
          username: 'testadmin',
          email: 'test@example.com',
          phone_number: '+1234567890',
          role: 'manager',
          restaurant_id: 1,
          status: 'active',
          created_at: '2023-01-01T00:00:00.000Z',
          updated_at: '2023-01-01T00:00:00.000Z'
        }
      ];

      // Mock the getUsers function with proper typing
      jest.mocked(UserDal.getUsers).mockResolvedValue(mockUsers);

      const response = await request(app).get('/managers/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUsers);
      expect(UserDal.getUsers).toHaveBeenCalledWith(1);
    });

    it('should handle errors when fetching managers', async () => {
      // Mock the getUsers function to throw an error
      jest.mocked(UserDal.getUsers).mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/managers/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Failed to retrieve users' });
    });
  });

  describe('POST /managers', () => {
    it('should create a new manager successfully', async () => {
      const newUser = {
        username: 'newadmin',
        password: 'securepassword',
        email: 'newadmin@example.com',
        phone_number: '+1234567890',
        role: 'manager',
        restaurant_id: 1,
        status: 'active'
      };

      const mockResponse: DbResult = {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 4,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
      };

      // Mock the createUser function
      jest.mocked(UserDal.createUser).mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/managers')
        .send(newUser);
      
      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockResponse);
      expect(UserDal.createUser).toHaveBeenCalledWith(newUser);
    });

    it('should handle validation errors when creating a manager', async () => {
      const invalidUser = {
        username: '',
        password: '',
        email: '',
        phone_number: '',
        role: '',
        restaurant_id: 1,
        status: 'active'
      };

      const response = await request(app)
        .post('/managers')
        .send(invalidUser);
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors.length).toBeGreaterThan(0);
      expect(UserDal.createUser).not.toHaveBeenCalled();
    });

    it('should handle server errors when creating a manager', async () => {
      const newUser = {
        username: 'newadmin',
        password: 'securepassword',
        email: 'newadmin@example.com',
        phone_number: '+1234567890',
        role: 'manager',
        restaurant_id: 1,
        status: 'active'
      };

      // Mock the createUser function to throw an error
      jest.mocked(UserDal.createUser).mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .post('/managers')
        .send(newUser);
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Failed to create user' });
    });
  });

  describe('PUT /managers/:userId', () => {
    it('should update a manager successfully', async () => {
      const updatedUser = {
        username: 'updatedadmin',
        password: 'newsecurepassword',
        email: 'updatedadmin@example.com',
        phone_number: '+0987654321',
        role: 'manager',
        restaurant_id: 1,
        status: 'active'
      };

      const mockResponse: DbResult = {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        serverStatus: 2,
        warningCount: 0,
        message: '(Rows matched: 1 Changed: 1)',
        protocol41: true,
        changedRows: 1
      };

      // Mock the updateUser function
      jest.mocked(UserDal.updateUser).mockResolvedValue(mockResponse);

      const response = await request(app)
        .put('/managers/1')
        .send(updatedUser);
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockResponse);
      expect(UserDal.updateUser).toHaveBeenCalledWith(1, updatedUser);
    });

    it('should handle validation errors when updating a manager', async () => {
      const invalidUser = {
        username: '',
        password: '',
        email: '',
        phone_number: '',
        role: '',
        restaurant_id: 1,
        status: 'active'
      };

      const response = await request(app)
        .put('/managers/1')
        .send(invalidUser);
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors.length).toBeGreaterThan(0);
      expect(UserDal.updateUser).not.toHaveBeenCalled();
    });

    it('should handle not found errors when updating a manager', async () => {
      const updatedUser = {
        username: 'updatedadmin',
        password: 'newsecurepassword',
        email: 'updatedadmin@example.com',
        phone_number: '+0987654321',
        role: 'manager',
        restaurant_id: 1,
        status: 'active'
      };

      // Mock the updateUser function to return null (user not found)
      jest.mocked(UserDal.updateUser).mockResolvedValue(null);

      const response = await request(app)
        .put('/managers/999')
        .send(updatedUser);
      
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'User not found' });
    });

    it('should handle server errors when updating a manager', async () => {
      const updatedUser = {
        username: 'updatedadmin',
        password: 'newsecurepassword',
        email: 'updatedadmin@example.com',
        phone_number: '+0987654321',
        role: 'manager',
        restaurant_id: 1,
        status: 'active'
      };

      // Mock the updateUser function to throw an error
      jest.mocked(UserDal.updateUser).mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .put('/managers/1')
        .send(updatedUser);
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Failed to update user' });
    });
  });

  describe('DELETE /managers/:userId', () => {
    it('should delete a manager successfully', async () => {
      const mockResponse: DbResult = {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
      };

      // Mock the deleteUser function
      jest.mocked(UserDal.deleteUser).mockResolvedValue(mockResponse);

      const response = await request(app).delete('/managers/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'User deleted successfully' });
      expect(UserDal.deleteUser).toHaveBeenCalledWith(1);
    });

    it('should handle not found errors when deleting a manager', async () => {
      // Mock the deleteUser function to return null (user not found)
      jest.mocked(UserDal.deleteUser).mockResolvedValue(null);

      const response = await request(app).delete('/managers/999');
      
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'User not found' });
    });

    it('should handle server errors when deleting a manager', async () => {
      // Mock the deleteUser function to throw an error
      jest.mocked(UserDal.deleteUser).mockRejectedValue(new Error('Database error'));

      const response = await request(app).delete('/managers/1');
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Failed to delete user' });
    });
  });
}); 