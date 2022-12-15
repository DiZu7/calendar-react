import React, { useEffect, useState } from 'react';
import './styles/common.scss';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment/moment';
import {
  getWeekStartDate,
  generateWeekRange,
  getDateTime,
  getCurrentMonth,
} from '../src/utils/dateUtils.js';
import Modal from './components/modal/Modal.jsx';
import { fetchEventsList, createEvent, deleteEvent } from './gateway/eventsGateway';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const currentMonth = getCurrentMonth(weekDates);

  const goPrevWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };
  const goNextWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };
  const goToday = () => {
    setWeekStartDate(new Date());
  };

  const [isModalVisible, setVisibility] = useState(false);
  const toggleVisibilityModal = () => {
    setVisibility(!isModalVisible);
  };

  const [eventsList, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then(eventsList => setEvents(eventsList));
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
      toggleVisibilityModal();
    });
  };

  const handleDelete = eventId => {
    deleteEvent(eventId).then(() => fetchEvents());
  };


  const [currentDate, setDate] = useState(new Date());
  const getOnClickDate = e => {
    const startHour = e.target.dataset.time - 1;
    const day = e.target.closest('.calendar__day').dataset.day;

    setDate(new Date(new Date().getFullYear(), new Date().getMonth(), day, startHour));
  };

  return (
    <>
      <Header
        month={currentMonth}
        goPrevWeek={goPrevWeek}
        goNextWeek={goNextWeek}
        goToday={goToday}
        openModal={toggleVisibilityModal}
        setDate={setDate}
      />
      <Calendar
        weekDates={weekDates}
        events={eventsList}
        onDelete={handleDelete}
        toggleVisibilityModal={toggleVisibilityModal}
        getOnClickDate={getOnClickDate}
      />
      {isModalVisible && (
        <Modal
          closeModal={toggleVisibilityModal}
          onCreateEvent={handleCreateEvent}
          currentDate={currentDate}
        />
      )}
    </>
  );
};

export default App;
