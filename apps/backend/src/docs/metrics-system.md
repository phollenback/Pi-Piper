# Restaurant Metrics System

This document describes the metrics system implemented for the restaurant management application. The system collects and calculates various metrics for each restaurant on a daily basis.

## Metrics Collected

The following metrics are collected and stored for each restaurant:

1. **Inventory Turnover (turns/month)** - Measures how quickly inventory is used and replaced.
2. **Average Prep Time (hours)** - Measures the average time from 6 AM until the last completed prep item each day.
3. **Overall Ingredient Price Average** - Calculates the average price of all ingredients.
4. **Monthly Cleaning Completion Percentage** - Tracks the completion rate of monthly cleaning tasks.
5. **Weekly Cleaning Completion Percentage** - Tracks the completion rate of weekly cleaning tasks.

## Database Schema

The metrics system uses the following tables:

### fact_restaurant_metrics

Stores the calculated metrics for each restaurant by date.

| Column | Type | Description |
|--------|------|-------------|
| metric_id | INT | Primary key |
| restaurant_id | INT | Restaurant ID |
| date | DATE | Date of the metrics |
| inventory_turnover | DECIMAL(10,2) | Inventory turnover rate (turns/month) |
| avg_prep_time_hours | DECIMAL(10,2) | Average prep time in hours |
| overall_ingredient_price_avg | DECIMAL(10,2) | Average price of ingredients |
| monthly_cleaning_completion_pct | DECIMAL(5,2) | Percentage of monthly cleaning tasks completed |
| weekly_cleaning_completion_pct | DECIMAL(5,2) | Percentage of weekly cleaning tasks completed |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

### dim_cleaning_task

Stores the cleaning tasks for each restaurant.

| Column | Type | Description |
|--------|------|-------------|
| task_id | INT | Primary key |
| restaurant_id | INT | Restaurant ID |
| task_name | VARCHAR(255) | Name of the cleaning task |
| description | TEXT | Description of the task |
| frequency | VARCHAR(20) | Frequency of the task (daily, weekly, monthly) |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

### fact_cleaning_completion

Tracks the completion of cleaning tasks.

| Column | Type | Description |
|--------|------|-------------|
| completion_id | INT | Primary key |
| restaurant_id | INT | Restaurant ID |
| task_id | INT | Task ID |
| date | DATE | Date of completion |
| completed | BOOLEAN | Whether the task was completed |
| completed_by | INT | User ID of who completed the task |
| completed_at | TIMESTAMP | When the task was completed |
| notes | TEXT | Any notes about the completion |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

## Metrics Calculation

Metrics are calculated daily at 2 AM using a scheduled script. The calculation methods are as follows:

### Inventory Turnover

Calculated as the number of inventory transactions in the last month divided by the total number of inventory items. This is a simplified approximation of the traditional inventory turnover calculation.

### Average Prep Time

Calculated by measuring the time from 6 AM until the last completed prep item for each day, then averaging these times over the past month.

### Overall Ingredient Price Average

Calculated as the average unit price of all ingredients in the restaurant's inventory.

### Cleaning Completion Percentages

Calculated as the percentage of cleaning tasks (weekly or monthly) that have been marked as completed within their respective time periods.

## Setup and Maintenance

### Initial Setup

1. Run the database migrations to create the necessary tables:
   ```
   npm run migrate
   ```

2. Seed the cleaning tasks for each restaurant:
   ```
   npm run seed
   ```

### Daily Updates

The metrics are updated daily at 2 AM using a cron job. The cron entry should be:

```
0 2 * * * /path/to/node /path/to/backend/dist/scripts/update-metrics.js >> /path/to/logs/metrics-update.log 2>&1
```

### Manual Updates

To manually update the metrics, you can run:

```
node dist/scripts/update-metrics.js
```

## Viewing Metrics

Metrics can be viewed in the restaurant dashboard under the "Performance" tab. The metrics are displayed for the selected restaurant and date range.

## Adding New Metrics

To add a new metric:

1. Add the new column to the `fact_restaurant_metrics` table in the database schema.
2. Create a new calculation function in the `metrics.service.ts` file.
3. Update the `updateRestaurantMetrics` function to include the new metric.
4. Update the frontend to display the new metric.

## Troubleshooting

If metrics are not being updated:

1. Check the logs in `/path/to/logs/metrics-update.log` for errors.
2. Verify that the cron job is running correctly.
3. Check that the database connection is working.
4. Ensure that the calculation functions are not throwing errors.

For more information, contact the system administrator. 