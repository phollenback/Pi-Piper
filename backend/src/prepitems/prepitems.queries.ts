export const prepQueries = {
    getPrepItems: `
    SELECT * FROM PrepItem
    WHERE restaurant_id = ?
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