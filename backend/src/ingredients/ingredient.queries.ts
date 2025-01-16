export const ingredientQueries = {
    getIngredients: `
    SELECT ingredient_id, ingredient_name, unit_of_measure, cost_per_unit, ingredient_category, restaurant_id
    FROM dim_ingredient
    WHERE restaurant_id = ?
    `,
    
    createIngredient:`
    INSERT INTO dim_ingredient (ingredient_name, unit_of_measure, cost_per_unit, ingredient_category, restaurant_id)
    VALUES (?, ?, ?, ?, ?)
    `,

    updateIngredient:`
    UPDATE dim_ingredient
    SET ingredient_name = ?, unit_of_measure = ?, cost_per_unit = ?, ingredient_category = ?, restaurant_id = ?
    WHERE ingredient_id = ?
    `,

    deleteIngredient:`
    DELETE FROM dim_ingredient
    WHERE ingredient_id = ? AND restaurant_id = ? 
    `
    
}