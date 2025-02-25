import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:3001';
    console.log("url",backendUrl + '/restaurants');
    const response = await fetch(`${backendUrl}/restaurants`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch restaurants');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in restaurants API route:', error);
    return NextResponse.json(
      { message: 'Failed to fetch restaurants' },
      { status: 500 }
    );
  }
} 