import React, { useState, useEffect } from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import RedLine from '../redLine/RedLine';

const Hour = ({ dataHour, hourEvents, onDelete, currentDate }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {currentDate && currentDate.getHours() === dataHour && <RedLine currentDate={currentDate} />}
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

export default Hour;
