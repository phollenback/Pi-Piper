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
 * PUT handler for updating an existing user
 */
export async function PUT(
  request: NextRequest,
  context: { params: { userId: string } }
) {
  const { userId } = context.params;
  
  try {
    if (!userId || isNaN(Number(userId))) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    const userData = await request.json();
    
    // Extract only the editable fields to send to the backend
    const editableFields = {
      username: userData.username,
      email: userData.email,
      phone_number: userData.phone_number,
      role: userData.role,
      restaurant_id: userData.restaurant_id,
      status: userData.status
    };
    
    console.log('Sending update to backend with data:', editableFields);
    
    // Forward the request to the backend
    const response = await axios.put(`${BACKEND_API_URL}/users/${userId}`, editableFields);
    console.log('Backend response for PUT:', response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error updating user:', error);
    
    // Handle validation errors from the backend
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return NextResponse.json(
          { message: 'User not found' },
          { status: 404 }
        );
      }
      
      if (error.response?.data?.errors) {
        return NextResponse.json(
          { errors: error.response.data.errors },
          { status: error.response.status }
        );
      }
    }
    
    return NextResponse.json(
      { message: 'Failed to update user' },
      { status: 500 }
    );
  }
}

/**
 * DELETE handler for removing a user
 */
export async function DELETE(
  request: NextRequest,
  context: { params: { userId: string } }
) {
  const { userId } = context.params;
  
  try {
    if (!userId || isNaN(Number(userId))) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }
    
    // Forward the request to the backend
    await axios.delete(`${BACKEND_API_URL}/users/${userId}`);
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    
    // Handle specific errors from the backend
    if (isAxiosError(error) && error.response?.status === 404) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Failed to delete user' },
      { status: 500 }
    );
  }
} 