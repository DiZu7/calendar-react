import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ goNextWeek, goPrevWeek, goToday, month, openModal, setDate }) => {
  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => {
          openModal();
          setDate(new Date());
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
        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  goNextWeek: PropTypes.func.isRequired,
  goPrevWeek: PropTypes.func.isRequired,
  goToday: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default Header;
