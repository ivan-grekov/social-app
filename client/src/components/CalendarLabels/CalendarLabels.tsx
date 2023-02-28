import './calendarLabels.scss';
import React from 'react';
import CalendarGlobalContext from '../../context/CalendarGlobalContext';

const CalendarLabels = () => {
  const { labels, updateLabel } = React.useContext(CalendarGlobalContext);
  return (
    <React.Fragment>
      <p className="labelTitle">Label</p>
      <div className="labels">
        {labels.map(({ label: lbl, checked }, idx) => (
          <label key={idx} className="label-item">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => updateLabel({ label: lbl, checked: !checked })}
              className={`label-input labelColor-${lbl}`}
            />
            <span>{lbl}</span>
          </label>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CalendarLabels;
