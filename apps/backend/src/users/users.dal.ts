import { execute } from "../services/pg.connector";
import { userQueries } from "./user.queries";
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

// Retrieves all prep users for a specific restaurant
export const getUsers = async (restaurantId: number): Promise<User[]> => {
    logger.info('[users.dal][getUsers][START]', { restaurantId });
    try {
        const users = await execute(userQueries.getUsers, [restaurantId]);
        logger.info('[users.dal][getUsers][SUCCESS]', { users });
        return users as User[];
    } catch (error) {
        logger.error('[users.dal][getUsers][ERROR]', { error });
        throw error;
    }
};

// Creates a new prep user with provided user data
export const createUser = async (userData: any): Promise<any> => {
    logger.info('[users.dal][createUser][START]', { userData });
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
        logger.info('[users.dal][createUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[users.dal][createUser][ERROR]', { error });
        throw error;
    }
};

// Updates existing prep user information by ID
export const updateUser = async (userId: number, userData: any): Promise<any> => {
    logger.info('[users.dal][updateUser][START]', { userId, userData });
    try {
        // Log the SQL query and parameters for debugging
        const query = userQueries.updateUser;
        const params = [
            userData.username,
            userData.email,
            userData.phone_number,
            userData.role,
            userData.restaurant_id,
            userData.status,
            userId
        ];
        logger.info('[users.dal][updateUser][QUERY]', { query, params });

        const result = await execute(userQueries.updateUser, [
            userData.username,
            userData.email,
            userData.phone_number,
            userData.role,
            userData.restaurant_id,
            userData.status,
            userId
        ]);
        logger.info('[users.dal][updateUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[users.dal][updateUser][ERROR]', { error });
        throw error;
    }
};

// Removes a prep user from the system by ID
export const deleteUser = async (userId: number): Promise<any> => {
    logger.info('[users.dal][deleteUser][START]', { userId });
    try {
        const result = await execute(userQueries.deleteUser, [userId]);
        logger.info('[users.dal][deleteUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[users.dal][deleteUser][ERROR]', { error });
        throw error;
    }
}; 