"use client"
import React, { useEffect, useState } from 'react';

// TimeVariables component: displays the current time and the time until noon.
const TimeVariables: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date()); // Current time.
  const [timeUntilNoon, setTimeUntilNoon] = useState(''); // Time until noon.

  // Updates the currentTime state every second.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculates and updates the timeUntilNoon state every second.
  useEffect(() => {
    const calculateTimeUntilNoon = () => {
      const now = new Date();
      const noon = new Date();
      noon.setHours(12, 0, 0, 0);

      if (now > noon) {
        noon.setDate(noon.getDate() + 1);
      }

      const diff = noon.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeUntilNoon(`${hours}h ${minutes}m ${seconds}s`);
    };

    calculateTimeUntilNoon();
    const interval = setInterval(calculateTimeUntilNoon, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold">Current Time</h2>
        <p className="text-6xl">{currentTime.toLocaleTimeString()}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Time until Noon</h2>
        <p className="text-6xl">{timeUntilNoon}</p>
      </div>
    </div>
  );
};

export default TimeVariables;