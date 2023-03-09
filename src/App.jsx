import React, { useState } from 'react';
import './styles/common.scss';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment/moment';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(moment());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const [isModalActive, setModalActive] = useState(false);

  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <>
      <Header
        setModalActive={setModalActive}
        setSelectedDate={setSelectedDate}
        weekStartDate={weekStartDate}
        setWeekStartDate={setWeekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        setModalActive={setModalActive}
        isModalActive={isModalActive}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
};

export default App;
