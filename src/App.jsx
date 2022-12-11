import React, { useEffect, useState } from 'react';
import './common.scss';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, months } from '../src/utils/dateUtils.js';
import Modal from './components/modal/Modal.jsx';
import { fetchEventsList, createEvent, deleteEvent } from './gateway/eventsGateway';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const weekStartMonth = months[weekDates[0].getMonth()];
  const weekEndMonth = months[weekDates[6].getMonth()];
  const currentMonth =
    weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;

  const [isModalVisible, setVisibility] = useState(false);
  const toggleModalStatus = () => {
    setVisibility(!isModalVisible);
  };

  const goPrevWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const goNextWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const goToday = () => {
    setWeekStartDate(new Date());
  };

  const [eventsList, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then(eventsList => setEvents(eventsList));
  };

  const onCreateEvent = newEvent => {
    const { title, date, startTime, endTime, description } = newEvent;
    const createdEvent = {
      title,
      description,
      dateFrom: new Date(`${date}T${startTime}`),
      dateTo: new Date(`${date}T${endTime}`),
    };

    createEvent(createdEvent).then(() => fetchEvents());
  };

  const handleDelete = eventId => {
    deleteEvent(eventId).then(() => fetchEvents());
  };

  return (
    <>
      <Header
        month={currentMonth}
        goPrevWeek={goPrevWeek}
        goNextWeek={goNextWeek}
        goToday={goToday}
        openModal={toggleModalStatus}
      />
      <Calendar weekDates={weekDates} events={eventsList} onDelete={handleDelete} />
      {isModalVisible && <Modal closeModal={toggleModalStatus} onCreateEvent={onCreateEvent} />}
    </>
  );
};

export default App;
