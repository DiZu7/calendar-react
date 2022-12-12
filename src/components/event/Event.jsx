import React, { useState } from 'react';
import DeleteEvent from '../deleteModal/DeleteEvent';
import './event.scss';
import PropTypes from 'prop-types';

const Event = ({ height, marginTop, title, time, id, onDelete }) => {
  const [isDeleteModalVisible, setDeleteModalVisibility] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className="event"
      onClick={() => setDeleteModalVisibility(!isDeleteModalVisible)}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDeleteModalVisible && <DeleteEvent id={id} onDelete={onDelete} />}
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default Event;
