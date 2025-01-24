import { Router } from 'express';
import { readDepartments, readDepProgress } from './department.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .get('/:restaurantId', readDepartments);

router
    .get('/daily/:restaurantId', readDepProgress)

export default router;