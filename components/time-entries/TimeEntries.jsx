import React from 'react';
import PropTypes from 'prop-types';

import './time-entries.scss';
import TimeEntry from '../time-entry';

// TODO: put this logic in a service -> generic and reusable
function dateToLocaleString(date) {
  const newDate = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const localeDate = newDate.toLocaleString('nl-NL', options);
  return localeDate;
}

const TimeEntries = ({ timeEntries }) => (
  <React.Fragment>
    {timeEntries.map(({
      client, date, endTime, id, startTime
    }, i) => {
      const localizeDate = dateToLocaleString(date);
      return (
        <React.Fragment>
          {(i === 0 || date !== timeEntries[i - 1].date)
            && <h2 className="entry-date">{localizeDate}</h2>
          }
          <TimeEntry
            client={client}
            endTime={endTime}
            key={id}
            startTime={startTime}
          />
        </React.Fragment>
      );
    })}
  </React.Fragment>
);

TimeEntries.propTypes = {
  timeEntries: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TimeEntries;
