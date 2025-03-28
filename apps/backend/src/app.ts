import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import { testConnection } from './db/connection';
import { requestLogger, logger, errorLogger } from './middleware/winston.middleware';

// ROUTES **************
import restaurantRouter from './restaurants/restaurant.routes';
import prepItemRouter from './prepitems/prepitems.routes';
import managerRoutes from './managers/managers.routes';
import ingredientRoutes from './ingredients/ingredient.routes';
import categoryRoutes from './categories/category.routes';
import departmentRoutes from './departments/department.routes'
import groupRoutes from './groups/group.routes';
import authRoutes from './auth/auth.routes';
import userRoutes from './users/users.routes';
import recipeRoutes from './recipes/recipe.routes';
import metricsRoutes from './metrics/metrics.routes';
import restaurantSettingsRoutes from './routes/restaurant-settings.routes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(requestLogger); // Use request logger middleware

// Enhanced Database Initialization
const initializeDatabase = async () => {
  try {
    logger.info('Initializing database connection...');
    const connected = await testConnection();
    
    if (connected) {
      logger.info('Database connection established successfully');
      return true;
    } else {
      logger.error('Database connection failed');
      return false;
    }
  } catch (err: any) {
    logger.error('Database initialization failed', { error: err.message });
    throw err;
  }
};

// Start server only if database connection is successful
const startServer = async () => {
  try {
    const dbInitialized = await initializeDatabase();
    
    if (!dbInitialized) {
      logger.error('Server cannot start without database connection');
      process.exit(1);
    }

    // Routes
    app.get('/', (req: Request, res: Response) => {
      res.send('<h1 style="text-align: center;">Welcome to the Pi-Piper API</h1>');
    });

    // Attach module routes
    app.use('/restaurants', restaurantRouter);
    app.use('/prepitems', prepItemRouter);
    app.use('/managers', managerRoutes);
    app.use('/ingredients', ingredientRoutes);
    app.use('/categories', categoryRoutes);
    app.use('/departments', departmentRoutes);
    app.use('/groups', groupRoutes);
    app.use('/auth', authRoutes);
    app.use('/users', userRoutes);
    app.use('/recipes', recipeRoutes);
    app.use('/metrics', metricsRoutes);
    app.use('/restaurant-settings', restaurantSettingsRoutes);

    // Health Check Route
    app.get('/health', async (req: Request, res: Response) => {
      try {
        const dbStatus = await testConnection();
        const status = {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          services: {
            server: 'up',
            database: dbStatus ? 'up' : 'down'
          },
          uptime: process.uptime()
        };

        res.status(dbStatus ? 200 : 503).json(status);
      } catch (error) {
        res.status(503).json({
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          services: {
            server: 'up',
            database: 'error'
          },
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    });

    // Error Logging Middleware
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      logger.error(`${req.method} ${req.url} ${res.statusCode} - ${err.message}`);
      console.error(err.stack);
      res.status(500).send({ error: 'Something went wrong!' });
    });

    app.listen(port, () => {
      logger.info(`Server started successfully on port ${port}`);
      console.log(`Pi Piper app listening at http://localhost:${port}`);
    });
  } catch (error) {
    logger.error('Failed to start server', { error });
    process.exit(1);
  }
};

// Start the server
startServer();