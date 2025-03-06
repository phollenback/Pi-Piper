export const departmentQueries = {
    getDepartments: `
        SELECT *
        FROM dim_kitchen
        WHERE restaurant_id = ?
    `,

    getDepProgress: `
        SELECT 
        p.kitchen_department_id,
        d.department_name,
        d.restaurant_id,
        COUNT(p.prep_item_id) AS total_items,
        SUM(CASE WHEN pl.status = 'complete' THEN 1 ELSE 0 END) AS completed_items,
        (SUM(CASE WHEN pl.status = 'complete' THEN 1 ELSE 0 END) / COUNT(p.prep_item_id)) * 100 AS progress
    FROM 
        dim_prep_item p
    JOIN 
        fact_daily_prep_list pl ON p.prep_item_id = pl.prep_item_id
    JOIN 
        dim_kitchen d ON p.kitchen_department_id = d.kitchen_department_id
    WHERE 
        pl.date_id = 20231001
        AND pl.restaurant_id = 1
    GROUP BY 
        p.kitchen_department_id, d.department_name, d.restaurant_id
    ORDER BY 
        progress DESC;
    `
};