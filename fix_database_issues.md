# Database Issues and Fix Plan

## Current Issues

After testing the API endpoints, we've identified several issues:

1. Only the `/restaurants` endpoint is working correctly
2. All other endpoints are returning errors or 404 responses
3. The main issue appears to be a mismatch between the Drizzle ORM schema and the actual MySQL database structure

## Root Causes

1. **Schema Mismatch**: The column names and table structures in the Drizzle schema don't match our MySQL database
2. **Data Access Layer Issues**: The DAL code is using the mismatched schema, causing queries to fail
3. **Error Handling**: Some controllers may not be properly handling database errors

## Fix Plan

### 1. Update Drizzle Schema

We need to update the `backend/src/db/schema.ts` file to match our actual MySQL database structure:

- Update table names to match MySQL tables
- Update column names to match MySQL columns
- Ensure foreign key relationships are correctly defined

### 2. Fix Data Access Layer (DAL) Code

- Update any DAL code that's using incorrect column names
- Ensure queries are properly structured for our database schema
- Test each DAL function individually to verify it works

### 3. Test Each Endpoint Individually

After fixing the schema and DAL code, we should test each endpoint individually:

- `/restaurants/:restaurantId`
- `/ingredients/:restaurantId`
- `/prepitems/:restaurantId`
- `/departments/:restaurantId`
- `/groups/:restaurantId`
- `/managers/:restaurantId`
- `/users`
- `/auth/login`

### 4. Alternative Approach

If updating the Drizzle schema proves too complex, we could consider:

1. Creating database views that match the expected schema
2. Using raw SQL queries instead of the Drizzle ORM for certain operations
3. Creating a mapping layer between the Drizzle schema and our database structure

## Implementation Steps

1. Stop the server
2. Update the Drizzle schema
3. Restart the server
4. Test each endpoint
5. Fix any remaining issues
6. Test the frontend with the updated API

## Long-term Solution

For a more permanent solution, we should consider:

1. Creating a proper migration script to update the database schema
2. Ensuring all new tables follow the same naming conventions
3. Adding comprehensive tests for all API endpoints
4. Documenting the API for future reference 