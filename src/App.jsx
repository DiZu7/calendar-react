import React, { Component, useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment/moment.js';
import events from './gateway/events';

import { getWeekStartDate, generateWeekRange, months } from '../src/utils/dateUtils.js';

import './common.scss';
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

  const onCreateEvent = newEvent => {
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
      <Calendar weekDates={weekDates} events={eventsList} />
      {isModalVisible && (
        <Modal closeModal={() => setVisibility(false)} onCreateEvent={onCreateEvent} />
      )}
    </>
  );
};

export default App;
