import { ExpressAuth } from "@auth/express"
import Credentials from "@auth/express/providers/credentials"
import { execute } from '../services/pg.connector'
import bcrypt from 'bcrypt'
import { logger } from '../middleware/winston.middleware'

interface Credentials {
  username: string;
  password: string;
  restaurant_id: string;
  role: string;
}

interface UserRecord {
  user_id: number;
  username: string;
  password: string;
  role: string;
  restaurant_id: number;
  status: string;
}

interface User {
  id: string;
  name: string;
  role: string;
  restaurant_id: number;
}

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials: Record<string, unknown>) {
        try {
          if (!credentials?.username || !credentials?.password || 
              !credentials?.restaurant_id || !credentials?.role) {
            return null;
          }
          
          const creds = {
            username: credentials.username as string,
            password: credentials.password as string,
            restaurant_id: credentials.restaurant_id as string,
            role: credentials.role as string
          };

          const [user] = (await execute(
            `SELECT user_id, username, password, role, restaurant_id, status 
             FROM dim_users 
             WHERE username = ? 
             AND restaurant_id = ?
             AND status = 'active'`,
            [creds.username, creds.restaurant_id]
          )) as UserRecord[];

          if (!user) {
            logger.error('[auth.config][authorize] User not found')
            return null
          }

          const isValidPassword = await bcrypt.compare(creds.password, user.password as string)
          if (!isValidPassword) {
            logger.error('[auth.config][authorize] Invalid password')
            return null
          }

          // Verify role matches
          if (user.role !== creds.role && user.role !== 'owner') {
            logger.error('[auth.config][authorize] Invalid role')
            return null
          }

          logger.info('[auth.config][authorize] Login successful', { 
            userId: user.user_id,
            role: user.role 
          })

          return {
            id: user.user_id.toString(),
            name: user.username,
            role: user.role,
            restaurant_id: user.restaurant_id
          } as User
        } catch (error) {
          logger.error('[auth.config][authorize][ERROR]', { error })
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        token.role = user.role
        token.restaurant_id = user.restaurant_id
      }
      return token
    },
    async session({ session, token }: { session: any, token: any }) {
      if (token) {
        session.user.role = token.role
        session.user.restaurant_id = token.restaurant_id
      }
      return session
    }
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true
} 