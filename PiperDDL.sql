CREATE SCHEMA IF NOT EXISTS Piper_Net;

USE Piper_Net;

CREATE TABLE IF NOT EXISTS dim_category (
    category_id BIGINT NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    category_type VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    PRIMARY KEY (category_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS dim_date (
    date_id INT NOT NULL,
    date VARCHAR(15) NOT NULL,
    day VARCHAR(2) NOT NULL,
    month VARCHAR(9) NOT NULL,
    year INT NOT NULL,
    day_of_week VARCHAR(9) NOT NULL,
    quarter VARCHAR(2) NOT NULL,
    PRIMARY KEY (date_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS dim_supplier (
    supplier_id BIGINT NOT NULL,
    supplier_name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255),
    supplier_site VARCHAR(255),
    PRIMARY KEY (supplier_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS dim_restaurant (
    restaurant_id BIGINT NOT NULL,
    restaurant_name VARCHAR(150) NOT NULL,
    location VARCHAR(255),
    logo VARCHAR(255),
    PRIMARY KEY (restaurant_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS dim_kitchen (
    kitchen_department_id INT NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    restaurant_id BIGINT,
    PRIMARY KEY (kitchen_department_id),
    FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS dim_ingredient (
    ingredient_id BIGINT NOT NULL,
    ingredient_name VARCHAR(100) NOT NULL,
    unit_of_measure VARCHAR(50),
    cost_per_unit DECIMAL(10, 2) DEFAULT 0,
    ingredient_category BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ingredient_id),
    FOREIGN KEY (ingredient_category) REFERENCES dim_category(category_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS dim_manager (
    manager_id BIGINT NOT NULL,
    manager_name VARCHAR(150) NOT NULL,
    email VARCHAR(255),
    phone_number VARCHAR(20),
    role VARCHAR(50),
    restaurant_id BIGINT,
    status VARCHAR(10),
    PRIMARY KEY (manager_id),
    FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS fact_daily_prep_list (
    prep_list_id BIGINT NOT NULL,
    restaurant_id BIGINT,
    prep_item_id BIGINT,
    quantity DECIMAL(10, 2),
    unit VARCHAR(50),
    status VARCHAR(20),
    date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (prep_list_id),
    FOREIGN KEY (prep_item_id) REFERENCES dim_prep_item(prep_item_id),
    FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS fact_inventory (
    inventory_id BIGINT NOT NULL,
    ingredient_id BIGINT,
    quantity_before DECIMAL(10, 2),
    quantity_used DECIMAL(10, 2),
    quantity_after DECIMAL(10, 2),
    quantity_ordered DECIMAL(10, 2),
    date_id BIGINT,
    restaurant_id BIGINT,
    prep_item_id BIGINT,
    transaction_type VARCHAR(50),
    PRIMARY KEY (inventory_id),
    FOREIGN KEY (ingredient_id) REFERENCES dim_ingredient(ingredient_id),
    FOREIGN KEY (prep_item_id) REFERENCES dim_prep_item(prep_item_id),
    FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS fact_order_history (
    order_history_id BIGINT NOT NULL,
    ingredient_id BIGINT,
    supplier_id BIGINT,
    quantity_ordered INT NOT NULL,
    order_date_id BIGINT,
    PRIMARY KEY (order_history_id),
    FOREIGN KEY (ingredient_id) REFERENCES dim_ingredient(ingredient_id),
    FOREIGN KEY (order_date_id) REFERENCES dim_date(date_id),
    FOREIGN KEY (supplier_id) REFERENCES dim_supplier(supplier_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS fact_prep_ingredients (
    prep_ingredient_id BIGINT NOT NULL,
    prep_item_id BIGINT,
    ingredient_id BIGINT,
    quantity_used DECIMAL(10, 2) NOT NULL,
    unit_of_measurement VARCHAR(50),
    restaurant_id BIGINT,
    PRIMARY KEY (prep_ingredient_id),
    FOREIGN KEY (prep_item_id) REFERENCES dim_prep_item(prep_item_id),
    FOREIGN KEY (ingredient_id) REFERENCES dim_ingredient(ingredient_id),
    FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS fact_prep_log (
    prep_log_id BIGINT NOT NULL,
    prep_item_id BIGINT,
    quantity_prepped DECIMAL(10, 2),
    prep_status VARCHAR(20),
    date_id BIGINT,
    restaurant_id BIGINT,
    PRIMARY KEY (prep_log_id),
    FOREIGN KEY (date_id) REFERENCES dim_date(date_id),
    FOREIGN KEY (prep_item_id) REFERENCES dim_prep_item(prep_item_id),
    FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS fact_price_history (
    price_history_id BIGINT NOT NULL,
    ingredient_id BIGINT,
    date BIGINT,
    supplier_id BIGINT,
    price DECIMAL(10, 2),
    PRIMARY KEY (price_history_id),
    FOREIGN KEY (date) REFERENCES dim_date(date_id),
    FOREIGN KEY (ingredient_id) REFERENCES dim_ingredient(ingredient_id),
    FOREIGN KEY (supplier_id) REFERENCES dim_supplier(supplier_id)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS dim_prep_item (
    prep_item_id BIGINT NOT NULL,
    prep_item_name VARCHAR(150) NOT NULL,
    description VARCHAR(255),
    item_category BIGINT,
    kitchen_department_id BIGINT,
    restaurant_id BIGINT,
    PRIMARY KEY (prep_item_id),
    FOREIGN KEY (item_category) REFERENCES dim_category(category_id),
    FOREIGN KEY (kitchen_department_id) REFERENCES dim_kitchen(kitchen_department_id),
    FOREIGN KEY (restaurant_id) REFERENCES dim_restaurant(restaurant_id)
) ENGINE=InnoDB;