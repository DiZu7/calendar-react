import React, { Component, useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import {
  getWeekStartDate,
  generateWeekRange,
  months,
} from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const weekStartMonth = months[weekStartDate.getMonth()];
  const weekEndMonth = months[weekDates[6].getMonth()];

  const curentMonth =
    weekStartMonth === weekEndMonth
      ? weekStartMonth
      : `${weekStartMonth} - ${weekEndMonth}`;

  return (
    <>
      <Header
        month={curentMonth}
        goPrevWeek={() =>
          setWeekStartDate(
            new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
          )
        }
        goNextWeek={() =>
          setWeekStartDate(
            new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
          )
        }
        goToday={() => setWeekStartDate(new Date())}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
