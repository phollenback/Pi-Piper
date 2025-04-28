import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    restaurant_id: number;
    username: string;
    role: string;
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    restaurant_id: number;
    username: string;
    role: string;
  }
} 