import { Router } from 'express';
import { readDepartments } from './department.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .get('/:restaurantId', readDepartments);

export default router;