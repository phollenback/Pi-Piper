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
 * GET handler for retrieving users (prep employees)
 */
export async function GET(request: NextRequest) {
  try {
    // Get restaurantId from query parameters
    const { searchParams } = new URL(request.url);
    const restaurantId = searchParams.get('restaurantId');
    
    if (!restaurantId) {
      return NextResponse.json(
        { message: 'Restaurant ID is required' },
        { status: 400 }
      );
    }
    
    // Forward the request to the backend
    const response = await axios.get(`${BACKEND_API_URL}/users/${restaurantId}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
    
    // Handle specific errors from the backend
    if (isAxiosError(error) && error.response) {
      return NextResponse.json(
        { message: error.response.data.message || 'Failed to fetch users' },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { message: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

/**
 * POST handler for creating a new user (prep employee)
 */
export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    
    // Forward the request to the backend
    const response = await axios.post(`${BACKEND_API_URL}/users`, userData);
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    
    // Handle validation errors from the backend
    if (isAxiosError(error)) {
      if (error.response?.data?.errors) {
        return NextResponse.json(
          { errors: error.response.data.errors },
          { status: error.response.status }
        );
      }
      
      if (error.response?.data?.message) {
        return NextResponse.json(
          { message: error.response.data.message },
          { status: error.response.status }
        );
      }
    }
    
    return NextResponse.json(
      { message: 'Failed to create user' },
      { status: 500 }
    );
  }
} 