import { Router } from 'express'
import * as PrepItemController from './prepitem.controller'

const router = Router();

router 
    .route('/api/restaurants')
    .get(PrepItemController.readPrepItems)
