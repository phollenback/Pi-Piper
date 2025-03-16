import { getSession } from 'next-auth/react'

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const session = await getSession()
  
  const headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${session?.token}`
  };

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include', // This ensures cookies are sent with the request
  });

  if (response.status === 401) {
    // Token expired or invalid
    window.location.href = '/login';
    throw new Error('Session expired');
  }

  return response;
} 