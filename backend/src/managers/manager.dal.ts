import  {Manager}  from "./manager.model";
import { execute } from "../services/pg.connector"
import { managerQueries } from "./manager.queries";


export const getManagers = async (restaurantId: number) => {
    console.log('[manager.dao][getManagers][DAL] ');
    return execute<Manager[]>(managerQueries.getManagers, [restaurantId]);
};

export const createManager = async (managerData: Manager) => {
    console.log('[manager.dao][createManager][DAL] ');
    return execute<Manager[]>(managerQueries.createManager, [managerData.manager_name, managerData.email, managerData.phone_number, managerData.role, managerData.restaurant_id, managerData.status]);

};

export const updateManager = async (managerId: number, managerData: Manager) => {
    console.log('[manager.dao][updateManager][DAL] ');
    return execute<Manager[]>(managerQueries.updateManager, [managerData.manager_name, managerData.email, managerData.phone_number, managerData.role, managerData.restaurant_id, managerData.status, managerId]);

};

export const deleteManager = async (managerId: number) => {
    console.log('[manager.dao][deleteManagers][DAL]');

    return execute<Manager[]>(managerQueries.deleteManager, [managerId])

};