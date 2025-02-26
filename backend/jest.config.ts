import type { Config } from '@jest/types';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalTeardown: './src/tests/teardown.js',
  testMatch: ['**/*.test.ts'],
  setupFilesAfterEnv: ['./src/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // Add test timeout
  testTimeout: 30000, // Increase timeout to 30 seconds
  // Detect open handles
  detectOpenHandles: true,
  // Add any other configurations from jest.config.js here
}; 
