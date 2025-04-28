-- Create bridge tables
CREATE TABLE IF NOT EXISTS bridge_group_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  group_id INT NOT NULL,
  item_id INT NOT NULL,
  item_type VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create dimension tables
CREATE TABLE IF NOT EXISTS dim_category (
  category_id INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(100) NOT NULL,
  restaurant_id INT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX restaurant_id_idx (restaurant_id)
);

CREATE TABLE IF NOT EXISTS dim_date (
  date_id INT PRIMARY KEY AUTO_INCREMENT,
  full_date DATE NOT NULL,
  day_of_week INT NOT NULL,
  day_name VARCHAR(10) NOT NULL,
  month_name VARCHAR(10) NOT NULL,
  quarter INT NOT NULL,
  year INT NOT NULL
);

CREATE TABLE IF NOT EXISTS dim_groups (
  group_id INT PRIMARY KEY AUTO_INCREMENT,
  group_name VARCHAR(100) NOT NULL,
  restaurant_id INT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX restaurant_id_idx (restaurant_id)
);

CREATE TABLE IF NOT EXISTS dim_ingredient (
  ingredient_id INT PRIMARY KEY AUTO_INCREMENT,
  ingredient_name VARCHAR(255) NOT NULL,
  restaurant_id INT NOT NULL,
  supplier_id INT,
  category_id INT,
  unit VARCHAR(50) DEFAULT 'units',
  unit_price DECIMAL(10,2),
  par_level DECIMAL(10,2),
  current_stock DECIMAL(10,2),
  reorder_point DECIMAL(10,2),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX restaurant_id_idx (restaurant_id),
  INDEX supplier_id_idx (supplier_id),
  INDEX category_id_idx (category_id)
);

CREATE TABLE IF NOT EXISTS dim_kitchen (
  kitchen_department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(100) NOT NULL,
  restaurant_id INT NOT NULL,
  INDEX restaurant_id_idx (restaurant_id)
);

CREATE TABLE IF NOT EXISTS dim_manager (
  manager_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX user_id_idx (user_id),
  INDEX restaurant_id_idx (restaurant_id)
);

CREATE TABLE IF NOT EXISTS dim_prep_item (
  prep_item_id INT PRIMARY KEY AUTO_INCREMENT,
  prep_item_name VARCHAR(150) NOT NULL,
  description VARCHAR(255),
  item_category INT,
  kitchen_department_id INT,
  restaurant_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX restaurant_id_idx (restaurant_id)
);

CREATE TABLE IF NOT EXISTS dim_restaurant (
  restaurant_id INT PRIMARY KEY AUTO_INCREMENT,
  restaurant_name VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(50),
  zip_code VARCHAR(20),
  phone VARCHAR(20),
  email VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS dim_restaurant_settings (
  setting_id INT PRIMARY KEY AUTO_INCREMENT,
  restaurant_id INT NOT NULL,
  low_stock_threshold INT DEFAULT 40,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX settings_restaurant_id_idx (restaurant_id)
);

CREATE TABLE IF NOT EXISTS dim_supplier (
  supplier_id INT PRIMARY KEY AUTO_INCREMENT,
  supplier_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dim_users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  role VARCHAR(20) DEFAULT 'user',
  restaurant_id INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create fact tables
CREATE TABLE IF NOT EXISTS fact_daily_prep_list (
  prep_list_id INT PRIMARY KEY AUTO_INCREMENT,
  prep_item_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  date_id INT NOT NULL,
  quantity DECIMAL(10,2) NOT NULL,
  unit VARCHAR(50),
  status VARCHAR(20) DEFAULT 'pending',
  assigned_to INT,
  completed_by INT,
  completed_at TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX prep_item_id_idx (prep_item_id),
  INDEX restaurant_id_idx (restaurant_id),
  INDEX date_id_idx (date_id),
  INDEX assigned_to_idx (assigned_to),
  INDEX completed_by_idx (completed_by)
);

CREATE TABLE IF NOT EXISTS fact_inventory (
  inventory_id INT PRIMARY KEY AUTO_INCREMENT,
  ingredient_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  date_id INT NOT NULL,
  quantity DECIMAL(10,2) NOT NULL,
  unit VARCHAR(50) DEFAULT 'units',
  unit_price DECIMAL(10,2),
  total_value DECIMAL(10,2),
  recorded_by INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX ingredient_id_idx (ingredient_id),
  INDEX restaurant_id_idx (restaurant_id),
  INDEX date_id_idx (date_id),
  INDEX recorded_by_idx (recorded_by)
);

CREATE TABLE IF NOT EXISTS fact_order_history (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  restaurant_id INT NOT NULL,
  supplier_id INT NOT NULL,
  date_id INT NOT NULL,
  total_amount DECIMAL(10,2),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX restaurant_id_idx (restaurant_id),
  INDEX supplier_id_idx (supplier_id),
  INDEX date_id_idx (date_id)
); 