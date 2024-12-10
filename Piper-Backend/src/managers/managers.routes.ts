import { Router } from 'express'
import * as AdminController from './managers.controller'

const router = Router();

router 
    .route('/manager/:restaurantId')
    .get(AdminController.readManager)

router 
    .route('/manager')
    .post(AdminController.createManager)

router 
    .route('/manager/:managerId')
    .put(AdminController.updateManager)

router 
    .route('/manager/:managerId')
    .delete(AdminController.deleteManager)



export default router;