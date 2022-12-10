import React from 'react';
import './redLine.scss';

const RedLine = ({ currentDate }) => {
  return (
    currentDate && <div style={{ marginTop: currentDate.getMinutes() }} className="red-line"></div>
  );
};

export default RedLine;
