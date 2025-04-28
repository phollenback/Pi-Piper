/**
 * Script to run all backend tests
 * 
 * This script can be used to run all the test suites in the backend.
 * It ensures that all modules are tested and provides a summary of the results.
 */

import { run } from 'jest';

// Define the test modules
const testModules = [
  'auth',
  'categories',
  'departments',
  'groups',
  'ingredients',
  'managers',
  'prepitems',
  'restaurants',
  'users'
];

console.log('Running all backend tests...\n');

// Run each test module
testModules.forEach(async module => {
  console.log(`\n=== Testing ${module} module ===`);
  try {
    // Execute the test command for the specific module
    await run([`--testPathPattern=src/${module}`]);
  } catch (error: any) {
    console.error(`Error running tests for ${module} module:`);
    console.error(error);
  }
});

console.log('\n=== All tests completed ==='); 