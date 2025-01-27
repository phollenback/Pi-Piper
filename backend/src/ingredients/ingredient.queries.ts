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
    `,

    getSyscoPricing:`
    SELECT 
        i.ingredient_id as ingredientId, 
        i.ingredient_name as ingredientName,
        ph.price as syscoPrice,
        i.ingredient_category as category
    FROM dim_ingredient i
    JOIN fact_price_history ph 
    ON i.ingredient_id = ph.ingredient_id
    WHERE ph.supplier_id = 1 
    AND i.restaurant_id = ?;
    `,

    getUsFoodsPricing:`
    SELECT 
        i.ingredient_id as ingredientId, 
        i.ingredient_name as ingredientName,
        ph.price as usFoodsPrice,
        i.ingredient_category as category
    FROM dim_ingredient i
    JOIN fact_price_history ph 
    ON i.ingredient_id = ph.ingredient_id
    WHERE ph.supplier_id = 2 
    AND i.restaurant_id = ?;
    `,

    getSuggestions:`
    SELECT 
        DISTINCT ingredient_id, 
        ingredient_name 
    FROM (
        SELECT 
            i.ingredient_id, 
            i.ingredient_name, 
            inv.quantity_after as inv
        FROM 
            fact_inventory inv
        JOIN 
            dim_ingredient i ON inv.ingredient_id = i.ingredient_id
        WHERE i.restaurant_id = ?
        ORDER BY 
            inv.quantity_after ASC
    ) AS subquery
    LIMIT 3;
    `
}