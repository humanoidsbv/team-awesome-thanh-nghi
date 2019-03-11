import React from 'react';

import './time-sheets.scss';
import NewEntryButton from '../new-entry-button/NewEntryButton';
import TimeSheet from '../time-sheet/TimeSheet';
import TimeSheetsTopbar from '../time-sheets-topbar/TimeSheetsTopbar';
import NewTimeEntry from '../new-time-entry/NewTimeEntry';

// const timeEntries = [
//   {
//     date: '29-07-2018',
//     client: 'Port of Rotterdam',
//     startTime: '09:00',
//     endTime: '17:00'
//   },
//   {
//     date: '30-07-2018',
//     client: 'ING Bank',
//     startTime: '10:00',
//     endTime: '18:00'
//   }
// ];

const TimeSheets = () => (
  <div className="timesheets-container">
    <NewEntryButton />
    <TimeSheetsTopbar />
    <NewTimeEntry />
    {/* {TimeEntries.map((timeEntry) => ( */}
      <TimeSheet date="29-07-2018" client="Port of Rotterdam" startTime="09:00" endTime="17:00"
        // date={timeEntry.date}
        // client={timeEntry.client}
        // startTime={timeEntry.startTime}
        // endTime={timeEntry.endTime}
      />
      <TimeSheet date="30-07-2018" client="Hike One" startTime="10:00" endTime="18:00" />
    {/* ))} */}
  </div>
);

export default TimeSheets;
