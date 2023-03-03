import React, { useState } from 'react';
import './styles/common.scss';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment/moment';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(moment().format());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const [isModalActive, setModalActive] = useState(false);

  const [currentDate, setDate] = useState(moment().format());

  return (
    <>
      <Header
        setModalActive={setModalActive}
        setDate={setDate}
        weekStartDate={weekStartDate}
        setWeekStartDate={setWeekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        setModalActive={setModalActive}
        isModalActive={isModalActive}
        currentDate={currentDate}
        setDate={setDate}
      />
    </>
  );
};

export default App;
