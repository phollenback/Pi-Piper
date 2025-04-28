export interface MarketItem {
    ingredientId: number;
    ingredientName: string;
    currentStock: number;
    minStock: number;
    maxStock: number;
    unit: string;
    syscoPrice: number;
    usFoodsPrice: number;
    category: string;
}

export interface CriticalItem {
    ingredientId: number;
    ingredientName: string;
    currentStock: number;
    minStock: number;
    unit: string;
    syscoPrice: number;
    usFoodsPrice: number;
}

export const marketItems: MarketItem[] = [
    {
        ingredientId: 1,
        ingredientName: "Chicken Breast",
        currentStock: 50,
        minStock: 20,
        maxStock: 100,
        unit: "lbs",
        syscoPrice: 3.99,
        usFoodsPrice: 3.79,
        category: "Meat"
    },
    {
        ingredientId: 2,
        ingredientName: "Ground Beef",
        currentStock: 30,
        minStock: 25,
        maxStock: 75,
        unit: "lbs",
        syscoPrice: 4.29,
        usFoodsPrice: 4.19,
        category: "Meat"
    },
    {
        ingredientId: 3,
        ingredientName: "Tomatoes",
        currentStock: 15,
        minStock: 20,
        maxStock: 50,
        unit: "lbs",
        syscoPrice: 2.49,
        usFoodsPrice: 2.39,
        category: "Produce"
    },
    {
        ingredientId: 4,
        ingredientName: "Onions",
        currentStock: 10,
        minStock: 15,
        maxStock: 40,
        unit: "lbs",
        syscoPrice: 1.99,
        usFoodsPrice: 1.89,
        category: "Produce"
    },
    {
        ingredientId: 5,
        ingredientName: "Flour",
        currentStock: 40,
        minStock: 30,
        maxStock: 80,
        unit: "lbs",
        syscoPrice: 1.49,
        usFoodsPrice: 1.39,
        category: "Dry Goods"
    }
];

export const criticalItems: CriticalItem[] = [
    {
        ingredientId: 3,
        ingredientName: "Tomatoes",
        currentStock: 15,
        minStock: 20,
        unit: "lbs",
        syscoPrice: 2.49,
        usFoodsPrice: 2.39
    },
    {
        ingredientId: 4,
        ingredientName: "Onions",
        currentStock: 10,
        minStock: 15,
        unit: "lbs",
        syscoPrice: 1.99,
        usFoodsPrice: 1.89
    }
]; 