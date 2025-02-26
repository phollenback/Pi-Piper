import express from 'express';
import { createGroup, getGroups } from './group.controller';

import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = express.Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router.post('/:restaurantId', createGroup);
router.get('/:restaurantId', getGroups);

export default router; 