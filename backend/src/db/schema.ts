import { mysqlTable, int, varchar, decimal, timestamp, primaryKey, index, foreignKey, text, boolean, date, time, datetime } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

// Bridge tables
export const bridgeGroupItems = mysqlTable('bridge_group_items', {
  id: int('id').primaryKey().autoincrement(),
  groupId: int('group_id').notNull(),
  itemId: int('item_id').notNull(),
  itemType: varchar('item_type', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`),
});

// Dimension tables
export const dimCategory = mysqlTable('dim_category', {
  categoryId: int('category_id').primaryKey().autoincrement(),
  categoryName: varchar('category_name', { length: 100 }).notNull(),
  restaurantId: int('restaurant_id').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`),
}, (table) => ({
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
}));

export const dimDate = mysqlTable('dim_date', {
  dateId: int('date_id').primaryKey().autoincrement(),
  fullDate: date('full_date').notNull(),
  dayOfWeek: int('day_of_week').notNull(),
  dayName: varchar('day_name', { length: 10 }).notNull(),
  monthName: varchar('month_name', { length: 10 }).notNull(),
  quarter: int('quarter').notNull(),
  year: int('year').notNull(),
});

export const dimGroups = mysqlTable('dim_groups', {
  groupId: int('group_id').primaryKey().autoincrement(),
  groupName: varchar('group_name', { length: 100 }).notNull(),
  restaurantId: int('restaurant_id').notNull(),
  description: text('description'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
}, (table) => ({
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
}));

export const dimIngredient = mysqlTable('dim_ingredient', {
  ingredientId: int('ingredient_id').primaryKey().autoincrement(),
  ingredientName: varchar('ingredient_name', { length: 255 }).notNull(),
  restaurantId: int('restaurant_id').notNull(),
  supplierId: int('supplier_id'),
  categoryId: int('category_id'),
  unit: varchar('unit', { length: 50 }).default('units'),
  unitPrice: decimal('unit_price', { precision: 10, scale: 2 }),
  parLevel: decimal('par_level', { precision: 10, scale: 2 }),
  currentStock: decimal('current_stock', { precision: 10, scale: 2 }),
  reorderPoint: decimal('reorder_point', { precision: 10, scale: 2 }),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
}, (table) => ({
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
  supplierIdIdx: index('supplier_id_idx').on(table.supplierId),
  categoryIdIdx: index('category_id_idx').on(table.categoryId),
}));

export const dimKitchen = mysqlTable('dim_kitchen', {
  kitchenId: int('kitchen_department_id').primaryKey().autoincrement(),
  departmentName: varchar('department_name', { length: 100 }).notNull(),
  restaurantId: int('restaurant_id').notNull(),
}, (table) => ({
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
}));

export const dimManager = mysqlTable('dim_manager', {
  managerId: int('manager_id').primaryKey().autoincrement(),
  userId: int('user_id').notNull(),
  restaurantId: int('restaurant_id').notNull(),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
}, (table) => ({
  userIdIdx: index('user_id_idx').on(table.userId),
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
}));

export const dimPrepItem = mysqlTable('dim_prep_item', {
  prepItemId: int('prep_item_id').primaryKey().autoincrement(),
  name: varchar('prep_item_name', { length: 150 }).notNull(),
  description: varchar('description', { length: 255 }),
  itemCategory: int('item_category'),
  kitchenDepartmentId: int('kitchen_department_id'),
  restaurantId: int('restaurant_id'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
}, (table) => ({
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
}));

export const dimRestaurant = mysqlTable('dim_restaurant', {
  restaurantId: int('restaurant_id').primaryKey().autoincrement(),
  restaurantName: varchar('restaurant_name', { length: 255 }).notNull(),
  address: varchar('address', { length: 255 }),
  city: varchar('city', { length: 100 }),
  state: varchar('state', { length: 50 }),
  zipCode: varchar('zip_code', { length: 20 }),
  phone: varchar('phone', { length: 20 }),
  email: varchar('email', { length: 100 }),
  isActive: boolean('is_active').default(true),
});

export const dimSupplier = mysqlTable('dim_supplier', {
  supplierId: int('supplier_id').primaryKey().autoincrement(),
  supplierName: varchar('supplier_name', { length: 255 }).notNull(),
  contactName: varchar('contact_name', { length: 100 }),
  phone: varchar('phone', { length: 20 }),
  email: varchar('email', { length: 100 }),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});

export const dimUsers = mysqlTable('dim_users', {
  userId: int('user_id').primaryKey().autoincrement(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  firstName: varchar('first_name', { length: 50 }),
  lastName: varchar('last_name', { length: 50 }),
  email: varchar('email', { length: 100 }),
  phoneNumber: varchar('phone_number', { length: 15 }),
  role: varchar('role', { length: 20 }).default('user'),
  restaurantId: int('restaurant_id'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`),
});

// Fact tables
export const factDailyPrepList = mysqlTable('fact_daily_prep_list', {
  prepListId: int('prep_list_id').primaryKey().autoincrement(),
  prepItemId: int('prep_item_id').notNull(),
  restaurantId: int('restaurant_id').notNull(),
  dateId: int('date_id').notNull(),
  quantity: decimal('quantity', { precision: 10, scale: 2 }).notNull(),
  unit: varchar('unit', { length: 50 }),
  status: varchar('status', { length: 20 }).default('pending'),
  assignedTo: int('assigned_to'),
  completedBy: int('completed_by'),
  completedAt: timestamp('completed_at'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
}, (table) => ({
  prepItemIdIdx: index('prep_item_id_idx').on(table.prepItemId),
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
  dateIdIdx: index('date_id_idx').on(table.dateId),
  assignedToIdx: index('assigned_to_idx').on(table.assignedTo),
  completedByIdx: index('completed_by_idx').on(table.completedBy),
}));

export const factInventory = mysqlTable('fact_inventory', {
  inventoryId: int('inventory_id').primaryKey().autoincrement(),
  ingredientId: int('ingredient_id').notNull(),
  restaurantId: int('restaurant_id').notNull(),
  dateId: int('date_id').notNull(),
  quantity: decimal('quantity', { precision: 10, scale: 2 }).notNull(),
  unit: varchar('unit', { length: 50 }).default('units'),
  unitPrice: decimal('unit_price', { precision: 10, scale: 2 }),
  totalValue: decimal('total_value', { precision: 10, scale: 2 }),
  recordedBy: int('recorded_by'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
}, (table) => ({
  ingredientIdIdx: index('ingredient_id_idx').on(table.ingredientId),
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
  dateIdIdx: index('date_id_idx').on(table.dateId),
  recordedByIdx: index('recorded_by_idx').on(table.recordedBy),
}));

export const factOrderHistory = mysqlTable('fact_order_history', {
  orderId: int('order_id').primaryKey().autoincrement(),
  restaurantId: int('restaurant_id').notNull(),
  supplierId: int('supplier_id').notNull(),
  dateId: int('date_id').notNull(),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }),
  status: varchar('status', { length: 20 }).default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
}, (table) => ({
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurantId),
  supplierIdIdx: index('supplier_id_idx').on(table.supplierId),
  dateIdIdx: index('date_id_idx').on(table.dateId),
}));

export const factPrepItemIngredients = mysqlTable('fact_prep_item_ingredients', {
  prepIngredientId: int('prep_ingredient_id').primaryKey().autoincrement(),
  prepItemId: int('prep_item_id').notNull(),
  ingredientId: int('ingredient_id').notNull(),
  quantity: decimal('quantity', { precision: 10, scale: 2 }).notNull(),
  unit: varchar('unit', { length: 50 }).default('units'),
}, (table) => ({
  prepItemIdIdx: index('prep_item_id_idx').on(table.prepItemId),
  ingredientIdIdx: index('ingredient_id_idx').on(table.ingredientId),
}));

export const factPrepLog = mysqlTable('fact_prep_log', {
  logId: int('log_id').primaryKey().autoincrement(),
  dailyPrepId: int('daily_prep_id').notNull(),
  userId: int('user_id').notNull(),
  dateId: int('date_id').notNull(),
  action: varchar('action', { length: 50 }).notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => ({
  dailyPrepIdIdx: index('daily_prep_id_idx').on(table.dailyPrepId),
  userIdIdx: index('user_id_idx').on(table.userId),
  dateIdIdx: index('date_id_idx').on(table.dateId),
}));

export const factPriceHistory = mysqlTable('fact_price_history', {
  priceId: int('price_id').primaryKey().autoincrement(),
  ingredientId: int('ingredient_id').notNull(),
  supplierId: int('supplier_id').notNull(),
  dateId: int('date_id').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  effectiveDate: date('effective_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => ({
  ingredientIdIdx: index('ingredient_id_idx').on(table.ingredientId),
  supplierIdIdx: index('supplier_id_idx').on(table.supplierId),
  dateIdIdx: index('date_id_idx').on(table.dateId),
}));

// Define relationships
// These are not physical constraints in the database but help Drizzle understand relationships

// Example of defining relationships (you would add these for all relationships)
// This is just a sample - you would need to add all the foreign key relationships based on your schema
export const relationships = {
  dimIngredient: {
    supplier: {
      relationshipType: 'many-to-one',
      schema: dimSupplier,
      fields: [dimIngredient.supplierId],
      references: [dimSupplier.supplierId],
    },
    category: {
      relationshipType: 'many-to-one',
      schema: dimCategory,
      fields: [dimIngredient.categoryId],
      references: [dimCategory.categoryId],
    },
    restaurant: {
      relationshipType: 'many-to-one',
      schema: dimRestaurant,
      fields: [dimIngredient.restaurantId],
      references: [dimRestaurant.restaurantId],
    },
  },
  factInventory: {
    ingredient: {
      relationshipType: 'many-to-one',
      schema: dimIngredient,
      fields: [factInventory.ingredientId],
      references: [dimIngredient.ingredientId],
    },
    restaurant: {
      relationshipType: 'many-to-one',
      schema: dimRestaurant,
      fields: [factInventory.restaurantId],
      references: [dimRestaurant.restaurantId],
    },
    date: {
      relationshipType: 'many-to-one',
      schema: dimDate,
      fields: [factInventory.dateId],
      references: [dimDate.dateId],
    },
    user: {
      relationshipType: 'many-to-one',
      schema: dimUsers,
      fields: [factInventory.recordedBy],
      references: [dimUsers.userId],
    },
  },
  // Add more relationships as needed
};

// Define relations
export const factDailyPrepListRelations = {
  prepItem: {
    relationshipType: 'many-to-one',
    schema: dimPrepItem,
    fields: [factDailyPrepList.prepItemId],
    references: [dimPrepItem.prepItemId],
  },
  restaurant: {
    relationshipType: 'many-to-one',
    schema: dimRestaurant,
    fields: [factDailyPrepList.restaurantId],
    references: [dimRestaurant.restaurantId],
  },
  assignedToUser: {
    relationshipType: 'many-to-one',
    schema: dimUsers,
    fields: [factDailyPrepList.assignedTo],
    references: [dimUsers.userId],
  },
  completedByUser: {
    relationshipType: 'many-to-one',
    schema: dimUsers,
    fields: [factDailyPrepList.completedBy],
    references: [dimUsers.userId],
  },
};

export const categories = mysqlTable('categories', {
  category_id: int('category_id').primaryKey(),
  category_name: varchar('category_name', { length: 255 }).notNull(),
  restaurant_id: int('restaurant_id').references(() => dimRestaurant.restaurantId),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
}, (table) => ({
  restaurantIdIdx: index('restaurant_id_idx').on(table.restaurant_id),
})); 