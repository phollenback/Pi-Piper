-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `Piper_Net`;
USE `Piper_Net`;

-- Drop tables if they exist to avoid conflicts
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `bridge_group_items`;
DROP TABLE IF EXISTS `dim_category`;
DROP TABLE IF EXISTS `dim_date`;
DROP TABLE IF EXISTS `dim_groups`;
DROP TABLE IF EXISTS `dim_ingredient`;
DROP TABLE IF EXISTS `dim_kitchen`;
DROP TABLE IF EXISTS `dim_manager`;
DROP TABLE IF EXISTS `dim_prep_item`;
DROP TABLE IF EXISTS `dim_restaurant`;
DROP TABLE IF EXISTS `dim_supplier`;
DROP TABLE IF EXISTS `dim_users`;
DROP TABLE IF EXISTS `fact_daily_prep_list`;
DROP TABLE IF EXISTS `fact_inventory`;
DROP TABLE IF EXISTS `fact_order_history`;
DROP TABLE IF EXISTS `fact_prep_item_ingredients`;
DROP TABLE IF EXISTS `fact_prep_log`;
DROP TABLE IF EXISTS `fact_price_history`;
DROP TABLE IF EXISTS `__drizzle_migrations`;
SET FOREIGN_KEY_CHECKS = 1;

-- Create tables in the correct order to avoid foreign key issues

-- Table structure for table `bridge_group_items`
CREATE TABLE `bridge_group_items` (
  `group_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `prep_item_id` int(11) DEFAULT NULL,
  `ingredient_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`group_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_category`
CREATE TABLE `dim_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `description` text,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_id`),
  KEY `restaurant_id_idx` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_date`
CREATE TABLE `dim_date` (
  `date_id` int(11) NOT NULL AUTO_INCREMENT,
  `full_date` date NOT NULL,
  `day_of_week` int(11) NOT NULL,
  `day_name` varchar(10) NOT NULL,
  `month_name` varchar(10) NOT NULL,
  `quarter` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`date_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_groups`
CREATE TABLE `dim_groups` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(100) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `description` text,
  `is_active` boolean DEFAULT true,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`group_id`),
  KEY `restaurant_id_idx` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_ingredient`
