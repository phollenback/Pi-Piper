import { Admin } from '../components/ManagerDash/AdminManager/types';

// Type for manager data to create/update
interface ManagerData {
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

// Get all managers for a restaurant
export const getManagers = async (restaurantId: number): Promise<Admin[]> => {
    const response = await fetch(`http://localhost:3001/managers/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch managers');
    return response.json();
};

// Create a new manager
export const createManager = async (userData: ManagerData): Promise<DbOperationResult> => {
    const response = await fetch(`http://localhost:3001/managers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to create manager');
    return response.json();
};

// Update an existing manager
export const updateManager = async (userId: number, userData: Partial<ManagerData>): Promise<DbOperationResult> => {
    const response = await fetch(`http://localhost:3001/managers/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to update manager');
    return response.json();
};

// Delete a manager
export const deleteManager = async (userId: number): Promise<{ message: string }> => {
    const response = await fetch(`http://localhost:3001/managers/${userId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to delete manager');
    return response.json();
}; 