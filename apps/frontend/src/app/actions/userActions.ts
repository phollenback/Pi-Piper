import { User } from '../types/models/User';

const API_BASE_URL = 'http://localhost:3001';

// Type for user data to create/update
interface UserData {
    username: string;
    password?: string;
    email: string | null;
    role: 'owner' | 'manager' | 'prep';
    restaurant_id: number;
    status: 'active' | 'inactive';
}

// Response type for create/update operations
interface DbOperationResult {
    affectedRows: number;
    insertId?: number;
    changedRows?: number;
}

// Get all managers for a restaurant
export const fetchManagers = async (restaurantId: number): Promise<User[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${restaurantId}`);
        if (!response.ok) throw new Error('Failed to fetch managers');
        return response.json();
    } catch (error) {
        console.error('Error fetching managers:', error);
        throw error;
    }
};

// Create a new manager
export const createManager = async (managerData: {
    username: string;
    password: string;
    email?: string;
    phone_number?: string;
    restaurant_id: number;
    first_name?: string;
    last_name?: string;
}): Promise<User> => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...managerData,
                role: 'admin'
            }),
        });
        if (!response.ok) throw new Error('Failed to create manager');
        return response.json();
    } catch (error) {
        console.error('Error creating manager:', error);
        throw error;
    }
};

// Update an existing manager
export const updateManager = async (userId: number, managerData: {
    username?: string;
    email?: string;
    phone_number?: string;
    restaurant_id?: number;
    status?: 'active' | 'inactive';
    first_name?: string;
    last_name?: string;
    role?: 'admin' | 'user' | 'owner';
}): Promise<User> => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(managerData),
        });
        if (!response.ok) throw new Error('Failed to update manager');
        return response.json();
    } catch (error) {
        console.error('Error updating manager:', error);
        throw error;
    }
};

// Delete a manager
export const deleteManager = async (userId: number): Promise<void> => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete manager');
    } catch (error) {
        console.error('Error deleting manager:', error);
        throw error;
    }
};

// Get all prep users for a restaurant
export const getUsers = async (restaurantId: number): Promise<User[]> => {
    const response = await fetch(`http://localhost:3001/users/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
};

// Create a new prep user
export const createUser = async (userData: UserData): Promise<DbOperationResult> => {
    const response = await fetch(`http://localhost:3001/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
};

// Update an existing prep user
export const updateUser = async (userId: number, userData: Partial<UserData>): Promise<DbOperationResult> => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
};

// Delete a prep user
export const deleteUser = async (userId: number): Promise<{ message: string }> => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to delete user');
    return response.json();
}; 