export const categoryQueries = {
    getCategories: `
    SELECT category_id, category_name, category_type, description
    FROM dim_category
    `,
}