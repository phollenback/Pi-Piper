import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from './winston.middleware';

// Define interface to extend Request
interface AuthRequest extends Request {
  user: any; // Remove the optional '?' operator
}

export const verifyJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as jwt.JwtPayload;
    
    // Add expiration check
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      return res.status(401).json({ message: 'Token expired' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    logger.error('[jwt.middleware] Token verification failed:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
}; 