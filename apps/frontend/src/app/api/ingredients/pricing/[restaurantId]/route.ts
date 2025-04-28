import { NextResponse } from 'next/server';

// Mock data for testing
const mockIngredients = [
    {
        ingredientId: 1,
        ingredientName: "Tomatoes",
        unit: "kg",
        unitPrice: 2.99,
        supplier: "Sysco",
        syscoPrice: 2.99,
        usFoodsPrice: 2.79,
        lastUpdated: new Date().toISOString()
    },
    {
        ingredientId: 2,
        ingredientName: "Onions",
        unit: "kg",
        unitPrice: 1.99,
        supplier: "US Foods",
        syscoPrice: 2.19,
        usFoodsPrice: 1.99,
        lastUpdated: new Date().toISOString()
    },
    {
        ingredientId: 3,
        ingredientName: "Garlic",
        unit: "kg",
        unitPrice: 3.99,
        supplier: "Sysco",
        syscoPrice: 3.99,
        usFoodsPrice: 3.79,
        lastUpdated: new Date().toISOString()
    }
];

export async function GET(
    request: Request,
    { params }: { params: { restaurantId: string } }
) {
    try {
        // TODO: Replace with actual database query
        // For now, return mock data
        return NextResponse.json(mockIngredients);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        return NextResponse.json(
            { error: 'Failed to fetch ingredients' },
            { status: 500 }
        );
    }
} 