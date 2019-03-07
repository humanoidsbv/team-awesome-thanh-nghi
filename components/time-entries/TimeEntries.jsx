import React from 'react';

import './time-entries.scss';

const TimeEntries = () => (
  <React.Fragment>
    <div className="time-entries">
      <button
        className="new-entry-button"
        type="button"
      >
        <img
          alt="Plus icon"
          className="new-entry-button__icon"
          src="/static/images/icon-plus.svg"
        />
        New time entry
      </button>
      <div className="entry-content">
        <h2 className="entry-content__date">29-07-2018</h2>
        <div className="entry-content__activity">
          <div className="entry-content__client">Port of Rotterdam</div>
          <div className="entry-content__time">09:00 - 17:00</div>
        </div>
      </div>
      <div className="entry-content">
        <h2 className="entry-content__date">31-07-2018</h2>
        <div className="entry-content__activity">
          <div className="entry-content__client">ING</div>
          <div className="entry-content__time">09:00 - 12:00</div>
        </div>
        <div className="entry-content__activity">
          <div className="entry-content__client">Port of Rotterdam</div>
          <div className="entry-content__time">12:00 - 17:00</div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default TimeEntries;
