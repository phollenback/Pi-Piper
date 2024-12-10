export const ingredientQueries = {
    getIngredients: `
    SELECT ingredient_id, ingredient_name, unit_of_measure, cost_per_unit, ingredient_category, restaurant_id
    FROM Ingredients
    WHERE restaurant_id = ?
    `,
    
    createIngredient:`
    INSERT INTO Ingredients (ingredient_name, unit_of_measure, cost_per_unit, ingredient_category, restaurant_id)
    VALUES (?, ?, ?, ?, ?)
    `,

    updateIngredient:`
    UPDATE Ingredients
    SET ingredient_name = ?, unit_of_measure = ?, cost_per_unit = ?, ingredient_category = ?, restaurant_id = ?
    WHERE ingredient_id = ?
    `,

    deleteIngredient:`
    DELETE FROM Ingredients
    WHERE ingredient_id = ? AND restaurant_id = ? 
    `
    
}