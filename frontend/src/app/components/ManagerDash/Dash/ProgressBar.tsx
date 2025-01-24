import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ProgressCircle: React.FC<{ percentage: number }> = ({ percentage }) => {
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