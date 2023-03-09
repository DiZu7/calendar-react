import React, { useState } from 'react';
import moment from 'moment/moment';
import { createEvent } from '../../gateway/eventsGateway';
import { getDateTime } from '../../utils/dateUtils';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ setModalActive, selectedDate, fetchEvents }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: selectedDate.format('YYYY-MM-DD'),
    startTime: selectedDate.format('HH:mm'),
    endTime:
      selectedDate.add(1, 'hours').format('HH:mm') === '00:00'
        ? '23:59'
        : selectedDate.format('HH:mm'),
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleCreateEvent = newEvent => {
    const { title, date, startTime, endTime, description } = newEvent;

    const createdEvent = {
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };

    createEvent(createdEvent).then(() => {
      fetchEvents();
      setModalActive(false);
    });
  };

  const { title, description, date, startTime, endTime } = eventData;

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => setModalActive(false)}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={e => {
              e.preventDefault();
              handleCreateEvent(eventData);
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

Modal.propTypes = {
  fetchEvents: PropTypes.func,
  setModalActive: PropTypes.func.isRequired,
  selectedDate: PropTypes.object.isRequired,
};

export default Modal;
