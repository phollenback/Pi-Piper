
export const prepQueries = {
    getPrepItems: `
    SELECT prep_item_id, prep_item_name as name, description, item_category as category, kitchen_department_id, restaurant_id
    FROM dim_prep_item
    WHERE restaurant_id = ?
    `,

    getDailyPrepItems: `
    SELECT pl.list_item_id as id, pi.prep_item_name as name, pi.description, pi.item_category as category, pl.quantity, pl.unit, pl.status
    FROM fact_daily_prep_list pl
    JOIN dim_prep_item pi
    ON pl.prep_item_id = pi.prep_item_id
    WHERE pi.restaurant_id = ?
    AND pl.date = CURDATE()
    `,

    createPrepItem: `
    INSERT INTO dim_prep_item (prep_item_name, description, item_category, kitchen_department_id, restaurant_id)
    VALUES (?, ?, ?, ?, ?);
    `,

    createDailyPrepItems: `
    INSERT INTO fact_daily_prep_list (prep_list_id, restaurant_id, prep_item_id, quantity, unit, status, date)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `,

    updatePrepItem:`
    UPDATE dim_prep_item
    SET prep_item_name = ?, description = ?, item_category = ?, kitchen_department_id = ?, restaurant_id = ?
    WHERE prep_item_id = ?
    `,

    deletePrepItem:`
    DELETE FROM dim_prep_item
    WHERE prep_item_id = ? && restaurant_id = ?
    `,

    getPrepItemId:`
    SELECT prep_item_id
    FROM dim_prep_item
    WHERE prep_item_name = ? AND restaurant_id = ?
    `
}