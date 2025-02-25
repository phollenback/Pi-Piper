import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"

interface LoginCredentials {
  username: string;
  password: string;
  restaurant_id: string;
  role: string;
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password, restaurant_id, role } = credentials as unknown as LoginCredentials;
        
        try {
          const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, restaurant_id, role }),
          });

          const data = await response.json();

          if (!response.ok) {
            return {
              error: data.message || 'Invalid credentials'
            };
          }

          return data;
        } catch (error) {
          console.error('Auth error:', error);
          return {
            error: 'Failed to connect to authentication service'
          };
        }
      }
    })
  ]
}) 