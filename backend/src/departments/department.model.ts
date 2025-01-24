export class Department {
    kitchen_department_id: number;
    department_name: string;
    restaurant_id: number;

    constructor(kitchen_department_id: number, department_name: string, restaurant_id: number) {
        this.kitchen_department_id = kitchen_department_id;
        this.department_name = department_name;
        this.restaurant_id = restaurant_id;
    }
}

export class DepartmentProg extends Department {
    progress: number;
    total_items: number;
    completed_items: number;

    constructor(kitchen_department_id: number, department_name: string, restaurant_id: number, progress: number, total_items: number, completed_items: number) {
        super(kitchen_department_id, department_name, restaurant_id);
        this.progress = progress;
        this.total_items = total_items;
        this.completed_items = completed_items;
    }
}