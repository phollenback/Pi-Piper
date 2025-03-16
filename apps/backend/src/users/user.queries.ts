export const userQueries = {
    getUsers: `
        SELECT 
            user_id,
            username,
            email,
            phone_number,
            role,
            restaurant_id,
            CASE 
                WHEN is_active = 1 THEN 'active'
                ELSE 'inactive'
            END as status,
            created_at,
            updated_at
        FROM dim_users
        WHERE restaurant_id = ?
        AND role = 'prep'
        AND is_active = 1
    `,

    createUser: `
        INSERT INTO dim_users (
            username,
            password,
            email,
            phone_number,
            role,
            restaurant_id,
            is_active
        ) VALUES (?, ?, ?, ?, ?, ?, CASE WHEN ? = 'active' THEN 1 ELSE 0 END)
    `,

    updateUser: `
        UPDATE dim_users
        SET 
            username = COALESCE(?, username),
            email = COALESCE(?, email),
            phone_number = COALESCE(?, phone_number),
            role = COALESCE(?, role),
            restaurant_id = COALESCE(?, restaurant_id),
            is_active = CASE 
                WHEN ? = 'active' THEN 1
                ELSE 0
            END,
            updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ?
    `,

    deleteUser: `
        DELETE FROM dim_users
        WHERE user_id = ?
    `,

    getUserById: `
        SELECT 
            user_id,
            username,
            email,
            phone_number,
            role,
            restaurant_id,
            CASE 
                WHEN is_active = 1 THEN 'active'
                ELSE 'inactive'
            END as status,
            created_at,
            updated_at
        FROM dim_users
        WHERE user_id = ?
    `
}; 