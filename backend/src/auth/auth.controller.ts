import { Request, Response } from 'express';
import { execute } from '../services/pg.connector';
import bcrypt from 'bcrypt';
import { logger } from '../middleware/winston.middleware';
import { pool } from '../services/pg.connector';
import jwt from 'jsonwebtoken';

interface User {
  user_id: number;
  username: string;
  password: string;
  role: string;
  restaurant_id: number;
  status: string;
}

interface QueryResult extends Array<User> {}

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Check for missing credentials
    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
    }

    const [user] = await execute(
      'SELECT user_id, username, password, role, restaurant_id, status FROM dim_users WHERE username = ? AND status = ?',
      [username, 'active']
    ) as any[];

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    res.status(200).json({
      id: user.user_id.toString(),
      name: user.username,
      email: user.username,
      role: user.role,
      restaurant_id: user.restaurant_id
    });

  } catch (error) {
    logger.error('[auth.controller][login][ERROR]', { error });
    res.status(500).json({ message: 'Server error' });
  }
}; 