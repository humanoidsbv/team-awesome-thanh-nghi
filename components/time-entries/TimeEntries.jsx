import React from 'react';
import PropTypes from 'prop-types';

import './time-entries.scss';
import TimeEntry from '../time-entry';

import { dateToLocaleString, timeToLocaleString } from '../../shared/services/converter-time';

const TimeEntries = ({ timeEntries }) => (
  <React.Fragment>
    {timeEntries.map(({
      client, endTime, id, startTime
    }, i) => {
      const localizeDate = dateToLocaleString(startTime);
      const localizeEndTime = timeToLocaleString(endTime);
      const localizeStartTime = timeToLocaleString(startTime);

      return (
        <React.Fragment key={id + i}>
          {(i === 0 || localizeDate !== dateToLocaleString(timeEntries[i - 1].startTime))
            && <h2 className="entry-date">{localizeDate}</h2>
          }
          <TimeEntry
            client={client}
            endTime={localizeEndTime}
            startTime={localizeStartTime}
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
