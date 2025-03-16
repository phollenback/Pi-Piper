CREATE TABLE `bridge_group_items` (
	`id` int AUTO_INCREMENT NOT NULL,
	`group_id` int NOT NULL,
	`item_id` int NOT NULL,
	`item_type` varchar(50) NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bridge_group_items_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `dim_category` (
	`category_id` int AUTO_INCREMENT NOT NULL,
	`category_name` varchar(100) NOT NULL,
	`restaurant_id` int NOT NULL,
	`description` text,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_category_category_id` PRIMARY KEY(`category_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_date` (
	`date_id` int AUTO_INCREMENT NOT NULL,
	`full_date` date NOT NULL,
	`day_of_week` int NOT NULL,
	`day_name` varchar(10) NOT NULL,
	`month_name` varchar(10) NOT NULL,
	`quarter` int NOT NULL,
	`year` int NOT NULL,
	CONSTRAINT `dim_date_date_id` PRIMARY KEY(`date_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_groups` (
	`group_id` int AUTO_INCREMENT NOT NULL,
	`group_name` varchar(100) NOT NULL,
	`restaurant_id` int NOT NULL,
	`description` text,
	`is_active` boolean DEFAULT true,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_groups_group_id` PRIMARY KEY(`group_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_ingredient` (
	`ingredient_id` int AUTO_INCREMENT NOT NULL,
	`ingredient_name` varchar(255) NOT NULL,
	`restaurant_id` int NOT NULL,
	`supplier_id` int,
	`category_id` int,
	`unit` varchar(50) DEFAULT 'units',
	`unit_price` decimal(10,2),
	`quantity_threshold` int DEFAULT 10,
	`max_stock` int DEFAULT 100,
	`is_active` boolean DEFAULT true,
	`category` varchar(100) DEFAULT 'Uncategorized',
	`last_updated` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_ingredient_ingredient_id` PRIMARY KEY(`ingredient_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_kitchen` (
	`kitchen_id` int AUTO_INCREMENT NOT NULL,
	`kitchen_name` varchar(100) NOT NULL,
	`restaurant_id` int NOT NULL,
	`description` text,
	`is_active` boolean DEFAULT true,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_kitchen_kitchen_id` PRIMARY KEY(`kitchen_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_manager` (
	`manager_id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`restaurant_id` int NOT NULL,
	`is_active` boolean DEFAULT true,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_manager_manager_id` PRIMARY KEY(`manager_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_prep_item` (
	`prep_item_id` int AUTO_INCREMENT NOT NULL,
	`prep_item_name` varchar(255) NOT NULL,
	`restaurant_id` int NOT NULL,
	`category_id` int,
	`kitchen_id` int,
	`description` text,
	`prep_time` int,
	`prep_time_unit` varchar(20) DEFAULT 'minutes',
	`yield` int,
	`yield_unit` varchar(50) DEFAULT 'servings',
	`instructions` text,
	`is_active` boolean DEFAULT true,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_prep_item_prep_item_id` PRIMARY KEY(`prep_item_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_restaurant` (
	`restaurant_id` int AUTO_INCREMENT NOT NULL,
	`restaurant_name` varchar(255) NOT NULL,
	`address` varchar(255),
	`city` varchar(100),
	`state` varchar(50),
	`zip_code` varchar(20),
	`phone` varchar(20),
	`email` varchar(100),
	`is_active` boolean DEFAULT true,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_restaurant_restaurant_id` PRIMARY KEY(`restaurant_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_supplier` (
	`supplier_id` int AUTO_INCREMENT NOT NULL,
	`supplier_name` varchar(255) NOT NULL,
	`contact_name` varchar(100),
	`phone` varchar(20),
	`email` varchar(100),
	`is_active` boolean DEFAULT true,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_supplier_supplier_id` PRIMARY KEY(`supplier_id`)
);
--> statement-breakpoint
CREATE TABLE `dim_users` (
	`user_id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL,
	`first_name` varchar(50),
	`last_name` varchar(50),
	`email` varchar(100),
	`role` varchar(20) DEFAULT 'user',
	`is_active` boolean DEFAULT true,
	`last_login` timestamp,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dim_users_user_id` PRIMARY KEY(`user_id`),
	CONSTRAINT `dim_users_username_unique` UNIQUE(`username`)
);
--> statement-breakpoint
CREATE TABLE `fact_daily_prep_list` (
	`daily_prep_id` int AUTO_INCREMENT NOT NULL,
	`prep_item_id` int NOT NULL,
	`restaurant_id` int NOT NULL,
	`date_id` int NOT NULL,
	`quantity` decimal(10,2) NOT NULL,
	`status` varchar(20) DEFAULT 'pending',
	`assigned_to` int,
	`completed_by` int,
	`completed_at` timestamp,
	`notes` text,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fact_daily_prep_list_daily_prep_id` PRIMARY KEY(`daily_prep_id`)
);
--> statement-breakpoint
CREATE TABLE `fact_inventory` (
	`inventory_id` int AUTO_INCREMENT NOT NULL,
	`ingredient_id` int NOT NULL,
	`restaurant_id` int NOT NULL,
	`date_id` int,
	`quantity_before` decimal(10,2) DEFAULT '0',
	`quantity_after` decimal(10,2) DEFAULT '0',
	`quantity_change` decimal(10,2) DEFAULT '0',
	`change_reason` varchar(50),
	`change_source` varchar(50),
	`change_reference` varchar(100),
	`user_id` int,
	`last_updated` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fact_inventory_inventory_id` PRIMARY KEY(`inventory_id`)
);
--> statement-breakpoint
CREATE TABLE `fact_order_history` (
	`order_id` int AUTO_INCREMENT NOT NULL,
	`restaurant_id` int NOT NULL,
	`supplier_id` int NOT NULL,
	`date_id` int NOT NULL,
	`total_amount` decimal(10,2),
	`status` varchar(20) DEFAULT 'pending',
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fact_order_history_order_id` PRIMARY KEY(`order_id`)
);
--> statement-breakpoint
CREATE TABLE `fact_prep_item_ingredients` (
	`id` int AUTO_INCREMENT NOT NULL,
	`prep_item_id` int NOT NULL,
	`ingredient_id` int NOT NULL,
	`quantity` decimal(10,2) NOT NULL,
	`unit` varchar(50) DEFAULT 'units',
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fact_prep_item_ingredients_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `fact_prep_log` (
	`log_id` int AUTO_INCREMENT NOT NULL,
	`daily_prep_id` int NOT NULL,
	`user_id` int NOT NULL,
	`date_id` int NOT NULL,
	`action` varchar(50) NOT NULL,
	`notes` text,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `fact_prep_log_log_id` PRIMARY KEY(`log_id`)
);
--> statement-breakpoint
CREATE TABLE `fact_price_history` (
	`price_id` int AUTO_INCREMENT NOT NULL,
	`ingredient_id` int NOT NULL,
	`supplier_id` int NOT NULL,
	`date_id` int NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`effective_date` date NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `fact_price_history_price_id` PRIMARY KEY(`price_id`)
);
--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `dim_category` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `dim_groups` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `dim_ingredient` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `supplier_id_idx` ON `dim_ingredient` (`supplier_id`);--> statement-breakpoint
CREATE INDEX `category_id_idx` ON `dim_ingredient` (`category_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `dim_kitchen` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `dim_manager` (`user_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `dim_manager` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `dim_prep_item` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `category_id_idx` ON `dim_prep_item` (`category_id`);--> statement-breakpoint
CREATE INDEX `kitchen_id_idx` ON `dim_prep_item` (`kitchen_id`);--> statement-breakpoint
CREATE INDEX `prep_item_id_idx` ON `fact_daily_prep_list` (`prep_item_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `fact_daily_prep_list` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `date_id_idx` ON `fact_daily_prep_list` (`date_id`);--> statement-breakpoint
CREATE INDEX `assigned_to_idx` ON `fact_daily_prep_list` (`assigned_to`);--> statement-breakpoint
CREATE INDEX `completed_by_idx` ON `fact_daily_prep_list` (`completed_by`);--> statement-breakpoint
CREATE INDEX `ingredient_id_idx` ON `fact_inventory` (`ingredient_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `fact_inventory` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `date_id_idx` ON `fact_inventory` (`date_id`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `fact_inventory` (`user_id`);--> statement-breakpoint
CREATE INDEX `restaurant_id_idx` ON `fact_order_history` (`restaurant_id`);--> statement-breakpoint
CREATE INDEX `supplier_id_idx` ON `fact_order_history` (`supplier_id`);--> statement-breakpoint
CREATE INDEX `date_id_idx` ON `fact_order_history` (`date_id`);--> statement-breakpoint
CREATE INDEX `prep_item_id_idx` ON `fact_prep_item_ingredients` (`prep_item_id`);--> statement-breakpoint
CREATE INDEX `ingredient_id_idx` ON `fact_prep_item_ingredients` (`ingredient_id`);--> statement-breakpoint
CREATE INDEX `daily_prep_id_idx` ON `fact_prep_log` (`daily_prep_id`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `fact_prep_log` (`user_id`);--> statement-breakpoint
CREATE INDEX `date_id_idx` ON `fact_prep_log` (`date_id`);--> statement-breakpoint
CREATE INDEX `ingredient_id_idx` ON `fact_price_history` (`ingredient_id`);--> statement-breakpoint
CREATE INDEX `supplier_id_idx` ON `fact_price_history` (`supplier_id`);--> statement-breakpoint
CREATE INDEX `date_id_idx` ON `fact_price_history` (`date_id`);