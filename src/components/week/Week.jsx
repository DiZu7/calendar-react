import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

const Week = ({ weekDates, events, setModalActive, fetchEvents, setDate }) => {
  const getOnClickDate = e => {
    const startHour = e.target.dataset.time - 1;
    const date = e.target.closest('.calendar__day').dataset.day;
    const month = e.target.closest('.calendar__day').dataset.month;
    const year = e.target.closest('.calendar__day').dataset.year;
    setDate(moment().set({ year, month, date, hour: startHour, minute: 0 }));
  };

  return (
    <div
      className="calendar__week"
      onClick={e => {
        getOnClickDate(e);
        setModalActive(true);
      }}
    >
      {weekDates.map(dayStart => {
        const startOfDay = moment(dayStart).set({ hour: 0, minute: 0, second: 0 }).format();

        const endOfDay = moment(startOfDay).set({ hour: 24, minute: 0, second: 0 }).format();

        const dayEvents = events.filter(
          event => event.dateFrom > startOfDay && event.dateTo < endOfDay,
        );

        return (
          <Day
            key={moment(dayStart).date()}
            dataDay={moment(dayStart).date()}
            dataMonth={moment(dayStart).month()}
            dataYear={moment(dayStart).year()}
            fetchEvents={fetchEvents}
            dayEvents={dayEvents}
            setModalActive={setModalActive}
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
  setDate: PropTypes.func.isRequired,
  setModalActive: PropTypes.func.isRequired,
};

export default Week;
