-- Insert test data for Piper_Net database
USE `Piper_Net`;

-- Insert data into dim_restaurant (base table with no foreign keys)
INSERT INTO `dim_restaurant` (`restaurant_name`, `address`, `city`, `state`, `zip_code`, `phone`, `email`) VALUES
('Hooli Bistro', '123 Main St', 'Palo Alto', 'CA', '94301', '650-555-1234', 'info@hoolibistro.com'),
('Pied Piper Grill', '456 University Ave', 'San Francisco', 'CA', '94107', '415-555-6789', 'contact@piedpipergrill.com'),
('Raviga Eatery', '789 Castro St', 'Mountain View', 'CA', '94041', '650-555-9876', 'hello@ravigaeatery.com');

-- Insert data into dim_date
INSERT INTO `dim_date` (`full_date`, `day_of_week`, `day_name`, `month_name`, `quarter`, `year`) VALUES
('2023-10-01', 1, 'Sunday', 'October', 4, 2023),
('2023-10-02', 2, 'Monday', 'October', 4, 2023),
('2023-10-03', 3, 'Tuesday', 'October', 4, 2023),
('2023-10-04', 4, 'Wednesday', 'October', 4, 2023),
('2023-10-05', 5, 'Thursday', 'October', 4, 2023),
('2023-10-06', 6, 'Friday', 'October', 4, 2023),
('2023-10-07', 7, 'Saturday', 'October', 4, 2023);

-- Insert data into dim_supplier
INSERT INTO `dim_supplier` (`supplier_name`, `contact_name`, `email`, `phone`, `address`) VALUES
('Valley Foods', 'John Smith', 'john@valleyfoods.com', '408-555-1111', '100 Supply Rd, San Jose, CA 95123'),
('Bay Area Produce', 'Jane Doe', 'jane@bayareaproduce.com', '510-555-2222', '200 Farmer Ln, Oakland, CA 94612'),
('Tech Town Meats', 'Bob Johnson', 'bob@techtownmeats.com', '650-555-3333', '300 Butcher St, Redwood City, CA 94063');

-- Insert data into dim_category
INSERT INTO `dim_category` (`category_name`, `restaurant_id`, `description`) VALUES
('Proteins', 1, 'Meat and protein items'),
('Produce', 1, 'Fresh fruits and vegetables'),
('Dairy', 1, 'Milk, cheese, and other dairy products'),
('Dry Goods', 2, 'Pasta, rice, and other dry ingredients'),
('Sauces', 2, 'Prepared and base sauces'),
('Spices', 3, 'Herbs and spices');

-- Insert data into dim_kitchen
INSERT INTO `dim_kitchen` (`department_name`, `restaurant_id`) VALUES
('Hot Line', 1),
('Cold Line', 1),
('Pastry', 1),
('Grill', 2),
('Prep', 2),
('Sauté', 3);

-- Insert data into dim_prep_item
INSERT INTO `dim_prep_item` (`prep_item_name`, `description`, `item_category`, `kitchen_department_id`, `restaurant_id`) VALUES
('Marinara Sauce', 'Classic tomato sauce', 5, 5, 2),
('Mirepoix', 'Diced onions, carrots, and celery', 2, 2, 1),
('Chicken Stock', 'House-made chicken stock', 1, 1, 1),
('Herb Oil', 'Infused olive oil with fresh herbs', 6, 3, 1),
('BBQ Sauce', 'House special barbecue sauce', 5, 4, 2),
('Pickled Vegetables', 'Assorted pickled seasonal vegetables', 2, 6, 3);

