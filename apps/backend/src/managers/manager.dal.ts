import { execute } from "../services/pg.connector";
import { userQueries } from "./manager.queries";
import { logger } from '../middleware/winston.middleware';

// User interface definition
export interface User {
  user_id: number;
  username: string;
  email: string;
  phone_number: string;
  role: string;
  restaurant_id: number;
  status: string;
  created_at: string;
  updated_at: string;
}

// Retrieves all managers for a specific restaurant
export const getUsers = async (restaurantId: number): Promise<User[]> => {
    logger.info('[user.dal][getUsers][START]', { restaurantId });
    try {
        const users = await execute(userQueries.getUsers, [restaurantId]);
        logger.info('[user.dal][getUsers][SUCCESS]', { users });
        return users as User[];
    } catch (error) {
        logger.error('[user.dal][getUsers][ERROR]', { error });
        throw error;
    }
};

// Creates a new manager with provided manager data
export const createUser = async (userData: any): Promise<any> => {
    logger.info('[user.dal][createUser][START]', { userData });
    try {
        const result = await execute(userQueries.createUser, [
            userData.username,
            userData.password,
            userData.email,
            userData.phone_number,
            userData.role,
            userData.restaurant_id,
            userData.status
        ]);
        logger.info('[user.dal][createUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[user.dal][createUser][ERROR]', { error });
        throw error;
    }
};

// Updates existing manager information by ID
export const updateUser = async (userId: number, userData: any): Promise<any> => {
    logger.info('[user.dal][updateUser][START]', { userId, userData });
    try {
        const result = await execute(userQueries.updateUser, [
            userData.username,
            userData.email,
            userData.phone_number,
            userData.role,
            userData.restaurant_id,
            userData.status,
            userId
        ]);
        logger.info('[user.dal][updateUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[user.dal][updateUser][ERROR]', { error });
        throw error;
    }
};

// Removes a manager from the system by ID
export const deleteUser = async (userId: number): Promise<any> => {
    logger.info('[user.dal][deleteUser][START]', { userId });
    try {
        const result = await execute(userQueries.deleteUser, [userId]);
        logger.info('[user.dal][deleteUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[user.dal][deleteUser][ERROR]', { error });
        throw error;
    }
};