import { db } from '../db/connection';
import { dimUsers, dimManager } from '../db/schema';
import { logger } from '../middleware/winston.middleware';
import { eq, and } from 'drizzle-orm';

// User interface definition
export interface User {
  user_id: number;
  username: string;
  email: string | null;
  role: string | null;
  restaurant_id: number | null;
  status: boolean | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;
}

// Retrieves all users for a specific restaurant
export const getUsers = async (restaurantId: number): Promise<User[]> => {
    logger.info('[user.dal][getUsers][START]', { restaurantId });
    try {
        const users = await db.select({
            user_id: dimUsers.userId,
            username: dimUsers.username,
            email: dimUsers.email,
            role: dimUsers.role,
            restaurant_id: dimUsers.restaurantId,
            status: dimUsers.isActive,
            created_at: dimUsers.createdAt,
            updated_at: dimUsers.updatedAt
        })
        .from(dimUsers)
        .where(eq(dimUsers.restaurantId, restaurantId));

        logger.info('[user.dal][getUsers][SUCCESS]', { users });
        return users;
    } catch (error) {
        logger.error('[user.dal][getUsers][ERROR]', { error });
        throw error;
    }
};

// Creates a new user with provided user data
export const createUser = async (userData: any): Promise<any> => {
    logger.info('[user.dal][createUser][START]', { userData });
    try {
        const result = await db.insert(dimUsers).values({
            username: userData.username,
            password: userData.password,
            email: userData.email,
            role: userData.role,
            restaurantId: userData.restaurant_id,
            isActive: true,
            firstName: userData.first_name,
            lastName: userData.last_name
        });

        logger.info('[user.dal][createUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[user.dal][createUser][ERROR]', { error });
        throw error;
    }
};

// Updates existing user information by ID
export const updateUser = async (userId: number, userData: any): Promise<any> => {
    logger.info('[user.dal][updateUser][START]', { userId, userData });
    try {
        const result = await db.update(dimUsers)
            .set({
                username: userData.username,
                email: userData.email,
                role: userData.role,
                restaurantId: userData.restaurant_id,
                isActive: userData.status === 'active',
                firstName: userData.first_name,
                lastName: userData.last_name
            })
            .where(eq(dimUsers.userId, userId));

        logger.info('[user.dal][updateUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[user.dal][updateUser][ERROR]', { error });
        throw error;
    }
};

// Removes a user from the system by ID
export const deleteUser = async (userId: number): Promise<any> => {
    logger.info('[user.dal][deleteUser][START]', { userId });
    try {
        // First, check if user is a manager
        const managerResult = await db.select()
            .from(dimManager)
            .where(eq(dimManager.userId, userId));

        if (managerResult && managerResult.length > 0) {
            // If user is a manager, deactivate the manager record
            await db.update(dimManager)
                .set({ isActive: false })
                .where(eq(dimManager.userId, userId));
        }

        // Then deactivate the user
        const result = await db.update(dimUsers)
            .set({ isActive: false })
            .where(eq(dimUsers.userId, userId));

        logger.info('[user.dal][deleteUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[user.dal][deleteUser][ERROR]', { error });
        throw error;
    }
};