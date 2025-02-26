import request from 'supertest';
import express, { Request, Response } from 'express';
import userRoutes from './users.routes';
import * as UserController from './users.controller';

// Update the UserController mock to include proper mock types
jest.mock('./users.controller', () => ({
  getUsers: jest.fn<Promise<void>, [Request, Response]>(),
  createUser: jest.fn<Promise<void>, [Request, Response]>(),
  updateUser: jest.fn<Promise<void>, [Request, Response]>(),
  deleteUser: jest.fn<Promise<void>, [Request, Response]>()
}));

// Mock express-validator
jest.mock('express-validator', () => ({
  body: () => ({
    isString: () => ({ notEmpty: () => ({}) }),
    isEmail: () => ({ notEmpty: () => ({}) }),
    notEmpty: () => ({})
  }),
  checkSchema: jest.fn(() => []),
  validationResult: jest.fn(() => ({
    isEmpty: () => true,
    array: () => []
  }))
}));

// Mock database connection
jest.mock('../db/connection', () => ({
  query: jest.fn()
}));

describe('Users API', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/users', userRoutes);
    jest.clearAllMocks();
  });

  describe('GET /users/:restaurantId', () => {
    it('should return users for a restaurant', async () => {
      const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'manager' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'staff' }
      ];

      (UserController.getUsers as jest.Mock).mockImplementation((req: Request, res: Response) => {
        res.status(200).json(mockUsers);
      });

      const response = await request(app).get('/users/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUsers);
      expect(UserController.getUsers).toHaveBeenCalled();
    });

    it('should handle errors when fetching users', async () => {
      (UserController.getUsers as jest.Mock).mockImplementation((req: Request, res: Response) => {
        res.status(500).json({ message: 'Error fetching users' });
      });

      const response = await request(app).get('/users/1');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Error fetching users' });
      expect(UserController.getUsers).toHaveBeenCalled();
    });
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'New User',
        email: 'newuser@example.com',
        password: 'password123',
        role: 'staff',
        restaurantId: 1
      };

      const createdUser = {
        id: 3,
        ...newUser
      };

      (UserController.createUser as jest.Mock).mockImplementation((req: Request, res: Response) => {
        res.status(201).json(createdUser);
      });

      const response = await request(app)
        .post('/users')
        .send(newUser);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdUser);
      expect(UserController.createUser).toHaveBeenCalled();
    });
  });

  describe('PUT /users/:userId', () => {
    it('should update an existing user', async () => {
      const updatedUser = {
        id: 1,
        name: 'Updated Name',
        email: 'updated@example.com',
        role: 'manager'
      };

      (UserController.updateUser as jest.Mock).mockImplementation((req: Request, res: Response) => {
        res.status(200).json(updatedUser);
      });

      const response = await request(app)
        .put('/users/1')
        .send(updatedUser);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedUser);
      expect(UserController.updateUser).toHaveBeenCalled();
    });
  });

  describe('DELETE /users/:userId', () => {
    it('should delete a user', async () => {
      (UserController.deleteUser as jest.Mock).mockImplementation((req: Request, res: Response) => {
        res.status(200).json({ message: 'User deleted successfully' });
      });

      const response = await request(app).delete('/users/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'User deleted successfully' });
      expect(UserController.deleteUser).toHaveBeenCalled();
    });
  });
}); 