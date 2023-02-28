import React from 'react';
import './calendarDay.scss';
import dayjs from 'dayjs';
import CalendarGlobalContext from '../../context/CalendarGlobalContext';
import { IEvent } from '../../static/types';
import { Dayjs } from 'dayjs';

const CalendarDay = ({ day, rowIdx }: { day: Dayjs; rowIdx: number }) => {
  const [dayEvents, setDayEvents] = React.useState<IEvent[]>([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = React.useContext(CalendarGlobalContext);

  React.useEffect(() => {
    const events = filteredEvents.filter(
      (evt: IEvent) =>
        dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'dayTextRound'
      : '';
  };
  return (
    <div className="calendarDay">
      <header className="headerDay">
        {rowIdx === 0 && (
          <p className="dayWeek">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`dateNumber ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div
        className="bodyDay"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt: IEvent, idx: number) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`event event-${evt.label}`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
