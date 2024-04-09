import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface PieProps {
  percentage: number;
  textSize?: string;
  circleSize?: number;
  className?: string;
}

const Pie: React.FC<PieProps> = ({ percentage, textSize = "2em", circleSize = 50, className }) => {
  const roundedPercentage = Math.round(percentage); 

  let pathColor = "white"; 
  if (percentage <= 35) {
    pathColor = "red"; 
  } else if (percentage > 35 && percentage <= 70) {
    pathColor = "yellow"; 
  } else if (percentage > 70 && percentage <= 100) {
    pathColor = "#0BDA51"; 
  }

  return (
    <div className={className} style={{ width: circleSize, height: circleSize, borderRadius: '50%' }}>
      <CircularProgressbar
        value={percentage}
        text={`${roundedPercentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: '#141414',
          textColor: "#fff",
          pathColor: pathColor,
          trailColor: "rgba(0, 0, 0, 0.5)",
          textSize: "1.5rem"
        })}
      />
    </div>
  );
};

export default Pie;