import { NextResponse } from 'next/server';
import { auth } from '@/config/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function GET() {
    try {
        const session = await auth();
        
        if (!session?.user?.restaurant_id) {
            return NextResponse.json(
                { error: 'Restaurant ID not found in session' },
                { status: 401 }
            );
        }

        const response = await fetch(`${API_URL}/api/ingredients/pricing/${session.user.restaurant_id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Failed to fetch ingredients');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to fetch ingredients' },
            { status: 500 }
        );
    }
} 