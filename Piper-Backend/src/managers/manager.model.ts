export type Manager = {
    manager_id: number;
    manager_name: string;
    email : string;
    phone_number: string;
    role: string;
    restaurant_id: number;
    status: string;
}

const { Schema } = require('express-validator');

export const ManagerSchema : typeof Schema = {
    manager_name: {
        notEmpty: true, 
        errorMessage: 'Name field cannot be empty.'
    },
    email: {
        notEmpty: true, 
        errorMessage: 'Email field cannot be empty.'
    },
    phone_number: {
        notEmpty: true, 
        errorMessage: 'Phone Number field cannot be empty.'
    },
    role: {
        notEmpty: true, 
        errorMessage: 'Role field cannot be empty.'
    },
    restaurant_id: {
        notEmpty: true, 
        isInt: true,
        errorMessage: 'Restaurant ID field cannot be empty.'
    },
    status: {
        notEmpty: true, 
        errorMessage: 'Status field cannot be empty.'
    }
}