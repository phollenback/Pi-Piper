import express from 'express';
import { createGroup, getGroups } from './group.controller';

import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = express.Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .get('/:restaurantId', getGroups)
    
    .post('/:restaurantId', createGroup);

export default router; 