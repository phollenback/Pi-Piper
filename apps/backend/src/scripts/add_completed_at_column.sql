-- Add completed_at column to fact_daily_prep_list table
ALTER TABLE fact_daily_prep_list
ADD COLUMN completed_at DATETIME DEFAULT NULL;

-- Verify the column was added
DESCRIBE fact_daily_prep_list; 