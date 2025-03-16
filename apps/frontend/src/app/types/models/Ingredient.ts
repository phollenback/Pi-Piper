export default interface Ingredient {
    ingredientId: number;
    ingredientName: string;
    unit: string;
    unitPrice: string;
    currentStock: string;
    parLevel: string;
    reorderPoint: string;
    ingredientCategory: number;
    restaurantId: number;
    supplierId: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}