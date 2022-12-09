import React, { useState } from 'react';
import './common.scss';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import events from './gateway/events';
import { getWeekStartDate, generateWeekRange, months } from '../src/utils/dateUtils.js';
import Modal from './components/modal/Modal.jsx';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const weekStartMonth = months[weekStartDate.getMonth()];
  const weekEndMonth = months[weekDates[6].getMonth()];

  const currentMonth =
    weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;

  const [isModalVisible, setVisibility] = useState(false);

  const [eventsList, setEvents] = useState(events);

  const handleCreateEvent = newEvent => {
    const { title, date, startTime, endTime, description } = newEvent;
    const event = {
      id: Math.random(),
      title,
      description,
      dateFrom: new Date(`${date}T${startTime}`),
      dateTo: new Date(`${date}T${endTime}`),
    };

    const updatedEventsList = eventsList.concat(event);

    setEvents(updatedEventsList);
  };

  const handleDelete = id => {
    const updatedEvents = eventsList.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <>
      <Header
        month={currentMonth}
        goPrevWeek={() =>
          setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)))
        }
        goNextWeek={() =>
          setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)))
        }
        goToday={() => setWeekStartDate(new Date())}
        createEvent={() => setVisibility(true)}
      />
      <Calendar weekDates={weekDates} events={eventsList} onDelete={handleDelete} />
      {isModalVisible && (
        <Modal closeModal={() => setVisibility(false)} onCreateEvent={handleCreateEvent} />
      )}
    </>
  );
};

export default App;
