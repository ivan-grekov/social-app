import './eventButton.scss';
import React from 'react';
import plusIcon from '../../assets/images/plus-calendar.svg';
import CalendarGlobalContext from '../../context/CalendarGlobalContext';

const EventButton = () => {
  const { setShowEventModal } = React.useContext(CalendarGlobalContext);
  return (
    <button onClick={() => setShowEventModal(true)} className="btn-event">
      <img src={plusIcon} alt="plus icon" />
      <span>Create</span>
    </button>
  );
};

export default EventButton;
