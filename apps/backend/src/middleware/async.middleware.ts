import { Request, Response, NextFunction } from 'express';

/**
 * Async handler middleware to catch errors in async route handlers
 * @param fn - The async route handler function
 * @returns A wrapped function that catches errors and passes them to next()
 */
export const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
}; 