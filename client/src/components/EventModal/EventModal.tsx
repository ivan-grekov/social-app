import './eventModal.scss';
import React from 'react';
import CalendarGlobalContext from '../../context/CalendarGlobalContext';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const labelsClasses = ['gray', 'green', 'blue', 'red', 'purple', 'indigo'];

const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    React.useContext(CalendarGlobalContext);

  const [title, setTitle] = React.useState(
    // @ts-ignore
    selectedEvent ? selectedEvent.title : ''
  );

  const [description, setDescription] = React.useState(
    // @ts-ignore
    selectedEvent ? selectedEvent.description : ''
  );

  const [selectedLabel, setSelectedLabel] = React.useState(
    selectedEvent
      ? // @ts-ignore
        labelsClasses.find((lbl: string) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      // @ts-ignore
      day: daySelected.valueOf(),
      // @ts-ignore
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: 'update', payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: 'push', payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  return (
    <div className="event-modal">
      <form className="event-form">
        <header className="form-header">
          <span className="header-icon">
            <DragHandleOutlinedIcon />
          </span>
          <div>
            {selectedEvent && (
              <span
                className="closeModalBtn"
                onClick={() => {
                  dispatchCalEvent({
                    type: 'delete',
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </span>
            )}
            <button
              className="closeModalBtn"
              onClick={(e) => {
                e.preventDefault();
                setShowEventModal(false);
              }}
            >
              <CloseOutlinedIcon />
            </button>
          </div>
        </header>
        <div className="modalBody-wrapper">
          <div className="eventModal-body">
            <div></div>
            <input
              className="modal-titleInput"
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="closeModalBtn schedule">
              <ScheduleOutlinedIcon />
            </span>
            <p>
              {
                // @ts-ignore
                daySelected?.format('dddd, MMMM DD')
              }
            </p>
            <span className="closeModalBtn schedule">
              <SegmentOutlinedIcon />
            </span>
            <input
              className="modal-titleInput description"
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="closeModalBtn schedule">
              <BookmarkBorderOutlinedIcon />
            </span>
            <div className="label-conatiner">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  className={`label label-${lblClass}`}
                  onClick={() => setSelectedLabel(lblClass)}
                >
                  {selectedLabel === lblClass && (
                    <span>
                      <CheckOutlinedIcon />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="modal-footer">
          <button
            type="submit"
            className="btn-submit-modal"
            onClick={handleSubmit}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
