import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

const Week = ({ weekDates, events, setModalActive, fetchEvents, setSelectedDate }) => {
  const getOnClickDate = e => {
    const startHour = e.target.dataset.time - 1;
    const calendarDay = e.target.closest('.calendar__day').dataset;
    const date = calendarDay.day;
    const month = calendarDay.month;
    const year = calendarDay.year;
    setSelectedDate(moment().set({ year, month, date, hour: startHour, minute: 0 }));
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
        const startOfDay = moment(dayStart).set({ hour: 0, minute: 0, second: 0 });
        const endOfDay = moment(startOfDay).set({ hour: 24, minute: 0, second: 0 });

        const dayEvents = events.filter(
          event =>
            moment(event.dateFrom).format() >= startOfDay.format() &&
            moment(event.dateTo) < endOfDay,
        );

        return (
          <Day
            key={dayStart.date()}
            dataDay={dayStart.date()}
            dataMonth={dayStart.month()}
            dataYear={dayStart.year()}
            fetchEvents={fetchEvents}
            dayEvents={dayEvents}
            setModalActive={setModalActive}
            isCurrentDate={moment().dayOfYear() === dayStart.dayOfYear()}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  fetchEvents: PropTypes.func,
  setSelectedDate: PropTypes.func.isRequired,
  setModalActive: PropTypes.func.isRequired,
};

export default Week;
