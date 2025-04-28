import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function GET() {
    try {
        const response = await fetch(`${API_URL}/api/market/inventory/criticals`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch critical items');
        }
        
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching critical items:', error);
        return NextResponse.json(
            { error: 'Failed to fetch critical items' },
            { status: 500 }
        );
    }
} 