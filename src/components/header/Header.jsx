import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import moment from 'moment';
import { getCurrentMonth } from '../../utils/dateUtils';

const Header = ({ setModalActive, setDate, weekStartDate, setWeekStartDate }) => {
  const goPrevWeek = () => {
    setWeekStartDate(moment(weekStartDate).subtract(7, 'day'));
  };

  const goNextWeek = () => {
    setWeekStartDate(moment(weekStartDate).add(7, 'day'));
  };

  const goToday = () => {
    setWeekStartDate(moment().format());
  };

  const currentMonth = getCurrentMonth(weekStartDate);

  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => {
          setModalActive(true);
          setDate(moment().format());
        }}
      >
        <i className="fas fa-plus create-event-btn__icon"></i>
        Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={goToday}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={goPrevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={goNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{currentMonth}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  setModalActive: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default Header;
