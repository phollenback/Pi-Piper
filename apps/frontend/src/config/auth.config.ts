import type { NextAuthConfig } from 'next-auth'
import type { DefaultSession } from 'next-auth'

// Extend the built-in session types
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      role: 'manager' | 'prep';
      restaurant_id: number;
      username: string;
    } & DefaultSession['user']
  }

  interface User {
    role: 'manager' | 'prep';
    restaurant_id: number;
    username: string;
    emailVerified: Date | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'manager' | 'prep';
    restaurant_id: number;
    username: string;
    emailVerified: Date | null;
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute = 
        nextUrl.pathname.startsWith('/manager-dash') ||
        nextUrl.pathname.startsWith('/prep-dash');

      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        // Ensure all required fields are present
        token.role = user.role;
        token.restaurant_id = user.restaurant_id;
        token.username = user.username;
        token.emailVerified = user.emailVerified;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Ensure all required fields are present
        session.user = {
          ...session.user,
          role: token.role,
          restaurant_id: token.restaurant_id,
          username: token.username,
          emailVerified: token.emailVerified
        };
      }
      return session;
    }
  },
  providers: [], // Will be configured in auth.ts
} satisfies NextAuthConfig; 