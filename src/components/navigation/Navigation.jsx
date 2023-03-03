import React from 'react';
import './navigation.scss';
import classNames from 'classnames';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        // console.log(dayDate);
        const isCurrentDate = moment().format() === dayDate;
        // const isCurrentDate = new Date().toDateString() === dayDate.toDateString();

        const dayLabelNumberClasses = classNames('day-label__day-number', {
          'day-label__day-number_current': isCurrentDate,
        });

        const dayLabelDayClasses = classNames('day-label__day-name', {
          'day-label__day-name_current': isCurrentDate,
        });

        return (
          <div className="calendar__day-label day-label" key={moment(dayDate).date()}>
            {/* <div className="calendar__day-label day-label" key={dayDate.getDate()}> */}
            <span className={dayLabelDayClasses}>{moment(dayDate).format('ddd')}</span>
            {/* <span className={dayLabelDayClasses}>{days[moment(dayDate).day()]}</span> */}
            {/* <span className={dayLabelDayClasses}>{days[dayDate.getDay()]}</span> */}
            <span className={dayLabelNumberClasses}>{moment(dayDate).date()}</span>
            {/* <span className={dayLabelNumberClasses}>{dayDate.getDate()}</span> */}
          </div>
        );
      })}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
