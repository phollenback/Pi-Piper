import { User } from '../types/models/User';

const API_BASE_URL = 'http://localhost:3001';

// Get all managers for a restaurant
export const fetchManagers = async (restaurantId: number = 1): Promise<User[]> => {
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

// Get a manager by ID
export const getManagerById = async (userId: number): Promise<User> => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch manager');
        return response.json();
    } catch (error) {
        console.error('Error fetching manager:', error);
        throw error;
    }
}; 