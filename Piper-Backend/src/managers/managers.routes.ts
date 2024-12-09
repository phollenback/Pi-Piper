import { Router } from 'express'
import * as AdminController from './managers.controller'

const router = Router();

router 
    .route('/api/manager/:restaurantId')
    .get(AdminController.readManager)

router 
    .route('/api/manager')
    .post(AdminController.createManager)

router 
    .route('/api/manager/:managerId')
    .put(AdminController.updateManager)

router 
    .route('/api/manager/:managerId')
    .delete(AdminController.deleteManager)



export default router;