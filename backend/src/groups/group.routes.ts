import { Router, RequestHandler } from 'express';
import { createGroup, getGroups } from './group.controller';

import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router.post('/:restaurantId', createGroup as RequestHandler);
router.get('/:restaurantId', getGroups as RequestHandler);

export default router; 