import React from 'react';
import PropTypes from 'prop-types';

import './time-entries.scss';
import TimeEntry from '../time-entry';

const TimeEntries = ({ timeEntries }) => (
  <React.Fragment>
    {timeEntries.map(({
      client, date, startTime, endTime, id
    }) => (
      <TimeEntry
        key={id}
        date={date}
        client={client}
        startTime={startTime}
        endTime={endTime}
      />
    ))}
  </React.Fragment>
);

TimeEntries.propTypes = {
  timeEntries: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TimeEntries;
