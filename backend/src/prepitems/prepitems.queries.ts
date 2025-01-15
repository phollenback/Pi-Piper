
export const prepQueries = {
    getPrepItems: `
    SELECT * FROM dim_prep_item
    WHERE restaurant_id = ?
    `,

    getDailyPrepItems: `
    SELECT pl.list_item_id as id, pi.prep_item_name as name, pi.description, pi.item_category, pl.quantity, pl.unit, pl.status
    FROM fact_daily_prep_list pl
    JOIN dim_prep_item pi
    ON pl.prep_item_id = pi.prep_item_id
    WHERE restaurant_id = ?
    AND pl.date = CURDATE()
    `,

    createPrepItem: `
    INSERT INTO PrepItem (prep_item_name, description, item_category, kitchen_department_id, restaurant_id)
    VALUES (?, ?, ?, ?, ?);
    `,

    updatePrepItem:`
    UPDATE PrepItem
    SET prep_item_name = ?, description = ?, item_category = ?, kitchen_department_id = ?, restaurant_id = ?
    WHERE prep_item_id = ?
    `,

    deletePrepItem:`
    DELETE FROM PrepItem
    WHERE prep_item_id = ? && restaurant_id = ?
    `
}