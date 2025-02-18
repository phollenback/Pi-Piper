// Class representing a department in a restaurant
export class Department {
    kitchen_department_id: number; // Unique ID for the kitchen department
    department_name: string; // Name of the department
    restaurant_id: number; // ID of the restaurant the department belongs to

    // Constructor to initialize a Department instance
    constructor(kitchen_department_id: number, department_name: string, restaurant_id: number) {
        this.kitchen_department_id = kitchen_department_id;
        this.department_name = department_name;
        this.restaurant_id = restaurant_id;
    }
}

// Class representing department progress, extending the Department class
export class DepartmentProg extends Department {
    progress: number; // Percentage of completion
    total_items: number; // Total number of items in the department
    completed_items: number; // Number of items that have been completed

    // Constructor to initialize a DepartmentProg instance
    constructor(kitchen_department_id: number, department_name: string, restaurant_id: number, progress: number, total_items: number, completed_items: number) {
        super(kitchen_department_id, department_name, restaurant_id); // Call the parent constructor
        this.progress = progress;
        this.total_items = total_items;
        this.completed_items = completed_items;
    }
}