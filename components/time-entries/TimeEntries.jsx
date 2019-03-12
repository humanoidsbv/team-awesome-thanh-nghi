import React from 'react';

import './time-entries.scss';
import TimeEntry from '../time-entry';

const TimeEntries = () => (
  <React.Fragment>
    <TimeEntry date="29-07-2018" client="Port of Rotterdam" startTime="09:00" endTime="17:00" />
    <TimeEntry date="30-07-2018" client="Hike One" startTime="10:00" endTime="18:00" />
  </React.Fragment>
);

export default TimeEntries;
