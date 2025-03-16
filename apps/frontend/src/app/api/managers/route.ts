import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API URL
const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://localhost:3001';

// Type guard for Axios errors
function isAxiosError(error: unknown): error is {
  response?: {
    status: number;
    data: {
      errors?: Array<{ msg: string; param: string; location: string }>;
      message?: string;
    };
  };
} {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error
  );
}

/**
 * GET handler for retrieving managers for a specific restaurant
 * Uses query parameter: ?restaurantId=X
 */
export async function GET(request: NextRequest) {
  try {
    // Extract restaurant ID from the query parameters
    const { searchParams } = new URL(request.url);
    const restaurantId = searchParams.get('restaurantId');

    if (!restaurantId || isNaN(Number(restaurantId))) {
      return NextResponse.json(
        { message: 'Restaurant ID is required as a query parameter' },
        { status: 400 }
      );
    }

    // Forward the request to the backend
    const response = await axios.get(`${BACKEND_API_URL}/managers/${restaurantId}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching managers:', error);
    
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return NextResponse.json(
          { message: 'Restaurant not found' },
          { status: 404 }
        );
      }
    }
    
    return NextResponse.json(
      { message: 'Failed to retrieve managers' },
      { status: 500 }
    );
  }
}

/**
 * POST handler for creating a new manager
 */
export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    
    // Forward the request to the backend
    const response = await axios.post(`${BACKEND_API_URL}/managers`, userData);
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error('Error creating manager:', error);
    
    // Handle validation errors from the backend
    if (isAxiosError(error) && error.response?.data?.errors) {
      return NextResponse.json(
        { errors: error.response.data.errors },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { message: 'Failed to create manager' },
      { status: 500 }
    );
  }
} 