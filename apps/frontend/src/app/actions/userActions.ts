import { Admin } from '../components/ManagerDash/AdminManager/types';

// Type for user data to create/update
interface UserData {
    username: string;
    password?: string;
    email: string | null;
    phone_number: string | null;
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

// Get all prep users for a restaurant
export const getUsers = async (restaurantId: number): Promise<Admin[]> => {
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