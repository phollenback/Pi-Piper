# Pi-Piper Backend

This is the backend service for the Pi-Piper application, providing API endpoints for restaurant management, prep items, ingredients, and user management.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env` and update the values as needed
   - For testing, use `.env.test`

3. Start the server:
   ```bash
   npm start
   ```

4. For development with auto-reload:
   ```bash
   npm run dev
   ```

## Testing

The backend includes comprehensive test suites for all modules. Here's how to run the tests:

### Run All Tests

To run all test suites:

```bash
npm run test:all
```

This will execute tests for all modules and provide a summary of the results.

### Run Specific Module Tests

To run tests for a specific module:

```bash
npx jest --testPathPattern=src/[module-name]
```

For example, to run only the auth tests:

```bash
npx jest --testPathPattern=src/auth
```

### Available Test Modules

- `auth` - Authentication tests
- `categories` - Category management tests
- `departments` - Department management tests
- `groups` - Group management tests
- `ingredients` - Ingredient management tests
- `managers` - Manager management tests
- `prepitems` - Prep item management tests
- `restaurants` - Restaurant management tests
- `users` - User management tests

### Test Coverage

To generate a test coverage report:

```bash
npm run test:coverage
```

This will create a coverage report in the `coverage` directory.

## API Endpoints

The backend provides the following API endpoints:

- `/auth` - Authentication endpoints
- `/categories` - Category management
- `/departments` - Department management
- `/groups` - Group management
- `/ingredients` - Ingredient management
- `/managers` - Manager management
- `/prepitems` - Prep item management
- `/restaurants` - Restaurant management
- `/users` - User management

## Development

For development, you can use the following commands:

- `npm run dev` - Start the server with auto-reload
- `npm run build` - Build the TypeScript code
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode 
\