-- Insert data into dim_ingredient
INSERT INTO `dim_ingredient` (`ingredient_name`, `restaurant_id`, `supplier_id`, `category_id`, `unit`, `unit_price`, `par_level`, `current_stock`, `reorder_point`) VALUES
('Chicken Breast', 1, 3, 1, 'lbs', 4.99, 20.00, 15.00, 10.00),
('Tomatoes', 1, 2, 2, 'lbs', 2.49, 15.00, 12.00, 8.00),
('Heavy Cream', 1, 1, 3, 'qt', 3.99, 10.00, 6.00, 4.00),
('Arborio Rice', 2, 1, 4, 'lbs', 2.99, 25.00, 20.00, 15.00),
('Soy Sauce', 2, 1, 5, 'bottles', 4.50, 8.00, 5.00, 3.00),
('Paprika', 3, 1, 6, 'oz', 1.99, 16.00, 12.00, 8.00),
('Onions', 1, 2, 2, 'lbs', 1.29, 30.00, 25.00, 15.00),
('Carrots', 1, 2, 2, 'lbs', 1.49, 20.00, 18.00, 10.00),
('Celery', 1, 2, 2, 'lbs', 1.99, 15.00, 12.00, 8.00),
('Olive Oil', 1, 1, 4, 'liters', 12.99, 10.00, 8.00, 5.00),
('Garlic', 1, 2, 2, 'lbs', 2.99, 5.00, 3.00, 2.00),
('Chicken Bones', 1, 3, 1, 'lbs', 1.99, 30.00, 20.00, 15.00);

-- Insert data into dim_manager
INSERT INTO `dim_manager` (`first_name`, `last_name`, `email`, `phone`, `restaurant_id`) VALUES
('Richard', 'Hendricks', 'richard@hoolibistro.com', '650-555-4321', 1),
('Erlich', 'Bachman', 'erlich@piedpipergrill.com', '415-555-9876', 2),
('Monica', 'Hall', 'monica@ravigaeatery.com', '650-555-8765', 3);

-- Insert data into dim_users
INSERT INTO `dim_users` (`username`, `password`, `first_name`, `last_name`, `email`, `role`, `restaurant_id`) VALUES
('rhendricks', '$2a$10$XdEyGEMIRGbq9XQOgKFRxO5vUQJqFuRlzWwV/oyDEt9QHJVDcwKUa', 'Richard', 'Hendricks', 'richard@hoolibistro.com', 'admin', 1),
('jdunn', '$2a$10$XdEyGEMIRGbq9XQOgKFRxO5vUQJqFuRlzWwV/oyDEt9QHJVDcwKUa', 'Jared', 'Dunn', 'jared@hoolibistro.com', 'manager', 1),
('dgilfoyle', '$2a$10$XdEyGEMIRGbq9XQOgKFRxO5vUQJqFuRlzWwV/oyDEt9QHJVDcwKUa', 'Bertram', 'Gilfoyle', 'gilfoyle@piedpipergrill.com', 'chef', 2),
('dchugtai', '$2a$10$XdEyGEMIRGbq9XQOgKFRxO5vUQJqFuRlzWwV/oyDEt9QHJVDcwKUa', 'Dinesh', 'Chugtai', 'dinesh@piedpipergrill.com', 'prep', 2),
('lbream', '$2a$10$XdEyGEMIRGbq9XQOgKFRxO5vUQJqFuRlzWwV/oyDEt9QHJVDcwKUa', 'Laurie', 'Bream', 'laurie@ravigaeatery.com', 'manager', 3);

-- Insert data into dim_groups
INSERT INTO `dim_groups` (`group_name`, `restaurant_id`, `description`, `is_active`) VALUES
('Sauces', 1, 'All sauce preparations', 1),
('Stocks', 1, 'All stock preparations', 1),
('Marinades', 2, 'All marinade preparations', 1),
('Dressings', 2, 'All salad dressings', 1),
('Pickles', 3, 'All pickled items', 1);

-- Insert data into bridge_group_items
INSERT INTO `bridge_group_items` (`group_id`, `prep_item_id`, `ingredient_id`) VALUES
(1, 1, NULL),  -- Marinara Sauce in Sauces group
(1, 5, NULL),  -- BBQ Sauce in Sauces group
(2, 3, NULL),  -- Chicken Stock in Stocks group
(3, NULL, 5),  -- Soy Sauce in Marinades group
(4, 4, NULL),  -- Herb Oil in Dressings group
(5, 6, NULL);  -- Pickled Vegetables in Pickles group

