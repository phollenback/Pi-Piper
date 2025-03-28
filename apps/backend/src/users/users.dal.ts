import { db } from '../db/connection';
import { dimUsers } from '../db/schema';
import { logger } from '../middleware/winston.middleware';
import { eq, and, sql, or } from 'drizzle-orm';

// User interface definition
export interface User {
  user_id: number;
  username: string;
  email: string | null;
  role: string | null;
  restaurant_id: number | null;
  status: string;
  created_at: Date | null;
  updated_at: Date | null;
}

// Retrieves all users for a specific restaurant by role
export const getUsers = async (restaurantId: number, role?: 'user' | 'admin' | 'owner'): Promise<User[]> => {
    logger.info('[users.dal][getUsers][START]', { restaurantId, role });
    try {
        const conditions = [
            eq(dimUsers.restaurantId, restaurantId),
            eq(dimUsers.isActive, true)
        ];

        if (role) {
            conditions.push(eq(dimUsers.role, role));
        }

        const users = await db.select({
            user_id: dimUsers.userId,
            username: dimUsers.username,
            email: dimUsers.email,
            role: dimUsers.role,
            restaurant_id: dimUsers.restaurantId,
            status: sql<string>`IF(${dimUsers.isActive} = 1, 'active', 'inactive')`,
            created_at: dimUsers.createdAt,
            updated_at: dimUsers.updatedAt
        })
        .from(dimUsers)
        .where(and(...conditions));

        logger.info('[users.dal][getUsers][SUCCESS]', { users });
        return users;
    } catch (error) {
        const err = error as Error;
        logger.error('[users.dal][getUsers][ERROR]', { 
            error: err.message,
            stack: err.stack
        });
        throw error;
    }
};

// Creates a new user with provided user data
export const createUser = async (userData: {
    username: string;
    password: string;
    email?: string;
    role: 'user' | 'admin' | 'owner';
    restaurant_id: number;
    first_name?: string;
    last_name?: string;
}): Promise<any> => {
    logger.info('[users.dal][createUser][START]', { userData });
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

        logger.info('[users.dal][createUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        const err = error as Error;
        logger.error('[users.dal][createUser][ERROR]', { 
            error: err.message,
            stack: err.stack
        });
        throw error;
    }
};

// Updates existing user information by ID
export const updateUser = async (userId: number, userData: {
    username?: string;
    email?: string;
    role?: 'user' | 'admin' | 'owner';
    restaurant_id?: number;
    status?: 'active' | 'inactive';
    first_name?: string;
    last_name?: string;
}): Promise<any> => {
    logger.info('[users.dal][updateUser][START]', { userId, userData });
    try {
        const result = await db.update(dimUsers)
            .set({
                username: userData.username || sql`${dimUsers.username}`,
                email: userData.email || sql`${dimUsers.email}`,
                role: userData.role || sql`${dimUsers.role}`,
                restaurantId: userData.restaurant_id || sql`${dimUsers.restaurantId}`,
                isActive: userData.status === 'active',
                firstName: userData.first_name,
                lastName: userData.last_name,
                updatedAt: sql`CURRENT_TIMESTAMP`
            })
            .where(eq(dimUsers.userId, userId));

        logger.info('[users.dal][updateUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        const err = error as Error;
        logger.error('[users.dal][updateUser][ERROR]', { 
            error: err.message,
            stack: err.stack
        });
        throw error;
    }
};

// Removes a user from the system by ID (soft delete)
export const deleteUser = async (userId: number): Promise<any> => {
    logger.info('[users.dal][deleteUser][START]', { userId });
    try {
        const result = await db.update(dimUsers)
            .set({ 
                isActive: false,
                updatedAt: sql`CURRENT_TIMESTAMP`
            })
            .where(eq(dimUsers.userId, userId));

        logger.info('[users.dal][deleteUser][SUCCESS]', { result });
        return result;
    } catch (error) {
        const err = error as Error;
        logger.error('[users.dal][deleteUser][ERROR]', { 
            error: err.message,
            stack: err.stack
        });
        throw error;
    }
};

// Get a user by ID
export const getUserById = async (userId: number): Promise<User | null> => {
    logger.info('[users.dal][getUserById][START]', { userId });
    try {
        const users = await db.select({
            user_id: dimUsers.userId,
            username: dimUsers.username,
            email: dimUsers.email,
            role: dimUsers.role,
            restaurant_id: dimUsers.restaurantId,
            status: sql<string>`IF(${dimUsers.isActive} = 1, 'active', 'inactive')`,
            created_at: dimUsers.createdAt,
            updated_at: dimUsers.updatedAt
        })
        .from(dimUsers)
        .where(eq(dimUsers.userId, userId))
        .limit(1);

        logger.info('[users.dal][getUserById][SUCCESS]', { user: users[0] });
        return users[0] || null;
    } catch (error) {
        const err = error as Error;
        logger.error('[users.dal][getUserById][ERROR]', { 
            error: err.message,
            stack: err.stack
        });
        throw error;
    }
};

// Get users by role across all restaurants (for admin/owner access)
export const getUsersByRole = async (role: 'user' | 'admin' | 'owner'): Promise<User[]> => {
    logger.info('[users.dal][getUsersByRole][START]', { role });
    try {
        const users = await db.select({
            user_id: dimUsers.userId,
            username: dimUsers.username,
            email: dimUsers.email,
            role: dimUsers.role,
            restaurant_id: dimUsers.restaurantId,
            status: sql<string>`IF(${dimUsers.isActive} = 1, 'active', 'inactive')`,
            created_at: dimUsers.createdAt,
            updated_at: dimUsers.updatedAt
        })
        .from(dimUsers)
        .where(
            and(
                eq(dimUsers.role, role),
                eq(dimUsers.isActive, true)
            )
        );

        logger.info('[users.dal][getUsersByRole][SUCCESS]', { users });
        return users;
    } catch (error) {
        const err = error as Error;
        logger.error('[users.dal][getUsersByRole][ERROR]', { 
            error: err.message,
            stack: err.stack
        });
        throw error;
    }
}; 