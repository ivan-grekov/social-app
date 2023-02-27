import React from 'react';
import EventButton from '../EventButton/EventButton';
import './calendarSidebar.scss';
import SmallCalendar from '../SmallCalendar/SmallCalendar';
import CalendarLabels from '../CalendarLabels/CalendarLabels';

const CalendarSidebar = () => {
  return (
    <aside>
      <EventButton />
      <SmallCalendar />
      <CalendarLabels />
    </aside>
  );
};

export default CalendarSidebar;
