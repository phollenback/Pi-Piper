import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { initializePgConnector } from './services/pg.connector';
import { requestLogger, errorLogger, logger } from './middleware/winston.middleware';

// ROUTES **************
import restaurantRouter from './restaurants/restaurant.routes';
import prepItemRouter from './prepitems/prepitems.routes';
import managerRoutes from './managers/managers.routes';
import ingredientRoutes from './ingredients/ingredient.routes';
import categoryRoutes from './categories/category.routes';
import departmentRoutes from './departments/department.routes'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(requestLogger); // Use request logger middleware

// Database Initialization
initializePgConnector();

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('<h1 style="text-align:>Welcome to the Pi-Piper API</h1>');
});

app.use('/restaurants', restaurantRouter);
app.use('/prepitems', prepItemRouter);
app.use('/managers', managerRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/categories', categoryRoutes);
app.use('/departments', departmentRoutes);

// Error Logging Middleware
app.use(errorLogger); // Use error logger middleware

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`${req.method} ${req.url} ${res.statusCode} - ${err.message}`);
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Start Server
app.listen(port, () => {
  console.log(`Pi Piper app listening at http://localhost:${port}`);
  });