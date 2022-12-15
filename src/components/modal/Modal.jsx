import React, { useState } from 'react';
import moment from 'moment/moment';
import './modal.scss';

const Modal = ({ closeModal, onCreateEvent, currentDate }) => {
  const [state, setState] = useState({
    title: '',
    description: '',
    date: moment(currentDate).format('YYYY-MM-DD'),
    startTime: moment(currentDate).format('HH:mm'),
    endTime: moment(currentDate).add(1, 'hours').format('HH:mm'),
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { title, description, date, startTime, endTime } = state;

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={e => {
              e.preventDefault();
              onCreateEvent(state);
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
