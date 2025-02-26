import request from 'supertest';
import express from 'express';
import groupRoutes from './group.routes';
import * as GroupService from './group.service';

// Mock the group service

jest.mock('./group.service', () => ({
  getGroups: jest.fn()
}));

// Mock the database connection
jest.mock('../services/pg.connector', () => ({
  pool: {
    end: jest.fn()
  }
}));

const app = express();
app.use(express.json());
app.use('/groups', groupRoutes);

describe('Group API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /groups/:restaurantId', () => {
    it('should return groups for a restaurant', async () => {
      const mockGroups = [
        {
          group_id: 1,
          group_name: 'Meat Prep',
          restaurant_id: 1,
          items: []
        }
      ];
      jest.mocked(GroupService.getGroups).mockResolvedValue(mockGroups);

      const response = await request(app).get('/groups/1');
      
      console.log('Response:', response.status, response.body); // Debugging
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockGroups);
      expect(GroupService.getGroups).toHaveBeenCalledWith('1');
    }, 30000);

    it('should handle errors when fetching groups', async () => {
      jest.mocked(GroupService.getGroups).mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/groups/1');
      
      console.log('Error Response:', response.status, response.body); // Debugging
      
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch groups' });
    }, 30000);
  });
}); 