import request from 'supertest';
import express from 'express';
import authRouter from './auth.routes';
import { execute } from '../services/pg.connector';
import bcrypt from 'bcrypt';

// Mock the database execute function
jest.mock('../services/pg.connector', () => ({
  execute: jest.fn()
}));

// Mock bcrypt
jest.mock('bcrypt', () => ({
  compare: jest.fn()
}));

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

describe('Auth Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /auth/login', () => {
    it('should login successfully with valid credentials', async () => {
      const mockUser = {
        user_id: 1,
        username: 'testuser',
        password: 'hashedpass',
        role: 'owner',
        restaurant_id: 1,
        status: 'active'
      };

      (execute as jest.Mock).mockResolvedValueOnce([mockUser]);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true);

      const response = await request(app)
        .post('/auth/login')
        .send({
          username: 'testuser',
          password: 'password'
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('role');
    });

    it('should fail with invalid credentials', async () => {
      (execute as jest.Mock).mockResolvedValueOnce([]);

      const response = await request(app)
        .post('/auth/login')
        .send({
          username: 'wronguser',
          password: 'wrongpass'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });

    it('should fail with missing credentials', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message');
    });
  });

  afterAll(done => {
    app.listen().close(done);
  });
}); 