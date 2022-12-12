import React from 'react';
import './deleteEvent.scss';
import PropTypes from 'prop-types';

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


DeleteEvent.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};


export default DeleteEvent;