-- Insert data into fact_prep_item_ingredients
INSERT INTO `fact_prep_item_ingredients` (`prep_item_id`, `ingredient_id`, `quantity`, `unit`) VALUES
(1, 2, 5.00, 'lbs'),      -- Marinara Sauce uses Tomatoes
(1, 7, 1.00, 'lbs'),      -- Marinara Sauce uses Onions
(1, 11, 0.25, 'lbs'),     -- Marinara Sauce uses Garlic
(2, 7, 2.00, 'lbs'),      -- Mirepoix uses Onions
(2, 8, 1.00, 'lbs'),      -- Mirepoix uses Carrots
(2, 9, 1.00, 'lbs'),      -- Mirepoix uses Celery
(3, 12, 10.00, 'lbs'),    -- Chicken Stock uses Chicken Bones
(3, 2, 0.50, 'lbs'),      -- Chicken Stock uses Mirepoix
(4, 10, 1.00, 'liters'),  -- Herb Oil uses Olive Oil
(5, 2, 2.00, 'lbs'),      -- BBQ Sauce uses Tomatoes
(5, 5, 0.50, 'bottles'),  -- BBQ Sauce uses Soy Sauce
(6, 8, 3.00, 'lbs');      -- Pickled Vegetables uses Carrots

-- Insert data into fact_daily_prep_list
INSERT INTO `fact_daily_prep_list` (`prep_item_id`, `restaurant_id`, `date_id`, `quantity`, `unit`, `status`, `assigned_to`, `notes`) VALUES
(1, 2, 1, 5.00, 'gallons', 'completed', 4, 'Made extra for weekend'),
(2, 1, 2, 3.00, 'quarts', 'pending', 2, 'Needed for soups'),
(3, 1, 3, 10.00, 'gallons', 'in-progress', 2, 'Simmer for 6 hours'),
(4, 1, 4, 2.00, 'liters', 'pending', 2, 'Use fresh basil'),
(5, 2, 5, 3.00, 'gallons', 'completed', 3, 'Made spicier than usual'),
(6, 3, 6, 4.00, 'quarts', 'pending', 5, 'Use seasonal vegetables');

-- Insert data into fact_inventory
INSERT INTO `fact_inventory` (`ingredient_id`, `restaurant_id`, `date_id`, `quantity`, `unit`, `unit_price`, `total_value`, `recorded_by`, `notes`) VALUES
(1, 1, 1, 15.00, 'lbs', 4.99, 74.85, 1, 'Fresh delivery'),
(2, 1, 1, 12.00, 'lbs', 2.49, 29.88, 1, 'Some slightly overripe'),
(3, 1, 2, 6.00, 'qt', 3.99, 23.94, 2, 'Need to order more'),
(4, 2, 3, 20.00, 'lbs', 2.99, 59.80, 3, 'Sufficient stock'),
(5, 2, 4, 5.00, 'bottles', 4.50, 22.50, 4, 'Order more next week'),
(6, 3, 5, 12.00, 'oz', 1.99, 23.88, 5, 'Fully stocked');

-- Insert data into fact_order_history
INSERT INTO `fact_order_history` (`ingredient_id`, `supplier_id`, `restaurant_id`, `date_id`, `quantity`, `unit_price`, `total_price`) VALUES
(1, 3, 1, 1, 20.00, 4.99, 99.80),
(2, 2, 1, 2, 15.00, 2.49, 37.35),
(3, 1, 1, 3, 10.00, 3.99, 39.90),
(4, 1, 2, 4, 25.00, 2.99, 74.75),
(5, 1, 2, 5, 8.00, 4.50, 36.00),
(6, 1, 3, 6, 16.00, 1.99, 31.84);

-- Insert data into fact_prep_log
INSERT INTO `fact_prep_log` (`prep_item_id`, `restaurant_id`, `date_id`, `quantity`, `prepared_by`) VALUES
(1, 2, 1, 5.00, 4),
(2, 1, 2, 3.00, 2),
(3, 1, 3, 10.00, 2),
(4, 1, 4, 2.00, 2),
(5, 2, 5, 3.00, 3),
(6, 3, 6, 4.00, 5);

-- Insert data into fact_price_history
INSERT INTO `fact_price_history` (`ingredient_id`, `supplier_id`, `date_id`, `unit_price`, `effective_date`, `end_date`) VALUES
(1, 3, 1, 4.99, '2023-10-01', NULL),
(1, 3, 2, 4.79, '2023-09-01', '2023-09-30'),
(2, 2, 1, 2.49, '2023-10-01', NULL),
(2, 2, 2, 2.29, '2023-09-01', '2023-09-30'),
(3, 1, 1, 3.99, '2023-10-01', NULL),
(3, 1, 2, 3.79, '2023-09-01', '2023-09-30'); 