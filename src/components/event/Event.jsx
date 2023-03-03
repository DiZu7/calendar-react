import React, { useState } from 'react';
import DeleteEvent from '../deleteModal/DeleteEvent';
import './event.scss';

import PropTypes from 'prop-types';

const Event = ({ height, marginTop, title, time, fetchEvents, id }) => {
  const [isDeleteModalActive, setDeleteModalActive] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className="event"
      onClick={e => {
        setDeleteModalActive(!isDeleteModalActive);
        e.stopPropagation();
      }}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDeleteModalActive && <DeleteEvent id={id} fetchEvents={fetchEvents} />}
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string,
};

export default Event;
