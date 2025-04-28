import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface InventoryItem {
    ingredientId: number;
    ingredientName: string;
    quantity: string | null;
    quantityThreshold: string;
    unit: string;
    maxStock: string;
    lastUpdated: string;
}

export async function GET() {
    try {
        const response = await fetch(`${API_URL}/ingredients/inventory/1`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch inventory data');
        }
        
        const data = await response.json() as InventoryItem[];
        
        // Filter for critical items (where current stock is below or equal to min stock)
        const criticalItems = data.filter((item) => {
            const currentStock = item.quantity ? parseFloat(item.quantity) : 0;
            const minStock = parseFloat(item.quantityThreshold);
            return currentStock <= minStock;
        });
        
        return NextResponse.json(criticalItems);
    } catch (error) {
        console.error('Error fetching critical items:', error);
        return NextResponse.json(
            { error: 'Failed to fetch critical items' },
            { status: 500 }
        );
    }
} 