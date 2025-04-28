export interface IngredientDetails {
    ingredientId: number;
    ingredientName: string;
    syscoPrice: number | null;
    usFoodsPrice: number | null;
    lastUpdated: Date | null;
}

export interface CriticalIngredient {
    ingredientId: number;
    ingredientName: string;
    currentStock: number | null;
    minStock: number | null;
}