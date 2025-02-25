export const userQueries = {
    getUsers: `
        SELECT 
            user_id,
            username,
            email,
            phone_number,
            role,
            restaurant_id,
            status,
            created_at,
            updated_at
        FROM dim_users
        WHERE restaurant_id = ?
        AND role = 'manager'
        AND status = 'active'
    `,

    createUser: `
        INSERT INTO dim_users (
            username,
            password,
            email,
            phone_number,
            role,
            restaurant_id,
            status
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `,

    updateUser: `
        UPDATE dim_users
        SET 
            username = COALESCE(?, username),
            email = COALESCE(?, email),
            phone_number = COALESCE(?, phone_number),
            role = COALESCE(?, role),
            restaurant_id = COALESCE(?, restaurant_id),
            status = COALESCE(?, status),
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
            status,
            created_at,
            updated_at
        FROM dim_users
        WHERE user_id = ?
    `
};