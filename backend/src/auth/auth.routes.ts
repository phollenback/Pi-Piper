import { Router, RequestHandler, NextFunction } from 'express';
import { login } from './auth.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
import { verifyJWT } from '../middleware/jwt.middleware';
import { Request, Response } from 'express';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router.post('/login', login as RequestHandler);
// Example of a protected route
router.get('/protected', verifyJWT as RequestHandler, (req: Request, res: Response) => {
  res.json({ message: 'Access granted to protected route' });
});

export default router;

