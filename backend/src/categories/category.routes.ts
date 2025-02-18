import { Router } from 'express';
import { readCategories } from './category.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();
// Logger middleware
router.use(responseTimeLogger);
router.use(requestLogger);

// GET /categories
router
    .get('/', readCategories);

export default router;