# Frontend Source Directory Structure

This directory contains the source code for the frontend application. The code is organized into the following directories:

## Directory Structure

- `app/` - Next.js app directory containing pages and layouts
- `components/` - Reusable React components
- `config/` - Configuration files (auth, environment variables, etc.)
- `constants/` - Application constants and enums
- `features/` - Feature-specific code including Redux slices and selectors
- `hooks/` - Custom React hooks
- `services/` - API services and data fetching logic
- `shared/` - Shared utilities and components
- `types/` - TypeScript type definitions
- `utils/` - Utility functions and helpers

## Key Files

- `config/auth.ts` - Authentication configuration
- `config/auth.config.ts` - NextAuth configuration
- `utils/middleware.ts` - Next.js middleware
- `types/next-auth.d.ts` - NextAuth type definitions

## Best Practices

1. Keep components small and focused on a single responsibility
2. Use TypeScript for all new code
3. Follow the feature-based organization for new features
4. Keep shared code in the appropriate shared directories
5. Use services for all API calls and data fetching
6. Document complex logic and components 