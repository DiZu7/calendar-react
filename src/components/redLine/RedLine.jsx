import React, { useState, useEffect } from 'react';
import './redLine.scss';

const RedLine = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return <div style={{ marginTop: currentDate.getMinutes() }} className="red-line"></div>;
};

export default RedLine;
