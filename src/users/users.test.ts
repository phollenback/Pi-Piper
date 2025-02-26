import express from 'express';
import userRoutes from './users.routes';
import * as UserController from './users.controller';

describe('Users API', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/users', userRoutes);
    jest.clearAllMocks();
  });

  // ... rest of the test cases ...
}); 