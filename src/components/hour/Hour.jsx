import React from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import RedLine from '../redLine/RedLine';
import PropTypes from 'prop-types';
import './hour.scss';

const Hour = ({ dataHour, hourEvents, onDelete, isCurrentDate }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isCurrentDate && <RedLine />}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            onDelete={onDelete}
            id={id}
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
  onDelete: PropTypes.func.isRequired,
};

export default Hour;
