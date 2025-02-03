import React from 'react';

interface ProgressCircleProps {
  progress: number; // Value between 1 and 9
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress }) => {
  const normalizedProgress = Math.min(Math.max(progress, 1), 9); // Clamp between 1 and 9
  const progressPercentage = (normalizedProgress / 9) * 100;

  const radius = 15;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progressPercentage / 100) * circumference;

  return (
    <svg width="60" height="60" className="circle-progress">
      {/* Base circle */}
      <circle
        cx="30"
        cy="30"
        r={radius}
        stroke="#D0B48C"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Progress circle */}
      <circle
        cx="30"
        cy="30"
        r={radius}
        stroke="#6A5C47"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 30 30)" // Rotate to start from top
      />
      {/* Transparent hole */}
      <circle
        cx="30"
        cy="30"
        r={radius - strokeWidth / 2}
        fill="transparent" // The transparent hole, adjust as needed
      />
    </svg>
  );
};

export default ProgressCircle;
