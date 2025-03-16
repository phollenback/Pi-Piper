import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from './winston.middleware';

// Export the interface so it can be reused
export interface AuthRequest extends Request {
  user: any;
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as jwt.JwtPayload;
    
    // Add expiration check
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      res.status(401).json({ message: 'Token expired' });
      return;
    }

    // Cast to AuthRequest to add user property
    (req as AuthRequest).user = decoded;
    next();
  } catch (error) {
    logger.error('[jwt.middleware] Token verification failed:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
}; 