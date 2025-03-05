/**
 * Database type definitions generated from Drizzle schema
 *
 * This file exports TypeScript interfaces for all database tables defined in the schema.
 * It provides type safety for database operations throughout the application.
 */

import { InferModel, InferSelectModel } from 'drizzle-orm';
import {
  bridgeGroupItems,
  dimCategory,
  dimDate,
  dimGroups,
  dimIngredient,
  dimManager,
  dimPrepItem,
  dimRestaurant,
  dimSupplier,
  dimUsers,
  factDailyPrepList,
  factInventory,
  factPrepItemIngredients,
  factPrepLog
} from '../db/schema';

// ----- Insert types -----
// These types are used when inserting new records into tables

export type BridgeGroupItemInsert = InferModel<typeof bridgeGroupItems, 'insert'>;
export type CategoryInsert = InferModel<typeof dimCategory, 'insert'>;
export type DateInsert = InferModel<typeof dimDate, 'insert'>;
export type GroupInsert = InferModel<typeof dimGroups, 'insert'>;
export type IngredientInsert = InferModel<typeof dimIngredient, 'insert'>;
export type ManagerInsert = InferModel<typeof dimManager, 'insert'>;
export type PrepItemInsert = InferModel<typeof dimPrepItem, 'insert'>;
export type RestaurantInsert = InferModel<typeof dimRestaurant, 'insert'>;
export type SupplierInsert = InferModel<typeof dimSupplier, 'insert'>;
export type UserInsert = InferModel<typeof dimUsers, 'insert'>;
export type DailyPrepListInsert = InferModel<typeof factDailyPrepList, 'insert'>;
export type InventoryInsert = InferModel<typeof factInventory, 'insert'>;
export type PrepItemIngredientInsert = InferModel<typeof factPrepItemIngredients, 'insert'>;
export type PrepLogInsert = InferModel<typeof factPrepLog, 'insert'>;

// ----- Select types -----
// These types are used when selecting records from tables

export type BridgeGroupItem = InferSelectModel<typeof bridgeGroupItems>;
export type Category = InferSelectModel<typeof dimCategory>;
export type Date = InferSelectModel<typeof dimDate>;
export type Group = InferSelectModel<typeof dimGroups>;
export type Ingredient = InferSelectModel<typeof dimIngredient>;
export type Manager = InferSelectModel<typeof dimManager>;
export type PrepItem = InferSelectModel<typeof dimPrepItem>;
export type Restaurant = InferSelectModel<typeof dimRestaurant>;
export type Supplier = InferSelectModel<typeof dimSupplier>;
export type User = InferSelectModel<typeof dimUsers>;
export type DailyPrepList = InferSelectModel<typeof factDailyPrepList>;
export type Inventory = InferSelectModel<typeof factInventory>;
export type PrepItemIngredient = InferSelectModel<typeof factPrepItemIngredients>;
export type PrepLog = InferSelectModel<typeof factPrepLog>;

// ----- Partial types -----
// These types are used when updating records in tables

export type BridgeGroupItemUpdate = Partial<BridgeGroupItemInsert>;
export type CategoryUpdate = Partial<CategoryInsert>;
export type DateUpdate = Partial<DateInsert>;
export type GroupUpdate = Partial<GroupInsert>;
export type IngredientUpdate = Partial<IngredientInsert>;
export type ManagerUpdate = Partial<ManagerInsert>;
export type PrepItemUpdate = Partial<PrepItemInsert>;
export type RestaurantUpdate = Partial<RestaurantInsert>;
export type SupplierUpdate = Partial<SupplierInsert>;
export type UserUpdate = Partial<UserInsert>;
export type DailyPrepListUpdate = Partial<DailyPrepListInsert>;
export type InventoryUpdate = Partial<InventoryInsert>;
export type PrepItemIngredientUpdate = Partial<PrepItemIngredientInsert>;
export type PrepLogUpdate = Partial<PrepLogInsert>;

// ----- Custom types for specific queries -----
// These types represent the shape of data returned by specific queries

export interface InventoryStatusItem {
  ingredientId: number;
  ingredientName: string;
  quantityAfter: string | null;
  quantityThreshold: number | null;
  unit: string | null;
  maxStock: number | null;
  lastUpdated: Date | null;
} 