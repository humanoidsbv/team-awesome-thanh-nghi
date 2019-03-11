import React from 'react';

import './time-sheets.scss';
import NewEntryButton from '../new-entry-button/NewEntryButton';
import TimeSheet from '../time-sheet/TimeSheet';

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
    {/* {TimeEntries.map((timeEntry) => ( */}
      <TimeSheet date="29-07-2018" client="Port of Rotterdam" startTime="09:00" endTime="17:00"
        // date={timeEntry.date}
        // client={timeEntry.client}
        // startTime={timeEntry.startTime}
        // endTime={timeEntry.endTime}
      />
    {/* ))} */}
  </div>
);

export default TimeSheets;
