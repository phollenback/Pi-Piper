#!/bin/bash

# Script to run all inventory tracking tests

echo "Running Inventory Tracking Tests"
echo "================================"

# Run unit tests
echo -e "\n1. Running unit tests..."
npm test -- --testPathPattern=ingredient.service.test.ts

# Run integration tests
echo -e "\n2. Running integration tests..."
npm test -- --testPathPattern=inventory-tracking.integration.test.ts

# Run manual test script
echo -e "\n3. Running manual test script..."
npx ts-node src/scripts/test-inventory-tracking.ts

echo -e "\nAll tests completed!" 