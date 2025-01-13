import { Router } from 'express'
import { readCategories } from './category.controller';

const router = Router();

router 
    .route('/categories')
    .get(readCategories)

export default router;