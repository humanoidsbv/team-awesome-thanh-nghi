import React from 'react';

import './time-sheets-topbar.scss';

const TimeSheetsTopbar = () => (
  <div className="time-sheets-bar">
    <h2 className="time-sheets-bar__title">Timesheets</h2>
    <div className="time-sheets-bar__divider">|</div>
    <p className="time-sheets-bar__number">12 Entries</p>
    <input
      className="time-sheets-bar__search"
      placeholder="Search"
      type="text"
    />
  </div>
);

export default TimeSheetsTopbar;
