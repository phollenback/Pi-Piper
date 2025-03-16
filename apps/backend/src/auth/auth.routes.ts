import { Router, RequestHandler, NextFunction } from 'express';
import { login, protectedRoute } from './auth.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
import { verifyJWT } from '../middleware/jwt.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router.post('/login', login);
router.get('/protected', verifyJWT, protectedRoute);

export default router;

