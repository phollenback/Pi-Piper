import type { NextAuthConfig } from 'next-auth'

declare module 'next-auth' {
  interface User {
    id?: string | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    role: 'manager' | 'prep' | 'owner';
    restaurant_id: number;
  }
  
  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'manager' | 'prep' | 'owner';
    restaurant_id: number;
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
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
      console.log('JWT callback - user:', user);
      console.log('JWT callback - token:', token);
      if (user) {
        token.role = user.role;
        token.restaurant_id = user.restaurant_id;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('Session callback - token:', token);
      console.log('Session callback - session:', session);
      if (token) {
        session.user.role = token.role;
        session.user.restaurant_id = token.restaurant_id;
      }
      return session;
    }
  },
  providers: [], // Will be configured in auth.ts
} satisfies NextAuthConfig; 