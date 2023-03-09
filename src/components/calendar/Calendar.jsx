import React, { useState, useEffect } from 'react';
import './calendar.scss';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';
import { fetchEventsList } from '../../gateway/eventsGateway';

const Calendar = ({ weekDates, setModalActive, isModalActive, selectedDate, setSelectedDate }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then(eventsList => setEvents(eventsList));
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            fetchEvents={fetchEvents}
            setModalActive={setModalActive}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
      {isModalActive && (
        <Modal
          setModalActive={setModalActive}
          selectedDate={selectedDate}
          fetchEvents={fetchEvents}
        />
      )}
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  setModalActive: PropTypes.func.isRequired,
  isModalActive: PropTypes.bool.isRequired,
  selectedDate: PropTypes.object.isRequired,
};

export default Calendar;
