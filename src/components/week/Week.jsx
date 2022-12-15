import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

const Week = ({ weekDates, events, onDelete, getOnClickDate, toggleVisibilityModal }) => {
  return (
    <div
      className="calendar__week"
      onClick={e => {
        getOnClickDate(e);
        toggleVisibilityModal();
      }}
    >
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        //getting all events from the day we will render
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );


        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            onDelete={onDelete}
            closeModal={toggleVisibilityModal}
            isCurrentDate={moment().dayOfYear() === moment(dayStart).dayOfYear()}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  onDelete: PropTypes.func,
  getOnClickDate: PropTypes.func.isRequired,
  toggleVisibilityModal: PropTypes.func.isRequired,
};

export default Week;
