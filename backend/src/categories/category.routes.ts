import { Router } from 'express';
import { readCategories } from './category.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .route('/categories')
    .get(readCategories);

export default router;