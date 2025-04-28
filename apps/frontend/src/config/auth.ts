import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import { User } from "next-auth"

interface LoginCredentials {
  username: string;
  password: string;
  restaurant_id: number;
  role: 'manager' | 'prep';
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials): Promise<User | null> {
        const { username, password, restaurant_id, role } = credentials as unknown as LoginCredentials;
        
        try {
          const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, restaurant_id, role }),
          });

          const data = await response.json();

          if (!response.ok) {
            return null;
          }

          // Ensure all required fields are present
          return {
            id: data.id || username,
            name: data.name || username,
            email: data.email || `${username}@example.com`,
            emailVerified: data.emailVerified ? new Date(data.emailVerified) : null,
            role,
            restaurant_id: Number(restaurant_id),
            username
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ]
}) 