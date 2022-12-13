import React, { useEffect, useState } from 'react';
import './styles/common.scss';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import {
  getWeekStartDate,
  generateWeekRange,
  getDateTime,
  getCurrentMonth,
} from '../src/utils/dateUtils.js';
import Modal from './components/modal/Modal.jsx';
import { fetchEventsList, createEvent, deleteEvent } from './gateway/eventsGateway';

const App = () => {
  const [state, setState] = useState({
    weekStartDate: new Date(),
    isModalVisible: false,
    eventsList: [],
  });
  const { weekStartDate, isModalVisible, eventsList } = state;

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const currentMonth = getCurrentMonth(weekDates);

  const toggleModalStatus = () => {
    setState({ ...state, isModalVisible: !isModalVisible });
  };

  const goPrevWeek = () => {
    setState({
      ...state,
      weekStartDate: new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)),
    });
  };

  const goNextWeek = () => {
    setState({
      ...state,
      weekStartDate: new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)),
    });
  };

  const goToday = () => {
    setState({ ...state, weekStartDate: new Date() });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    // fetchEventsList().then(eventsList => setState({ ...state, eventsList }));
    fetchEventsList().then(eventsList => setState({ ...state, eventsList, isModalVisible: false }));
  };

  const handleCreateEvent = newEvent => {
    const { title, date, startTime, endTime, description } = newEvent;
    const createdEvent = {
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };

    createEvent(createdEvent).then(() => fetchEvents());
    // createEvent(createdEvent).then(() =>
    //   fetchEventsList().then(eventsList =>
    //     setState({ ...state, eventsList, isModalVisible: !isModalVisible }),
    //   ),
    // );
  };

  const handleDelete = eventId => {
    deleteEvent(eventId).then(() => fetchEvents());
  };

  console.log(1);

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
      {isModalVisible && <Modal closeModal={toggleModalStatus} onCreateEvent={handleCreateEvent} />}
    </>
  );
};

export default App;
