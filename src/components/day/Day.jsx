import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';
import RedLine from '../redLine/RedLine';
import moment from 'moment/moment';

const Day = ({
  dataDay,
  dataMonth,
  dataYear,
  dayEvents,
  isCurrentDate,
  setModalActive,
  fetchEvents,
}) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay} data-month={dataMonth} data-year={dataYear}>
      {isCurrentDate && <RedLine />}

      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => moment(event.dateFrom).hour() === hour);
        // const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            setModalActive={setModalActive}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array,
  isCurrentDate: PropTypes.bool,
  onDelete: PropTypes.func,
  setModalActive: PropTypes.func.isRequired,
};

export default Day;
