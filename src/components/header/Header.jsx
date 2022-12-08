import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';

import './header.scss';

const Header = ({ goNextWeek, goPrevWeek, goToday, month, createEvent }) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={createEvent}>
        <i className="fas fa-plus create-event-btn__icon"></i>
        Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={goToday}>
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={goPrevWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={goNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

export default Header;
