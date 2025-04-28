import { NextResponse } from 'next/server';
import { auth } from '@/config/auth';

export async function GET() {
    try {
        const session = await auth();
        return NextResponse.json(session);
    } catch (error) {
        console.error('Error getting session:', error);
        return NextResponse.json(
            { error: 'Failed to get session' },
            { status: 500 }
        );
    }
}

export async function POST() {
    try {
        const session = await auth();
        return NextResponse.json(session);
    } catch (error) {
        console.error('Error updating session:', error);
        return NextResponse.json(
            { error: 'Failed to update session' },
            { status: 500 }
        );
    }
} 