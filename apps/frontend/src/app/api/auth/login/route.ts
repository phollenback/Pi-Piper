import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, password, restaurant_id, role } = body;

        // TODO: Replace with actual authentication logic
        // For now, return a mock user
        return NextResponse.json({
            id: '1',
            name: username,
            email: `${username}@example.com`,
            emailVerified: new Date(),
            role,
            restaurant_id,
            username
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Failed to login' },
            { status: 500 }
        );
    }
} 