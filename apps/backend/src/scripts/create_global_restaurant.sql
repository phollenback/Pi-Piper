-- Insert Global restaurant
INSERT INTO dim_restaurant (
    restaurant_id,
    restaurant_name,
    address,
    city,
    state,
    zip_code,
    phone,
    email,
    created_at,
    updated_at,
    is_active
) VALUES (
    0,
    'Global Items',
    'System',
    'System',
    'WA',
    '00000',
    '000-000-0000',
    'pipiper@global.com',
    NOW(),
    NOW(),
    1
);

-- Insert Global categories
INSERT INTO dim_category (
    category_id,
    category_name,
    restaurant_id,
    created_at,
    updated_at
) VALUES 
(100, 'Pantry', 0, NOW(), NOW()),
(101, 'Oven', 0, NOW(), NOW()),
(102, 'Grill', 0, NOW(), NOW()),
(103, 'Slicing', 0, NOW(), NOW());

-- Verify the changes
SELECT * FROM dim_restaurant WHERE restaurant_id = 0;
SELECT * FROM dim_category WHERE restaurant_id = 0; 