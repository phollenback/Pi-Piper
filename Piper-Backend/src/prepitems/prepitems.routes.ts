import { Router } from 'express'
import * as PrepItemController from './prepitem.controller'

const router = Router();

router 
    .route('/prep-items/:restaurantId')
    .get(PrepItemController.readPrepItems)

router 
    .route('/prep-items/:restaurantId')
    .post(PrepItemController.createPrepItem)

router 
    .route('/prep-items/:prepItemId')
    .put(PrepItemController.updatePrepItem)

router 
    .route('/prep-items/:restaurantId/:prepItemId')
    .delete(PrepItemController.deletePrepItem)

export default router;