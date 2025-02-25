import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    // Add other user properties you need
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    // Add other token properties you need
  }
} 