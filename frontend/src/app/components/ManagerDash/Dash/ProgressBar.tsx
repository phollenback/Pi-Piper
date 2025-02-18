import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Dynamic progress indicator that changes color based on completion percentage
const ProgressCircle: React.FC<{ percentage: number }> = ({ percentage }) => {
  // Determines color based on progress thresholds: ≥75% success, ≤50% error, else primary
  const getColor = () => {
    if(percentage >= 75)
      return "success"
    else if(percentage <= 50) 
      return "error"
    else
      return "primary"
  }
  return (
    <div className="relative flex justify-center items-center">
      <CircularProgress
        variant="determinate"
        value={percentage}
        color={getColor()}
        size={190}
        thickness={8}
      />
    </div>
  );
};

export default ProgressCircle;