CREATE TABLE `dim_ingredient` (
  `ingredient_id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredient_name` varchar(255) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `unit` varchar(50) DEFAULT 'units',
  `unit_price` decimal(10,2) DEFAULT NULL,
  `par_level` decimal(10,2) DEFAULT NULL,
  `current_stock` decimal(10,2) DEFAULT NULL,
  `reorder_point` decimal(10,2) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ingredient_id`),
  KEY `restaurant_id_idx` (`restaurant_id`),
  KEY `supplier_id_idx` (`supplier_id`),
  KEY `category_id_idx` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_restaurant`
CREATE TABLE `dim_restaurant` (
  `restaurant_id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurant_name` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_prep_item`
CREATE TABLE `dim_prep_item` (
  `prep_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `prep_item_name` varchar(150) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `item_category` int(11) DEFAULT NULL,
  `kitchen_department_id` int(11) DEFAULT NULL,
  `restaurant_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`prep_item_id`),
  UNIQUE KEY `kitchen_department_id_unique` (`kitchen_department_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_kitchen`
CREATE TABLE `dim_kitchen` (
  `kitchen_department_id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(100) NOT NULL,
  `restaurant_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`kitchen_department_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_manager`
CREATE TABLE `dim_manager` (
  `manager_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `restaurant_id` int(11) NOT NULL,
  PRIMARY KEY (`manager_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_supplier`
CREATE TABLE `dim_supplier` (
  `supplier_id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier_name` varchar(100) NOT NULL,
  `contact_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `dim_users`
CREATE TABLE `dim_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `role` varchar(20) DEFAULT 'user',
  `restaurant_id` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  KEY `restaurant_id_idx` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `fact_daily_prep_list`
CREATE TABLE `fact_daily_prep_list` (
  `prep_list_id` int(11) NOT NULL AUTO_INCREMENT,
  `prep_item_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `date_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `unit` varchar(50) DEFAULT 'units',
  `status` varchar(20) DEFAULT 'pending',
  `assigned_to` int(11) DEFAULT NULL,
  `notes` text,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`prep_list_id`),
  KEY `prep_item_id_idx` (`prep_item_id`),
  KEY `restaurant_id_idx` (`restaurant_id`),
  KEY `date_id_idx` (`date_id`),
  KEY `assigned_to_idx` (`assigned_to`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `fact_inventory`
CREATE TABLE `fact_inventory` (
  `inventory_id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredient_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `date_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `unit` varchar(50) DEFAULT 'units',
  `unit_price` decimal(10,2) DEFAULT NULL,
  `total_value` decimal(10,2) DEFAULT NULL,
  `recorded_by` int(11) DEFAULT NULL,
  `notes` text,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`inventory_id`),
  KEY `ingredient_id_idx` (`ingredient_id`),
  KEY `restaurant_id_idx` (`restaurant_id`),
  KEY `date_id_idx` (`date_id`),
  KEY `recorded_by_idx` (`recorded_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `fact_order_history`
CREATE TABLE `fact_order_history` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredient_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `date_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `fact_prep_item_ingredients`
CREATE TABLE `fact_prep_item_ingredients` (
  `prep_ingredient_id` int(11) NOT NULL AUTO_INCREMENT,
  `prep_item_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `unit` varchar(50) DEFAULT 'units',
  PRIMARY KEY (`prep_ingredient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `fact_prep_log`
CREATE TABLE `fact_prep_log` (
  `prep_log_id` int(11) NOT NULL AUTO_INCREMENT,
  `prep_item_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `date_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `prepared_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`prep_log_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `fact_price_history`
CREATE TABLE `fact_price_history` (
  `price_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredient_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `date_id` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `effective_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`price_history_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table structure for table `__drizzle_migrations`
CREATE TABLE IF NOT EXISTS `__drizzle_migrations` (
  `id` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `created_at` bigint,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Add foreign key constraints
ALTER TABLE `bridge_group_items`
  ADD CONSTRAINT `bridge_group_items_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `dim_groups` (`group_id`);

ALTER TABLE `dim_kitchen`
  ADD CONSTRAINT `dim_kitchen_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`);

ALTER TABLE `dim_manager`
  ADD CONSTRAINT `dim_manager_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`);

ALTER TABLE `dim_users`
  ADD CONSTRAINT `dim_users_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`);

ALTER TABLE `fact_daily_prep_list`
  ADD CONSTRAINT `fact_daily_prep_list_ibfk_1` FOREIGN KEY (`prep_item_id`) REFERENCES `dim_prep_item` (`prep_item_id`),
  ADD CONSTRAINT `fact_daily_prep_list_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`),
  ADD CONSTRAINT `fact_daily_prep_list_ibfk_3` FOREIGN KEY (`date_id`) REFERENCES `dim_date` (`date_id`),
  ADD CONSTRAINT `fact_daily_prep_list_ibfk_4` FOREIGN KEY (`assigned_to`) REFERENCES `dim_users` (`user_id`);

ALTER TABLE `fact_inventory`
  ADD CONSTRAINT `fact_inventory_ibfk_1` FOREIGN KEY (`ingredient_id`) REFERENCES `dim_ingredient` (`ingredient_id`),
  ADD CONSTRAINT `fact_inventory_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`),
  ADD CONSTRAINT `fact_inventory_ibfk_3` FOREIGN KEY (`date_id`) REFERENCES `dim_date` (`date_id`),
  ADD CONSTRAINT `fact_inventory_ibfk_4` FOREIGN KEY (`recorded_by`) REFERENCES `dim_users` (`user_id`);

ALTER TABLE `fact_order_history`
  ADD CONSTRAINT `fact_order_history_ibfk_1` FOREIGN KEY (`ingredient_id`) REFERENCES `dim_ingredient` (`ingredient_id`),
  ADD CONSTRAINT `fact_order_history_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `dim_supplier` (`supplier_id`),
  ADD CONSTRAINT `fact_order_history_ibfk_3` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`),
  ADD CONSTRAINT `fact_order_history_ibfk_4` FOREIGN KEY (`date_id`) REFERENCES `dim_date` (`date_id`);

ALTER TABLE `fact_prep_item_ingredients`
  ADD CONSTRAINT `fact_prep_item_ingredients_ibfk_1` FOREIGN KEY (`prep_item_id`) REFERENCES `dim_prep_item` (`prep_item_id`),
  ADD CONSTRAINT `fact_prep_item_ingredients_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `dim_ingredient` (`ingredient_id`);

ALTER TABLE `fact_prep_log`
  ADD CONSTRAINT `fact_prep_log_ibfk_1` FOREIGN KEY (`prep_item_id`) REFERENCES `dim_prep_item` (`prep_item_id`),
  ADD CONSTRAINT `fact_prep_log_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`),
  ADD CONSTRAINT `fact_prep_log_ibfk_3` FOREIGN KEY (`date_id`) REFERENCES `dim_date` (`date_id`),
  ADD CONSTRAINT `fact_prep_log_ibfk_4` FOREIGN KEY (`prepared_by`) REFERENCES `dim_users` (`user_id`);

ALTER TABLE `fact_price_history`
  ADD CONSTRAINT `fact_price_history_ibfk_1` FOREIGN KEY (`ingredient_id`) REFERENCES `dim_ingredient` (`ingredient_id`),
  ADD CONSTRAINT `fact_price_history_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `dim_supplier` (`supplier_id`),
  ADD CONSTRAINT `fact_price_history_ibfk_3` FOREIGN KEY (`date_id`) REFERENCES `dim_date` (`date_id`);

-- Note: Removed the problematic foreign key constraint between dim_kitchen and dim_prep_item 