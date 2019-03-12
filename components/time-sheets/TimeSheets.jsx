import React from 'react';

import './time-sheets.scss';
import NewEntryButton from '../new-entry-button/NewEntryButton';
import TimeSheet from '../time-sheet/TimeSheet';
import TimeSheetsTopbar from '../time-sheets-topbar';
import NewTimeEntry from '../new-time-entry';

const TimeSheets = () => (
  <React.Fragment>
    <TimeSheetsTopbar />
    <div className="timesheets-container">
      <NewEntryButton />
      <NewTimeEntry />
      <TimeSheet date="29-07-2018" client="Port of Rotterdam" startTime="09:00" endTime="17:00" />
      <TimeSheet date="30-07-2018" client="Hike One" startTime="10:00" endTime="18:00" />
    </div>
  </React.Fragment>
);

export default TimeSheets;
