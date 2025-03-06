import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Dynamic progress indicator that changes color based on completion percentage
const ProgressCircle: React.FC<{ percentage: number }> = ({ percentage }) => {
  // Determines color based on progress thresholds: ≥75% success, ≤50% error, else primary
  const getColor = () => {
    if (percentage >= 75) return "success";
    if (percentage <= 50) return "error";
    return "primary";
  };

  // Ensure percentage is within 0-100 range
  const safePercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="relative flex justify-center items-center">
      <CircularProgress
        variant="determinate"
        value={safePercentage}
        color={getColor()}
        size={190}
        thickness={8}
      />
    </div>
  );
};

export default ProgressCircle;