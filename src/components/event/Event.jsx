import React, { useState } from 'react';
import DeleteEvent from '../deleteModal/DeleteEvent';

import './event.scss';

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

export default Event;
