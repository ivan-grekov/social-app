import React from 'react';
import { Dayjs } from 'dayjs';
import { IEvent, ILabel } from '../static/types';

const CalendarGlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: number): void => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: number): void => {},
  daySelected: null,
  setDaySelected: (day: Dayjs) => {},
  showEventModal: false,
  setShowEventModal: (state: boolean) => {},
  // @ts-ignore
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [] as IEvent[],
  selectedEvent: null,
  setSelectedEvent: (event: IEvent) => {},
  setLabels: () => {},
  labels: [],
  updateLabel: (label: ILabel) => {},
  filteredEvents: [],
});

export default CalendarGlobalContext;
