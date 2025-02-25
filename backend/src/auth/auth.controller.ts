import { Request, Response } from 'express';
import { execute } from '../services/pg.connector';
import bcrypt from 'bcrypt';
import { logger } from '../middleware/winston.middleware';

interface User {
  user_id: number;
  username: string;
  password: string;
  role: string;
  restaurant_id: number;
  status: string;
}

interface QueryResult extends Array<User> {}

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    logger.info('[auth.controller][login] Login attempt:', { username });

    const [user] = (await execute(
      `SELECT user_id, username, password, role, restaurant_id, status 
       FROM dim_users 
       WHERE username = ? 
       AND status = 'active'`,
      [username]
    ) as QueryResult);

    if (!user) {
      logger.error('[auth.controller][login] User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      logger.error('[auth.controller][login] Invalid password');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Format response to match NextAuth User interface
    res.json({
      id: user.user_id.toString(),
      name: user.username,
      email: user.username, // Using username as email
      role: user.role,
      restaurant_id: user.restaurant_id
    });
    
  } catch (error) {
    logger.error('[auth.controller][login][ERROR]', { error });
    res.status(500).json({ message: 'Server error' });
  }
}; 