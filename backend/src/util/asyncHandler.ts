/**
 * Async handler utility
 * 
 * This utility wraps async route handlers to catch errors and pass them to Express's
 * error handling middleware, eliminating the need for try/catch blocks in every route.
 */

import { Request, Response, NextFunction } from 'express';

/**
 * Wraps an async function to automatically catch errors and pass them to the next middleware
 * @param fn - The async route handler function to wrap
 * @returns A function that handles the async route and catches any errors
 */
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default asyncHandler;