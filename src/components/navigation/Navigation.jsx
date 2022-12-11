import React from 'react';
import classNames from 'classnames';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates, currentDate }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        const dayLabelNumberClasses = classNames('day-label__day-number', {
          'day-label__day-number_current':
            currentDate && currentDate.getDate() === dayDate.getDate(),
        });

        const dayLabelDayClasses = classNames('day-label__day-name', {
          'day-label__day-name_current': currentDate && currentDate.getDate() === dayDate.getDate(),
        });

        return (
          <div className="calendar__day-label day-label" key={dayDate.getDate()}>
            <span className={dayLabelDayClasses}>{days[dayDate.getDay()]}</span>
            <span className={dayLabelNumberClasses}>{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
