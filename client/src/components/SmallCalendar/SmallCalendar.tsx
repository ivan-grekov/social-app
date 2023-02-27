import './smallCalendar.scss';
import dayjs from 'dayjs';
import React from 'react';
import CalendarGlobalContext from '../../context/CalendarGlobalContext';
import { getMonth } from '../../static/util';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Dayjs } from 'dayjs';

const SmallCalendar = () => {
  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    React.useContext(CalendarGlobalContext);

  const [currentMonthIdx, setCurrentMonthIdx] = React.useState(dayjs().month());

  const [currentMonth, setCurrentMonth] = React.useState(getMonth());

  React.useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  React.useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day: Dayjs) {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    // @ts-ignore
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return 'btn-currentDay_active';
    } else if (currDay === slcDay) {
      return 'btn-currentDay_clicked';
    } else {
      return '';
    }
  }

  return (
    <div className="calendar-mini-wrap">
      <header className="header-mini">
        <p className="currentMonthText">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>
        <button className="btn-calendar btn-left" onClick={handlePrevMonth}>
          <ChevronLeftIcon />
        </button>
        <button className="btn-calendar btn-right" onClick={handleNextMonth}>
          <ChevronRightIcon />
        </button>
      </header>
      <div className="calendar-mini">
        {currentMonth[0].map((day, i) => (
          <span className="nameOfDay" key={i}>
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                key={idx}
                className={`btn-currentDay ${getDayClass(day)}`}
              >
                <span className="currentDayText">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
