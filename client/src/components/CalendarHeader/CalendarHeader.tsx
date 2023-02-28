import React from 'react';
import './calendarHeader.scss';
import logo from '../../assets/images/logo-calendar.png';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CalendarGlobalContext from '../../context/CalendarGlobalContext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = React.useContext(CalendarGlobalContext);
  const handlePrevMonth = (e: React.MouseEvent) => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = (e: React.MouseEvent) => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };
  return (
    <header className="calendarHeader">
      <img src={logo} alt="calendar" className="calendarLogoImg" />
      <h1 className="logoTitle">Events Calendar</h1>
      <button className="btn-calendar" onClick={handleReset}>
        Today
      </button>
      <button
        className="btn-calendar btn-chevron btn-chevron-left"
        onClick={handlePrevMonth}
      >
        <ChevronLeftOutlinedIcon />
      </button>
      <button
        className="btn-calendar btn-chevron btn-chevron-right"
        onClick={handleNextMonth}
      >
        <ChevronRightOutlinedIcon />
      </button>
      <h2 className="nameMonth">
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
      <Link to={'/'} className="homeIcon">
        <HomeOutlinedIcon fontSize="large" />
      </Link>
    </header>
  );
};

export default CalendarHeader;
