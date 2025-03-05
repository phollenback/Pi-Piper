import Department from '@/app/types/models/Department';
import DepartmentProg from '@/app/types/models/DepartmentProg';

// Fetch departments
export const fetchDepartments = async (restaurantId: number): Promise<Department[]> => {
    const response = await fetch(`http://localhost:3000/departments/${restaurantId}`);
    if (!response.ok) throw new Error(`Error fetching departments: ${response.statusText}`);
    return response.json();
};

// Fetch department progress
export const fetchDepProgress = async (restaurantId: number): Promise<DepartmentProg[]> => {
    const response = await fetch(`http://localhost:3000/departments/daily/${restaurantId}`);
    if (!response.ok) throw new Error(`Error fetching department progress: ${response.statusText}`);
    return response.json();
}; 