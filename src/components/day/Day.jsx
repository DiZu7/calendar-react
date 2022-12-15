import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';
import RedLine from '../redLine/RedLine';

const Day = ({ dataDay, dayEvents, onDelete, isCurrentDate, closeModal }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {isCurrentDate && <RedLine />}

      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            onDelete={onDelete}
            closeModal={closeModal}
            // isCurrentDate={currentDate && currentDate.getHours() === hour}
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
  closeModal: PropTypes.func.isRequired,
};

export default Day;
