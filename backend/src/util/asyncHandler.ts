import { Request, Response, NextFunction } from 'express';

// Utility to wrap async route handlers
const asyncHandler = (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next); // Pass any errors to next()
    };
};

export default asyncHandler;