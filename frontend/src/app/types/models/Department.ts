export default interface Department {
    kitchen_department_id: number;
    department_name: string;
    restaurant_id: number;
}

// Adapter for transforming Department data
export const departmentAdapter = {
    toSelectBoxOptions: (departments: Department[] = []) => {
        return departments.map(department => ({
            label: department.department_name,
            value: department.kitchen_department_id,
        }));
    }
};