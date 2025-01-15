export type PrepItem = { 
    prep_item_id: number,
    prep_item_name: string,
    description: string,
    item_category: string,
    kitchen_department_id: number,
    restaurant_id: number
}

export default interface PrepListItem {
    prep_list_id: number;
    name: string;
    description: string;
    note: string;
    quantity: number;
    unit: string;
    status: 'complete' | 'todo' | 'in-progress'; 
    category: number;
    restaurant_id: number;
    date: string;
}
const { Schema } = require('express-validator');


export const PrepListItemSchema: typeof Schema = {
    name: {
        notEmpty: true,
        errorMessage: 'Prep List Item Name field cannot be empty.'
    },
    description: {
        notEmpty: false, // Can be empty, but if it's filled, no validation is required
        errorMessage: 'Description field cannot be empty.'
    },
    note: {
        notEmpty: false, // Can be empty
        errorMessage: 'Note field cannot be empty.'
    },
    quantity: {
        notEmpty: true,
        isInt: {
            options: { min: 0 },
            errorMessage: 'Quantity must be a positive integer.'
        },
        errorMessage: 'Quantity field cannot be empty.'
    },
    unit: {
        notEmpty: true,
        errorMessage: 'Unit field cannot be empty.'
    },
    status: {
        notEmpty: true,
        isIn: {
            options: ['complete', 'todo', 'in-progress'],
            errorMessage: 'Status must be one of: complete, todo, or in-progress.'
        },
        errorMessage: 'Status field cannot be empty.'
    },
    category: {
        notEmpty: true,
        isInt: true,
        errorMessage: 'Category field must be a valid integer.'
    },
    restaurant_id: {
        notEmpty: true,
        isInt: true,
        errorMessage: 'Restaurant ID field must be a valid integer.'
    }
};

export const PrepItemSchema : typeof Schema = {
    prep_item_name: {
        notEmpty: true, 
        errorMessage: 'Prep Item Name field cannot be empty.'
    },
    description: {
        notEmpty: false, 
        errorMessage: 'Description field cannot be empty.'
    },
    item_category: {
        notEmpty: true,
        isInt: true,
        errorMessage: 'Item Category field cannot be empty.'
    },
    kitchen_department_id: {
        notEmpty: true, 
        isInt: true,
        errorMessage: 'Kitchen Department field cannot be empty.'
    }
}