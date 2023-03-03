import React from 'react';
import './calendar.scss';
import { getMonth } from '../../static/util';
import CalendarHeader from '../../components/CalendarHeader/CalendarHeader';
import CalendarMonth from '../../components/CalendarMonth/CalendarMonth';
import CalendarSidebar from '../../components/CalendarSidebar/CalendarSidebar';
import CalendarGlobalContext from '../../context/CalendarGlobalContext';
import EventModal from '../../components/EventModal/EventModal';

const Calendar = () => {
  const { monthIndex, showEventModal } = React.useContext(
    CalendarGlobalContext
  );
  const [currentMonth, setCurrentMonth] = React.useState(getMonth());
  React.useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="calendar">
        <CalendarHeader />
        <div className="calendarWrap">
          <CalendarSidebar />
          <CalendarMonth month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calendar;
