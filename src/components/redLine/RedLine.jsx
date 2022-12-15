import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import './redLine.scss';

const RedLine = () => {
  const [marginTop, setmarginTop] = useState(moment().minutes() + moment().hours() * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setmarginTop(moment().minutes() + moment().hours() * 60);
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return <div style={{ marginTop }} className="red-line"></div>;
};

export default RedLine;
