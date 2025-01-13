export type Ingredient = {
    ingredient_id: number,
    ingredient_name: string,
    unit_of_measure: string,
    cost_per_unit: number,
    ingredient_category: number,
    restaurant_id: number,
}

const { Schema } = require('express-validator');

export const IngredientSchema : typeof Schema = {
    ingredient_name: {
        notEmpty: true, 
        errorMessage: 'Ingredient Item Name field cannot be empty.'
    },
    unit_of_measure: {
        notEmpty: false, 
        errorMessage: 'Unit of Measurement field cannot be empty.'
    },
    cost_per_unit: {
        notEmpty: true, 
        errorMessage: 'Price field cannot be empty.'
    },
    ingredient_category: {
        notEmpty: true, 
        isInt: true,
        errorMessage: 'Ingredient category field cannot be empty.'
    }
}