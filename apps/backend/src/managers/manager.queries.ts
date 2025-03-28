export const userQueries = {
    getUsers: `
        SELECT 
            user_id,
            username,
            email,
            role,
            restaurant_id,
            is_active,
            created_at,
            updated_at
        FROM dim_users
        WHERE restaurant_id = ?
        AND role = 'manager'
        AND is_active = 1
    `,

    createUser: `
        INSERT INTO dim_users (
            username,
            password,
            email,
            role,
            restaurant_id,
            is_active
        ) VALUES (?, ?, ?, ?, ?, ?)
    `,

    updateUser: `
        UPDATE dim_users
        SET 
            username = COALESCE(?, username),
            email = COALESCE(?, email),
            role = COALESCE(?, role),
            restaurant_id = COALESCE(?, restaurant_id),
            is_active = COALESCE(?, is_active),
            updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ?
    `,

    deleteUser: `
        UPDATE dim_users
        SET is_active = 0
        WHERE user_id = ?
    `,

    getUserById: `
        SELECT 
            user_id,
            username,
            email,
            role,
            restaurant_id,
            is_active,
            created_at,
            updated_at
        FROM dim_users
        WHERE user_id = ?
    `
};