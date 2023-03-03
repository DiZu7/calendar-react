import React from 'react';
import './deleteEvent.scss';
import { deleteEvent } from '../../gateway/eventsGateway';
import PropTypes from 'prop-types';

const DeleteEvent = ({ id, fetchEvents }) => {
  const handleDeleteEvent = eventId => {
    deleteEvent(eventId).then(() => fetchEvents());
  };
  return (
    <div className="delete-event">
      <button className="button delete-event__btn" onClick={() => handleDeleteEvent(id)}>
        <i className="fas fa-solid fa-trash delete-event__icon "></i>
        Delete
      </button>
    </div>
  );
};

DeleteEvent.propTypes = {
  id: PropTypes.string,
};

export default DeleteEvent;
