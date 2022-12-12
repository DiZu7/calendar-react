import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';

const Week = ({ weekDates, events, onDelete }) => {
  // const currentDate = new Date();
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        //getting all events from the day we will render
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        const currentDate =
          new Date().toDateString() === dayStart.toDateString() ? new Date() : null;

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            onDelete={onDelete}
            // currentDate={currentDate.toDateString() === dayStart.toDateString() && currentDate}
            currentDate={currentDate}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};

export default Week;
