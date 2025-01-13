export type PrepItem = { 
    prep_item_id: number,
    prep_item_name: string,
    description: string,
    item_category: string,
    kitchen_department_id: number,
    restaurant_id: number
}

const { Schema } = require('express-validator');

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