import React from 'react';
import './calendarMonth.scss';
import { Dayjs } from 'dayjs';
import CalendarDay from '../CalendarDay/CalendarDay';

const CalendarMonth = ({ month }: { month: Dayjs[][] }) => {
  return (
    <div className="monthContainer">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDay day={day} key={idx} rowIdx={i}></CalendarDay>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CalendarMonth;
