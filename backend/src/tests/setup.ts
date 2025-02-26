import { jest } from '@jest/globals';
import { initializePgConnector } from '../services/pg.connector';

// Global setup for all tests
beforeAll(async () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Initializing database connection...');
    await initializePgConnector();
    console.log('Database connection initialized.');
  }
});

// Global teardown for all tests
afterAll(async () => {
  // Ensure all async operations are complete
});

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
}); 