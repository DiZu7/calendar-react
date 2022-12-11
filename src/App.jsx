import React, { useEffect, useState } from 'react';
import './common.scss';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import events from './gateway/events';
import { getWeekStartDate, generateWeekRange, months } from '../src/utils/dateUtils.js';
import Modal from './components/modal/Modal.jsx';

const baseUrl = 'https://63949f6986829c49e8225bf8.mockapi.io/api/v1/events';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const weekStartMonth = months[weekStartDate.getMonth()];
  const weekEndMonth = months[weekDates[6].getMonth()];

  const currentMonth =
    weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;

  const [isModalVisible, setVisibility] = useState(false);

  const [eventsList, setEvents] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(newEventsList =>
        newEventsList.map(event => ({
          ...event,
          dateFrom: new Date(event.dateFrom),
          dateTo: new Date(event.dateTo),
        })),
      )
      .then(eventsList => setEvents(eventsList));
  }, []);

  const onCreateEvent = newEvent => {
    const { title, date, startTime, endTime, description } = newEvent;
    const createdEvent = {
      title,
      description,
      dateFrom: new Date(`${date}T${startTime}`),
      dateTo: new Date(`${date}T${endTime}`),
    };

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createdEvent),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create new event');
      }

      fetch(baseUrl)
        .then(res => res.json())
        .then(newEventsList =>
          newEventsList.map(event => ({
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
          })),
        )
        .then(eventsList => setEvents(eventsList));
    });
  };

  const handleDelete = eventId => {
    // const updatedEvents = eventsList.filter(event => event.id !== eventId);

    fetch(`${baseUrl}/${eventId}`, {
      method: 'DELETE',
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create new event');
      }

      fetch(baseUrl)
        .then(res => res.json())
        .then(newEventsList =>
          newEventsList.map(event => ({
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
          })),
        )
        .then(eventsList => setEvents(eventsList));
    });
    // setEvents(updatedEvents);
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
        <Modal closeModal={() => setVisibility(false)} onCreateEvent={onCreateEvent} />
      )}
    </>
  );
};

export default App;
