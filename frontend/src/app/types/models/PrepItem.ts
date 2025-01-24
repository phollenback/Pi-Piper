export interface PrepListItem {
    prep_list_id: number;
    name: string;
    description: string;
    note: string;
    quantity: number;
    unit: string;
    status: "complete" | "todo" | "in-progress"; 
    category: number;
    restaurant_id: number;
    date: string;
}

export interface PrepItem {
    prep_item_id: number;
    name: string;
    description: string; 
    category: number;
    kitchen_department_id: number;
}
export class PrepItemAdapter implements PrepListItem {
    prep_list_id: number;
    name: string;
    description: string;
    note: string;
    quantity: number;
    unit: string;
    status: "complete" | "todo" | "in-progress";
    category: number;
    restaurant_id: number;
    date: string;

    constructor(prepItem: PrepItem, quantity: number) {
        this.prep_list_id = prepItem.prep_item_id;
        this.name = prepItem.name;
        this.description = prepItem.description;
        this.note = '';
        this.quantity = quantity;
        this.unit = 'units';
        this.status = 'todo';
        this.category = prepItem.category;
        this.restaurant_id = 1;
        this.date = new Date().toISOString();
    }
}