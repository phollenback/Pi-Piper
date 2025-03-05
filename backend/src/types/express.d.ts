import { User } from './db.types';

declare namespace Express {
  export interface Request {
    user: User;
  }
} 