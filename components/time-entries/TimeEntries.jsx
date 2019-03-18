import React from 'react';
import PropTypes from 'prop-types';

import './time-entries.scss';
import TimeEntry from '../time-entry';

import { dateToLocaleString } from '../../shared/services/converter-time';

const TimeEntries = ({ timeEntries }) => (
  <React.Fragment>
    {timeEntries.map(({
      client, date, endTime, id, startTime
    }, i) => {
      const localizeDate = dateToLocaleString(date);
      return (
        <React.Fragment key={id}>
          {(i === 0 || date !== timeEntries[i - 1].date)
            && <h2 className="entry-date">{localizeDate}</h2>
          }
          <TimeEntry
            client={client}
            endTime={endTime}
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
