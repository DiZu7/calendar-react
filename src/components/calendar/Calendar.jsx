import React, { useState, useEffect } from 'react';

import './calendar.scss';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

const Calendar = ({ weekDates, events, onDelete }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} currentDate={currentDate} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            onDelete={onDelete}
            currentDate={currentDate}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
