-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 04, 2025 at 08:39 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Piper_Net`
--

-- --------------------------------------------------------

--
-- Table structure for table `bridge_group_items`
--

CREATE TABLE `bridge_group_items` (
  `group_item_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `prep_item_id` int(11) DEFAULT NULL,
  `ingredient_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bridge_group_items`
--

INSERT INTO `bridge_group_items` (`group_item_id`, `group_id`, `prep_item_id`, `ingredient_id`) VALUES
(1, 1, 1, 0),
(2, 1, 0, 3),
(3, 2, 1, 0),
(4, 2, 2, 0),
(5, 2, 3, 0),
(6, 2, 5, 0),
(7, 2, 6, 0),
(8, 2, 4, 0),
(11, 10, NULL, 1),
(12, 10, NULL, 4),
(13, 10, NULL, 7),
(14, 11, NULL, 1),
(15, 11, NULL, 4),
(16, 11, NULL, 7),
(17, 11, NULL, 10),
(18, 11, NULL, 13),
(19, 11, NULL, 16),
(20, 12, 4, NULL),
(21, 12, 2, NULL),
(22, 12, 1, NULL),
(23, 12, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dim_category`
--

CREATE TABLE `dim_category` (
  `category_id` bigint(20) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_type` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_category`
--

INSERT INTO `dim_category` (`category_id`, `category_name`, `category_type`, `description`, `is_active`) VALUES
(1, 'Slicer', 'prepitems', 'Slicing meats', 1),
(2, 'Pantry', 'ingredients', 'Having to do with salads and some desserts, chopping ingredients', 1),
(3, 'Grill', 'recipes', 'Prepped in the grill area using the grill or oven.', 1),
(4, 'Oven', 'recipes', 'Roasting items done before open.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dim_date`
--

CREATE TABLE `dim_date` (
  `date_id` bigint(20) NOT NULL,
  `date` varchar(15) NOT NULL,
  `day` varchar(2) NOT NULL,
  `month` varchar(9) NOT NULL,
  `year` int(11) NOT NULL,
  `day_of_week` varchar(9) NOT NULL,
  `quarter` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dim_groups`
--

CREATE TABLE `dim_groups` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `restaurant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_groups`
--

INSERT INTO `dim_groups` (`group_id`, `group_name`, `restaurant_id`) VALUES
(1, 'Morning Prep Group', 1),
(2, 'Slice', 1),
(8, 'ggooodd', 1),
(9, 'bviio', 1),
(10, 'boop', 1),
(11, 'most', 1),
(12, 'Slicing', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dim_ingredient`
--

CREATE TABLE `dim_ingredient` (
  `ingredient_id` bigint(20) NOT NULL,
  `ingredient_name` varchar(100) NOT NULL,
  `unit_of_measure` varchar(50) DEFAULT NULL,
  `cost_per_unit` decimal(10,2) DEFAULT '0.00',
  `ingredient_category` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `restaurant_id` bigint(20) NOT NULL,
  `status` enum('good','low','critical') DEFAULT 'good',
  `last_ordered` date DEFAULT NULL,
  `quantity_threshold` decimal(10,2) DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_ingredient`
--

INSERT INTO `dim_ingredient` (`ingredient_id`, `ingredient_name`, `unit_of_measure`, `cost_per_unit`, `ingredient_category`, `created_at`, `updated_at`, `restaurant_id`, `status`, `last_ordered`, `quantity_threshold`) VALUES
(1, 'Tomato', 'kg', '2.50', 1, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 1, 'good', NULL, '10.00'),
(2, 'Cheese', 'kg', '10.00', 2, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 2, 'good', NULL, '10.00'),
(3, 'Chicken', 'kg', '6.50', 3, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 3, 'good', NULL, '10.00'),
(4, 'Flour', 'kg', '1.20', 4, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 1, 'good', NULL, '10.00'),
(5, 'Rice', 'kg', '1.50', 1, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 2, 'good', NULL, '10.00'),
(6, 'Beef', 'kg', '8.00', 3, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 3, 'good', NULL, '10.00'),
(7, 'Olive Oil', 'liter', '5.00', 2, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 1, 'good', NULL, '10.00'),
(8, 'Garlic', 'kg', '3.00', 1, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 3, 'good', NULL, '10.00'),
(9, 'Sugar', 'kg', '0.80', 4, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 2, 'good', NULL, '10.00'),
(10, 'Salt', 'kg', '0.50', 4, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 1, 'good', NULL, '10.00'),
(11, 'Onion', 'kg', '2.00', 1, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 2, 'good', NULL, '10.00'),
(12, 'Butter', 'kg', '7.00', 2, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 3, 'good', NULL, '10.00'),
(13, 'Fish', 'kg', '9.00', 3, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 1, 'good', NULL, '10.00'),
(14, 'Milk', 'liter', '1.50', 2, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 2, 'good', NULL, '10.00'),
(15, 'Pepper', 'kg', '3.50', 4, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 3, 'good', NULL, '10.00'),
(16, 'Potato', 'kg', '1.00', 1, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 1, 'good', NULL, '10.00'),
(17, 'Eggs', 'dozen', '3.00', 2, '2025-01-16 19:06:44', '2025-01-16 19:06:44', 3, 'good', NULL, '10.00'),
(18, 'Calabrese Salami', 'L', '4.00', 3, '2025-02-18 23:29:55', '2025-02-18 23:29:55', 1, 'good', NULL, '10.00'),
(19, 'ingredient', 'cups', '2.00', 2, '2025-02-18 23:48:02', '2025-02-18 23:48:02', 1, 'good', NULL, '10.00'),
(20, 'Swedish Fish', 'L', '34.00', 3, '2025-02-18 23:49:52', '2025-02-18 23:49:52', 1, 'good', NULL, '10.00'),
(22, 'John Hohn', 'cups', '3.00', 3, '2025-02-18 23:51:11', '2025-02-18 23:51:11', 1, 'good', NULL, '10.00');

-- --------------------------------------------------------

--
-- Table structure for table `dim_kitchen`
--

CREATE TABLE `dim_kitchen` (
  `kitchen_department_id` bigint(20) NOT NULL,
  `department_name` varchar(100) NOT NULL,
  `restaurant_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_kitchen`
--

INSERT INTO `dim_kitchen` (`kitchen_department_id`, `department_name`, `restaurant_id`) VALUES
(1, 'Pantry', 1),
(2, 'Oven', 1),
(3, 'Grill', 1),
(4, 'Expo', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dim_manager`
--

CREATE TABLE `dim_manager` (
  `manager_id` bigint(20) NOT NULL,
  `manager_name` varchar(150) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `restaurant_id` bigint(20) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dim_prep_item`
--

CREATE TABLE `dim_prep_item` (
  `prep_item_id` bigint(20) NOT NULL,
  `prep_item_name` varchar(150) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `item_category` bigint(20) DEFAULT NULL,
  `kitchen_department_id` bigint(20) DEFAULT NULL,
  `restaurant_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_prep_item`
--

INSERT INTO `dim_prep_item` (`prep_item_id`, `prep_item_name`, `description`, `item_category`, `kitchen_department_id`, `restaurant_id`) VALUES
(1, 'Slice Prosciutto', 'Thinly slice the prosciutto for charcuterie boards.', 1, 1, 1),
(2, 'Slice Coppa', 'Slice the coppa for sandwiches and boards.', 1, 1, 1),
(3, 'Slice Sopressata', 'Slice the Sopressata for sandwiches and charcuterie.', 1, 2, 1),
(4, 'Slice Ham', 'Slice ham for sandwiches.', 2, 1, 1),
(5, 'Slice Provolone', 'Slice provolone cheese for sandwiches.', 2, 1, 1),
(6, 'Set Pulled Pork', 'Prepare the pulled pork for cooking.', 3, 2, 1),
(7, 'Cook Pulled Pork', 'Cook pulled pork for tacos or sandwiches.', 3, 2, 1),
(8, 'Cook Meatballs', 'Prepare meatballs for sauces and sandwiches.', 3, 2, 1),
(9, 'Italian Sausage Mix', 'Prepare Italian sausage mix for grilling.', 4, 3, 1),
(10, 'Marinate Lemongrass Pork', 'Marinate pork for grilling.', 4, 3, 1),
(11, 'Grill Lemongrass Pork', 'Grill marinated lemongrass pork.', 4, 3, 1),
(12, 'Back Bacon Brine', 'Prepare back bacon for curing.', 2, 4, 1),
(13, 'Cure Pork Loins', 'Cure pork loins for future use.', 1, 4, 1),
(14, 'Dry Pork Loins', 'Dry pork loins after curing.', 3, 4, 1),
(15, 'Smoke Pork Loins', 'Smoke pork loins for additional flavor.', 3, 2, 1),
(16, 'Bacon Strips', 'Slice bacon for cooking.', 2, 1, 1),
(17, 'Dice & Crisp Bacon', 'Dice and cook bacon for toppings.', 1, 2, 1),
(18, 'Marinate Chicken', 'Marinate chicken for grilling or roasting.', 1, 2, 1),
(19, 'Smoke Chicken', 'Smoke chicken for additional flavor.', 1, 1, 1),
(20, 'Drain Fresh Moz', 'Drain mozzarella cheese before use.', 2, 3, 1),
(21, 'OG NON SIMPLE', 'sometimes needed up front.', 1, 1, 1),
(22, 'OG Simple', 'Syrup for the front of house for drinks, usually once every day or two.', 2, 1, 1),
(23, 'pina', 'piza', 3, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dim_restaurant`
--

CREATE TABLE `dim_restaurant` (
  `restaurant_id` bigint(20) NOT NULL,
  `restaurant_name` varchar(150) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `location` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_restaurant`
--

INSERT INTO `dim_restaurant` (`restaurant_id`, `restaurant_name`, `address`, `city`, `state`, `zip_code`, `phone`, `email`, `is_active`, `created_at`, `updated_at`, `location`, `logo`) VALUES
(1, 'Republic Pi', NULL, NULL, NULL, NULL, NULL, NULL, 1, '2025-03-04 20:12:24', '2025-03-04 20:12:24', 'Manito Shopping Center', 'http://localhost:3001/_next/image?url=https%3A%2F%2F...'),
(2, 'Downriver Grill', NULL, NULL, NULL, NULL, NULL, NULL, 1, '2025-03-04 20:12:24', '2025-03-04 20:12:24', 'Northside', 'https://upload.wikimedia.org/wikipedia/en/3/33/Sil...'),
(3, 'Flying Goat', NULL, NULL, NULL, NULL, NULL, NULL, 1, '2025-03-04 20:12:24', '2025-03-04 20:12:24', 'Second Bluff', 'https://upload.wikimedia.org/wikipedia/commons/thu...');

-- --------------------------------------------------------

--
-- Table structure for table `dim_supplier`
--

CREATE TABLE `dim_supplier` (
  `supplier_id` bigint(20) NOT NULL,
  `supplier_name` varchar(255) NOT NULL,
  `contact_info` varchar(255) DEFAULT NULL,
  `supplier_site` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_supplier`
--

INSERT INTO `dim_supplier` (`supplier_id`, `supplier_name`, `contact_info`, `supplier_site`) VALUES
(1, 'Sysco', 'sysco@gmail.com', 'syscom.com'),
(2, 'Us Foods', 'usfoods@gmail.com', 'usfoods.com');

-- --------------------------------------------------------

--
-- Table structure for table `dim_users`
--

CREATE TABLE `dim_users` (
  `user_id` bigint(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `role` enum('owner','manager','prep') NOT NULL,
  `restaurant_id` bigint(20) NOT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dim_users`
--

INSERT INTO `dim_users` (`user_id`, `username`, `password`, `email`, `phone_number`, `role`, `restaurant_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'peyholle', '$2b$10$cFVCBshEZNb8J5QMu8WfgO/WrA/KiDAVm3XuaunKVF9wl1hPJ075K', 'peyholle@gmail.com', '5099548309', 'manager', 1, 'active', '2025-02-24 22:51:18', '2025-02-25 01:33:35'),
(2, 'gavin', '$2b$10$QPjY.AXHERXH05.XcG2RMepU8Zo3j.R2qMcPP18Dy5NoPIurTQ2nC', 'gmoney@gmail.com', '5099990909', 'prep', 1, 'active', '2025-02-25 01:42:17', '2025-02-25 01:45:04'),
(6, 'gary', 'garythedude', 'peyholle@gmail.gov', '09090909000', 'manager', 1, 'active', '2025-02-25 16:58:08', '2025-02-25 16:58:08'),
(7, 'eric', 'bachman', 'erlich@bachman.com', '5099543289', 'prep', 1, 'active', '2025-03-03 06:19:51', '2025-03-03 06:19:51'),
(8, 'peyton2', 'Warriors22', 'peyholle@gmail.com', '5099548309', 'prep', 1, 'active', '2025-03-03 06:34:07', '2025-03-03 06:34:07');

-- --------------------------------------------------------

--
-- Table structure for table `fact_daily_prep_list`
--

CREATE TABLE `fact_daily_prep_list` (
  `list_item_id` bigint(20) NOT NULL COMMENT 'Identifies the id within the daily list.',
  `prep_list_id` bigint(20) NOT NULL COMMENT 'The id of the list(a grouping of items)',
  `restaurant_id` bigint(20) NOT NULL,
  `prep_item_id` bigint(20) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `unit` varchar(50) NOT NULL,
  `note` varchar(100) DEFAULT NULL,
  `status` enum('complete','todo','in-progress') NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fact_daily_prep_list`
--

INSERT INTO `fact_daily_prep_list` (`list_item_id`, `prep_list_id`, `restaurant_id`, `prep_item_id`, `quantity`, `unit`, `note`, `status`, `date`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '3.00', 'pkg', 'Slice', 'todo', '2025-01-14', '2025-01-15 04:06:07', '2025-02-25 02:26:05'),
(2, 1, 1, 2, '3.00', 'pkg', '', 'todo', '2025-01-14', '2025-01-15 04:06:07', '2025-02-25 02:26:05'),
(3, 1, 1, 3, '3.00', 'pkg', '', 'todo', '2025-01-14', '2025-01-15 04:06:07', '2025-02-25 02:26:06'),
(6, 1, 1, 6, '5.00', 'lbs', '', 'complete', '2025-01-14', '2025-01-15 04:06:07', '2025-02-11 18:35:22'),
(12, 1, 1, 12, '8.00', 'liters', 'Back', 'complete', '2025-01-14', '2025-01-15 04:06:07', '2025-02-11 18:35:23'),
(31, 4, 1, 4, '1.50', 'units', NULL, 'complete', '2025-01-14', '2025-02-11 18:34:30', '2025-02-25 02:26:03'),
(32, 9, 1, 9, '5.00', 'units', NULL, 'todo', '2025-01-14', '2025-02-11 18:38:08', '2025-02-11 18:38:08'),
(33, 1, 1, 1, '3.00', 'units', NULL, 'todo', '2025-01-14', '2025-02-17 06:18:26', '2025-02-25 02:26:05'),
(34, 23, 1, 23, '4.00', 'units', NULL, 'todo', '2025-01-14', '2025-02-17 06:39:08', '2025-02-17 06:39:08');

-- --------------------------------------------------------

--
-- Table structure for table `fact_inventory`
--

CREATE TABLE `fact_inventory` (
  `inventory_id` bigint(20) NOT NULL,
  `ingredient_id` bigint(20) DEFAULT NULL,
  `quantity_before` decimal(10,2) DEFAULT NULL,
  `quantity_used` decimal(10,2) DEFAULT NULL,
  `quantity_after` decimal(10,2) DEFAULT NULL,
  `quantity_ordered` decimal(10,2) DEFAULT NULL,
  `date` bigint(20) DEFAULT NULL,
  `restaurant_id` bigint(20) DEFAULT NULL,
  `prep_item_id` bigint(20) DEFAULT NULL,
  `transaction_type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fact_inventory`
--

INSERT INTO `fact_inventory` (`inventory_id`, `ingredient_id`, `quantity_before`, `quantity_used`, `quantity_after`, `quantity_ordered`, `date`, `restaurant_id`, `prep_item_id`, `transaction_type`) VALUES
(1, 1, '12.00', '6.00', '20.00', NULL, 20250123, 1, NULL, 'prep'),
(2, 12, '3.00', '1.00', '20.00', NULL, 20250123, 1, NULL, 'prep'),
(3, 1, '10.00', '2.00', '20.00', '0.00', 20250127, 1, 5, 'used'),
(4, 2, '20.00', '5.00', '20.00', '0.00', 20250127, 1, 6, 'used'),
(5, 3, '15.00', '3.00', '20.00', '0.00', 20250127, 1, 7, 'used'),
(6, 4, '30.00', '4.00', '20.00', '0.00', 20250127, 1, 8, 'used'),
(7, 5, '25.00', '7.00', '20.00', '0.00', 20250127, 1, 9, 'used'),
(8, 6, '14.00', '1.00', '20.00', '0.00', 20250127, 1, 10, 'used'),
(9, 7, '22.00', '6.00', '20.00', '0.00', 20250127, 1, 11, 'used'),
(10, 8, '19.00', '2.00', '20.00', '0.00', 20250127, 1, 12, 'used'),
(11, 9, '12.00', '3.00', '20.00', '0.00', 20250127, 1, 13, 'used'),
(12, 10, '28.00', '8.00', '20.00', '0.00', 20250127, 1, 14, 'used'),
(13, 11, '16.00', '4.00', '20.00', '0.00', 20250127, 1, 15, 'used'),
(14, 12, '17.00', '5.00', '20.00', '0.00', 20250127, 1, 16, 'used'),
(15, 13, '24.00', '6.00', '20.00', '0.00', 20250127, 1, 17, 'used'),
(16, 14, '10.00', '2.00', '20.00', '0.00', 20250127, 1, 18, 'used'),
(17, 15, '11.00', '1.00', '20.00', '0.00', 20250127, 1, 19, 'used'),
(18, 16, '13.00', '3.00', '20.00', '0.00', 20250127, 1, 20, 'used'),
(19, 17, '15.00', '5.00', '20.00', '0.00', 20250127, 1, 21, 'used'),
(20, 1, '8.00', '0.00', '20.00', '5.00', 20250127, 1, 22, 'ordered'),
(21, 2, '15.00', '0.00', '20.00', '3.00', 20250127, 1, 23, 'ordered'),
(22, 3, '12.00', '0.00', '20.00', '4.00', 20250127, 1, 5, 'ordered'),
(23, 4, '26.00', '0.00', '20.00', '6.00', 20250127, 1, 6, 'ordered');

-- --------------------------------------------------------

--
-- Table structure for table `fact_order_history`
--

CREATE TABLE `fact_order_history` (
  `order_history_id` bigint(20) NOT NULL,
  `ingredient_id` bigint(20) DEFAULT NULL,
  `supplier_id` bigint(20) DEFAULT NULL,
  `quantity_ordered` int(11) NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fact_prep_item_ingredients`
--

CREATE TABLE `fact_prep_item_ingredients` (
  `id` int(11) NOT NULL,
  `prep_item_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fact_prep_log`
--

CREATE TABLE `fact_prep_log` (
  `prep_log_id` bigint(20) NOT NULL,
  `prep_item_id` bigint(20) DEFAULT NULL,
  `quantity_prepped` decimal(10,2) DEFAULT NULL,
  `prep_status` varchar(20) DEFAULT NULL,
  `date_id` bigint(20) DEFAULT NULL,
  `restaurant_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fact_price_history`
--

CREATE TABLE `fact_price_history` (
  `price_history_id` bigint(20) NOT NULL,
  `ingredient_id` bigint(20) DEFAULT NULL,
  `date` bigint(20) DEFAULT NULL,
  `supplier_id` bigint(20) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fact_price_history`
--

INSERT INTO `fact_price_history` (`price_history_id`, `ingredient_id`, `date`, `supplier_id`, `price`) VALUES
(1, 1, 20250127, 1, '2.50'),
(2, 1, 20250127, 2, '2.65'),
(3, 2, 20250127, 1, '3.00'),
(4, 2, 20250127, 2, '2.85'),
(5, 3, 20250127, 1, '1.75'),
(6, 3, 20250127, 2, '1.90'),
(7, 4, 20250127, 1, '4.20'),
(8, 4, 20250127, 2, '4.05'),
(9, 5, 20250127, 1, '2.90'),
(10, 5, 20250127, 2, '3.00'),
(11, 6, 20250127, 1, '5.00'),
(12, 6, 20250127, 2, '4.75'),
(13, 7, 20250127, 1, '3.50'),
(14, 7, 20250127, 2, '3.70'),
(15, 8, 20250127, 1, '2.00'),
(16, 8, 20250127, 2, '2.10'),
(17, 9, 20250127, 1, '4.80'),
(18, 9, 20250127, 2, '4.60'),
(19, 10, 20250127, 1, '3.25'),
(20, 10, 20250127, 2, '3.15'),
(21, 11, 20250127, 1, '2.60'),
(22, 11, 20250127, 2, '2.75'),
(23, 12, 20250127, 1, '3.75'),
(24, 12, 20250127, 2, '3.50'),
(25, 13, 20250127, 1, '4.10'),
(26, 13, 20250127, 2, '4.00'),
(27, 14, 20250127, 1, '2.30'),
(28, 14, 20250127, 2, '2.40'),
(29, 15, 20250127, 1, '5.50'),
(30, 15, 20250127, 2, '5.25'),
(31, 16, 20250127, 1, '2.85'),
(32, 16, 20250127, 2, '2.95'),
(33, 17, 20250127, 1, '3.40'),
(34, 17, 20250127, 2, '3.30');

-- --------------------------------------------------------

--
-- Table structure for table `__drizzle_migrations`
--

CREATE TABLE `__drizzle_migrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hash` text NOT NULL,
  `created_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bridge_group_items`
--
ALTER TABLE `bridge_group_items`
  ADD PRIMARY KEY (`group_item_id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `dim_category`
--
ALTER TABLE `dim_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `dim_date`
--
ALTER TABLE `dim_date`
  ADD PRIMARY KEY (`date_id`);

--
-- Indexes for table `dim_groups`
--
ALTER TABLE `dim_groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `dim_ingredient`
--
ALTER TABLE `dim_ingredient`
  ADD PRIMARY KEY (`ingredient_id`),
  ADD KEY `ingredient_category` (`ingredient_category`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- Indexes for table `dim_kitchen`
--
ALTER TABLE `dim_kitchen`
  ADD PRIMARY KEY (`kitchen_department_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- Indexes for table `dim_manager`
--
ALTER TABLE `dim_manager`
  ADD PRIMARY KEY (`manager_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- Indexes for table `dim_prep_item`
--
ALTER TABLE `dim_prep_item`
  ADD PRIMARY KEY (`prep_item_id`),
  ADD KEY `restaurant_id` (`restaurant_id`),
  ADD KEY `item_category` (`item_category`),
  ADD KEY `kitchen_department_id` (`kitchen_department_id`);

--
-- Indexes for table `dim_restaurant`
--
ALTER TABLE `dim_restaurant`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- Indexes for table `dim_supplier`
--
ALTER TABLE `dim_supplier`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `dim_users`
--
ALTER TABLE `dim_users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `fact_daily_prep_list`
--
ALTER TABLE `fact_daily_prep_list`
  ADD PRIMARY KEY (`list_item_id`),
  ADD KEY `restaurant_id` (`restaurant_id`),
  ADD KEY `prep_item_id` (`prep_item_id`);

--
-- Indexes for table `fact_inventory`
--
ALTER TABLE `fact_inventory`
  ADD PRIMARY KEY (`inventory_id`),
  ADD KEY `ingredient_id` (`ingredient_id`),
  ADD KEY `prep_item_id` (`prep_item_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- Indexes for table `fact_order_history`
--
ALTER TABLE `fact_order_history`
  ADD PRIMARY KEY (`order_history_id`),
  ADD KEY `ingredient_id` (`ingredient_id`),
  ADD KEY `supplier_id` (`supplier_id`);

--
-- Indexes for table `fact_prep_item_ingredients`
--
ALTER TABLE `fact_prep_item_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ingredient_id` (`ingredient_id`),
  ADD KEY `prep_item_id` (`prep_item_id`);

--
-- Indexes for table `fact_prep_log`
--
ALTER TABLE `fact_prep_log`
  ADD KEY `prep_item_id` (`prep_item_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- Indexes for table `fact_price_history`
--
ALTER TABLE `fact_price_history`
  ADD PRIMARY KEY (`price_history_id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `fact_price_history_ibfk_1` (`ingredient_id`);

--
-- Indexes for table `__drizzle_migrations`
--
ALTER TABLE `__drizzle_migrations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bridge_group_items`
--
ALTER TABLE `bridge_group_items`
  MODIFY `group_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `dim_groups`
--
ALTER TABLE `dim_groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dim_ingredient`
--
ALTER TABLE `dim_ingredient`
  MODIFY `ingredient_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `dim_prep_item`
--
ALTER TABLE `dim_prep_item`
  MODIFY `prep_item_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `dim_users`
--
ALTER TABLE `dim_users`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `fact_daily_prep_list`
--
ALTER TABLE `fact_daily_prep_list`
  MODIFY `list_item_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Identifies the id within the daily list.', AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `fact_inventory`
--
ALTER TABLE `fact_inventory`
  MODIFY `inventory_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `fact_order_history`
--
ALTER TABLE `fact_order_history`
  MODIFY `order_history_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fact_prep_item_ingredients`
--
ALTER TABLE `fact_prep_item_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `__drizzle_migrations`
--
ALTER TABLE `__drizzle_migrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bridge_group_items`
--
ALTER TABLE `bridge_group_items`
  ADD CONSTRAINT `bridge_group_items_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `dim_groups` (`group_id`);

--
-- Constraints for table `dim_kitchen`
--
ALTER TABLE `dim_kitchen`
  ADD CONSTRAINT `dim_kitchen_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`),
  ADD CONSTRAINT `dim_kitchen_ibfk_2` FOREIGN KEY (`kitchen_department_id`) REFERENCES `dim_prep_item` (`kitchen_department_id`);

--
-- Constraints for table `dim_manager`
--
ALTER TABLE `dim_manager`
  ADD CONSTRAINT `dim_manager_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`);

--
-- Constraints for table `dim_prep_item`
--
ALTER TABLE `dim_prep_item`
  ADD CONSTRAINT `dim_prep_item_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`),
  ADD CONSTRAINT `dim_prep_item_ibfk_2` FOREIGN KEY (`item_category`) REFERENCES `dim_category` (`category_id`),
  ADD CONSTRAINT `dim_prep_item_ibfk_3` FOREIGN KEY (`kitchen_department_id`) REFERENCES `dim_kitchen` (`kitchen_department_id`);

--
-- Constraints for table `fact_daily_prep_list`
--
ALTER TABLE `fact_daily_prep_list`
  ADD CONSTRAINT `fact_daily_prep_list_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`),
  ADD CONSTRAINT `fact_daily_prep_list_ibfk_2` FOREIGN KEY (`prep_item_id`) REFERENCES `dim_prep_item` (`prep_item_id`);

--
-- Constraints for table `fact_inventory`
--
ALTER TABLE `fact_inventory`
  ADD CONSTRAINT `fact_inventory_ibfk_3` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`);

--
-- Constraints for table `fact_order_history`
--
ALTER TABLE `fact_order_history`
  ADD CONSTRAINT `fact_order_history_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `dim_supplier` (`supplier_id`);

--
-- Constraints for table `fact_prep_log`
--
ALTER TABLE `fact_prep_log`
  ADD CONSTRAINT `fact_prep_log_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `dim_restaurant` (`restaurant_id`);

--
-- Constraints for table `fact_price_history`
--
ALTER TABLE `fact_price_history`
  ADD CONSTRAINT `fact_price_history_ibfk_1` FOREIGN KEY (`ingredient_id`) REFERENCES `dim_ingredient` (`ingredient_id`),
  ADD CONSTRAINT `fact_price_history_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `dim_supplier` (`supplier_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
