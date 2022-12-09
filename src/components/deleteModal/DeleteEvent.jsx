import React from 'react';

import './deleteEvent.scss';

const DeleteEvent = ({ id, onDelete }) => {
  return (
    <div className="delete-event">
      <button className="button delete-event__btn" onClick={() => onDelete(id)}>
        <i className="fas fa-solid fa-trash delete-event__icon "></i>
        Delete
      </button>
    </div>
  );
};

export default DeleteEvent;
