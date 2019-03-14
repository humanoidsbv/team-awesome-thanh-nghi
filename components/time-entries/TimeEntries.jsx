import React from 'react';
import PropTypes from 'prop-types';

import './time-entries.scss';
import TimeEntry from '../time-entry';

function dateToLocaleString(date) {
  const newDate = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const localeDate = newDate.toLocaleString('nl-NL', options);
  return localeDate;
}

const TimeEntries = ({ timeEntries }) => (
  <React.Fragment>
    {timeEntries.map(({
      client, date, startTime, endTime, id
    }) => (
      <TimeEntry
        key={id}
        date={dateToLocaleString(date)}
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
