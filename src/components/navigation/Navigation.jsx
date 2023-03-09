import React from 'react';
import './navigation.scss';
import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        // const isCurrentDate = moment().format().includes(moment(dayDate).format('YYYY-MM-DD'));
        const isCurrentDate = moment().format('YYYY-MM-DD') === dayDate.format('YYYY-MM-DD');

        const dayLabelNumberClasses = classNames('day-label__day-number', {
          'day-label__day-number_current': isCurrentDate,
        });

        const dayLabelDayClasses = classNames('day-label__day-name', {
          'day-label__day-name_current': isCurrentDate,
        });

        return (
          <div className="calendar__day-label day-label" key={dayDate.date()}>
            <span className={dayLabelDayClasses}>{dayDate.format('ddd')}</span>
            <span className={dayLabelNumberClasses}>{dayDate.date()}</span>
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
