import React from 'react';
import CalendarGlobalContext from './CalendarGlobalContext';
import dayjs, { Dayjs } from 'dayjs';
import { IEvent, ILabel } from '../static/types';

// @ts-ignore
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      // @ts-ignore
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      // @ts-ignore
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

const CalendarContextWrapper = ({ children }: { children: JSX.Element }) => {
  const [monthIndex, setMonthIndex] = React.useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = React.useState(null);
  const [daySelected, setDaySelected] = React.useState<Dayjs>(dayjs());
  const [showEventModal, setShowEventModal] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [labels, setLabels] = React.useState([]);
  const [savedEvents, dispatchCalEvent] = React.useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const filteredEvents = React.useMemo(() => {
    return savedEvents.filter((evt: IEvent) =>
      labels
        .filter((lbl: ILabel) => lbl.checked)
        .map((lbl: ILabel) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  React.useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  React.useEffect(() => {
    // @ts-ignore
    setLabels((prevLabels) => {
      // @ts-ignore
      return [...new Set(savedEvents.map((evt: IEvent) => evt.label))].map(
        (label) => {
          const currentLabel = prevLabels.find(
            (lbl: ILabel) => lbl.label === label
          );
          return {
            label,
            // @ts-ignore
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  React.useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  React.useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  // @ts-ignore
  function updateLabel(label) {
    setLabels(
      // @ts-ignore
      labels.map((lbl: ILabel) => (lbl.label === label.label ? label : lbl))
    );
  }

  return (
    <CalendarGlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        // @ts-ignore
        smallCalendarMonth,
        // @ts-ignore
        setSmallCalendarMonth,
        // @ts-ignore
        daySelected,
        setDaySelected,
        showEventModal,
        // @ts-ignore
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        // @ts-ignore
        setSelectedEvent,
        savedEvents,
        // @ts-ignore
        setLabels,
        labels,
        // @ts-ignore
        updateLabel,
        filteredEvents,
      }}
    >
      {children}
    </CalendarGlobalContext.Provider>
  );
};

export default CalendarContextWrapper;
