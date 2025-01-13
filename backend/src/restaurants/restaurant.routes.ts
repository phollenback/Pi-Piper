import { Router } from 'express'
import { readRestaurants } from './restaurant.controller'

const router = Router();

router 
    .route('/restaurants')
    .get(readRestaurants)

export default router;