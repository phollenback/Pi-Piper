/**
 * Async handler utility
 * 
 * This utility wraps async route handlers to catch errors and pass them to Express's
 * error handling middleware, eliminating the need for try/catch blocks in every route.
 */

import { Request, Response, NextFunction } from 'express';

/**
 * Async handler utility to catch errors in async route handlers
 * @param fn - The async route handler function
 * @returns A wrapped function that catches errors and passes them to next()
 */
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;