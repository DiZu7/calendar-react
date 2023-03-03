import React from 'react';
import Event from '../event/Event';
import PropTypes from 'prop-types';
import './hour.scss';
import moment from 'moment/moment';

const Hour = ({ dataHour, hourEvents, fetchEvents }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = moment(dateFrom).format('HH:mm');
        const eventEnd = moment(dateTo).format('HH:mm');

        return (
          <Event
            key={id}
            height={moment.duration(moment(dateTo).diff(moment(dateFrom))).as('minutes')}
            marginTop={moment(dateFrom).minute()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array,
  isCurrentDate: PropTypes.bool,
  onDelete: PropTypes.func,
  setModalActive: PropTypes.func.isRequired,
};

export default Hour;
