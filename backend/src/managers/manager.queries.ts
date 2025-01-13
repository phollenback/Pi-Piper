export const managerQueries = {
    getManagers:`
    SELECT * FROM Managers
    WHERE restaurant_id = ?
    `,

    createManager:`
    INSERT INTO Managers (manager_name, email, phone_number, role, restaurant_id, status)
    VALUES (?, ?, ?, ?, ?, ?)
    `,

    updateManager:`
    UPDATE Managers
    SET manager_name = ?, email = ?, phone_number = ?, role = ?, restaurant_id = ?, status = ?
    WHERE manager_id = ?
    `,

    deleteManager:`
    DELETE FROM Managers
    WHERE manager_id = ?
    `
}