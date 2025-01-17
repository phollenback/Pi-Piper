export const departmentQueries = {
    getDepartments: `
        SELECT *
        FROM dim_kitchen
        WHERE restaurant_id = ?
    `,
};