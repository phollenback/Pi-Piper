
INSERT INTO dim_prep_item (prep_item_name, description, item_category, kitchen_department_id, restaurant_id)
VALUES
('Slice Prosciutto', 'Thinly slice and wrap in paper', 10, 5, )


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