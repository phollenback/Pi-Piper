// Extend the Response interface to include responseTime
declare module 'express-serve-static-core' {
    interface Response {
        responseTime?: string;
    }
}

import winston from 'winston';
import expressWinston from 'express-winston';
import { Request, Response, NextFunction } from 'express';
import onFinished from 'on-finished';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// Middleware to log requests and responses
const requestLogger = expressWinston.logger({
    winstonInstance: logger,
    msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
    dynamicMeta: (req: Request, res: Response) => {
        return {
            responseTime: res.responseTime,
            endpoint: req.originalUrl,
            timestamp: new Date().toISOString(),
            method: req.method,
            statusCode: res.statusCode,
            userAgent: req.headers['user-agent']
        };
    },
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
});

// Middleware to calculate response time
const responseTimeLogger = (req: Request, res: Response, next: NextFunction) => {
    const startHrTime = process.hrtime();

    onFinished(res, () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
        res.responseTime = elapsedTimeInMs.toFixed(3);
    });

    next();
};

// Middleware to log errors
const errorLogger = expressWinston.errorLogger({
    winstonInstance: logger
});

export { responseTimeLogger, requestLogger, errorLogger, logger };