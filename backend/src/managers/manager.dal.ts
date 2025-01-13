import { Manager } from "./manager.model";
import { execute } from "../services/pg.connector";
import { managerQueries } from "./manager.queries";
import { logger } from '../middleware/winston.middleware';

export const getManagers = async (restaurantId: number) => {
    logger.info('[manager.dao][getManagers][START]', { restaurantId });
    try {
        const managers = await execute<Manager[]>(managerQueries.getManagers, [restaurantId]);
        logger.info('[manager.dao][getManagers][SUCCESS]', { managers });
        return managers;
    } catch (error) {
        logger.error('[manager.dao][getManagers][ERROR]', { error });
        throw error;
    }
};

export const createManager = async (managerData: Manager) => {
    logger.info('[manager.dao][createManager][START]', { managerData });
    try {
        const managers = await execute<Manager[]>(managerQueries.createManager, [
            managerData.manager_name,
            managerData.email,
            managerData.phone_number,
            managerData.role,
            managerData.restaurant_id,
            managerData.status
        ]);
        logger.info('[manager.dao][createManager][SUCCESS]', { managers });
        return managers;
    } catch (error) {
        logger.error('[manager.dao][createManager][ERROR]', { error });
        throw error;
    }
};

export const updateManager = async (managerId: number, managerData: Manager) => {
    logger.info('[manager.dao][updateManager][START]', { managerId, managerData });
    try {
        const managers = await execute<Manager[]>(managerQueries.updateManager, [
            managerData.manager_name,
            managerData.email,
            managerData.phone_number,
            managerData.role,
            managerData.restaurant_id,
            managerData.status,
            managerId
        ]);
        logger.info('[manager.dao][updateManager][SUCCESS]', { managers });
        return managers;
    } catch (error) {
        logger.error('[manager.dao][updateManager][ERROR]', { error });
        throw error;
    }
};

export const deleteManager = async (managerId: number) => {
    logger.info('[manager.dao][deleteManager][START]', { managerId });
    try {
        const managers = await execute<Manager[]>(managerQueries.deleteManager, [managerId]);
        logger.info('[manager.dao][deleteManager][SUCCESS]', { managers });
        return managers;
    } catch (error) {
        logger.error('[manager.dao][deleteManager][ERROR]', { error });
        throw error;
    }
};