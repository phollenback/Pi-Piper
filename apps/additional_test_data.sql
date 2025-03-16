-- Additional test data for Piper_Net database
USE `Piper_Net`;

-- Add more suppliers
INSERT INTO `dim_supplier` (`supplier_name`, `contact_name`, `email`, `phone`, `address`) VALUES
('Hooli Farms', 'Gavin Belson', 'gavin@hoolifarms.com', '650-555-4444', '400 Farm Rd, Palo Alto, CA 94301'),
('Aviato Foods', 'Erlich Bachman', 'erlich@aviatofoods.com', '415-555-5555', '500 Incubator Way, San Francisco, CA 94107');

-- Add more ingredients with different suppliers
INSERT INTO `dim_ingredient` (`ingredient_name`, `restaurant_id`, `supplier_id`, `category_id`, `unit`, `unit_price`, `par_level`, `current_stock`, `reorder_point`) VALUES
('Butter', 1, 1, 3, 'lbs', 5.99, 15.00, 10.00, 5.00),
('Flour', 1, 4, 4, 'lbs', 1.99, 50.00, 35.00, 20.00),
('Sugar', 2, 4, 4, 'lbs', 2.49, 30.00, 22.00, 15.00),
('Salt', 3, 5, 6, 'lbs', 1.29, 10.00, 8.00, 3.00);

-- Add more inventory records
INSERT INTO `fact_inventory` (`ingredient_id`, `restaurant_id`, `date_id`, `quantity`, `unit`, `unit_price`, `total_value`, `recorded_by`, `notes`) VALUES
(7, 1, 3, 25.00, 'lbs', 1.29, 32.25, 2, 'Fully stocked'),
(8, 1, 4, 18.00, 'lbs', 1.49, 26.82, 2, 'Good condition'),
(9, 1, 5, 12.00, 'lbs', 1.99, 23.88, 1, 'Need to restock soon'),
(10, 1, 6, 8.00, 'liters', 12.99, 103.92, 1, 'Premium quality'),
(11, 1, 7, 3.00, 'lbs', 2.99, 8.97, 2, 'Fresh delivery'),
(13, 1, 1, 10.00, 'lbs', 5.99, 59.90, 1, 'Unsalted'),
(14, 1, 2, 35.00, 'lbs', 1.99, 69.65, 2, 'All-purpose'),
(15, 2, 3, 22.00, 'lbs', 2.49, 54.78, 3, 'Granulated');

-- Add more price history records
INSERT INTO `fact_price_history` (`ingredient_id`, `supplier_id`, `date_id`, `unit_price`, `effective_date`, `end_date`) VALUES
(1, 3, 3, 5.29, '2023-08-01', '2023-08-31'),
(1, 3, 4, 5.49, '2023-07-01', '2023-07-31'),
(2, 2, 3, 2.79, '2023-08-01', '2023-08-31'),
(2, 2, 4, 2.99, '2023-07-01', '2023-07-31'),
(7, 2, 1, 1.29, '2023-10-01', NULL),
(7, 2, 2, 1.19, '2023-09-01', '2023-09-30'),
(8, 2, 1, 1.49, '2023-10-01', NULL),
(8, 2, 2, 1.39, '2023-09-01', '2023-09-30'),
(13, 1, 1, 5.99, '2023-10-01', NULL),
(13, 1, 2, 5.79, '2023-09-01', '2023-09-30'),
(14, 4, 1, 1.99, '2023-10-01', NULL),
(14, 4, 2, 1.89, '2023-09-01', '2023-09-30');

-- Add more order history
INSERT INTO `fact_order_history` (`ingredient_id`, `supplier_id`, `restaurant_id`, `date_id`, `quantity`, `unit_price`, `total_price`) VALUES
(7, 2, 1, 7, 30.00, 1.29, 38.70),
(8, 2, 1, 7, 20.00, 1.49, 29.80),
(9, 2, 1, 7, 15.00, 1.99, 29.85),
(13, 1, 1, 7, 15.00, 5.99, 89.85),
(14, 4, 1, 7, 50.00, 1.99, 99.50),
(15, 4, 2, 7, 30.00, 2.49, 74.70);

-- Add more prep item ingredients
INSERT INTO `fact_prep_item_ingredients` (`prep_item_id`, `ingredient_id`, `quantity`, `unit`) VALUES
(4, 13, 0.25, 'lbs'),     -- Herb Oil uses Butter
(5, 15, 0.50, 'lbs'),     -- BBQ Sauce uses Sugar
(6, 16, 0.10, 'lbs');     -- Pickled Vegetables uses Salt 