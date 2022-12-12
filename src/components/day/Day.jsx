import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';

const Day = ({ dataDay, dayEvents, onDelete, currentDate }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (

            <Hour
              key={dataDay + hour}
              dataHour={hour}
              hourEvents={hourEvents}
              onDelete={onDelete}
              isCurrentDate={currentDate && currentDate.getHours() === hour}
            />
        );
      })}
    </div>
  );
};


Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array,
  currentDate: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
};

export default Day;
