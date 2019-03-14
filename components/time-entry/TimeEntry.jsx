import React from 'react';
import PropTypes from 'prop-types';

import './time-entry.scss';

const TimeEntry = ({
  client, startTime, endTime
}) => (
  <React.Fragment>
    <ul className="entry-content">
      <li className="entry-content__activity">
        <div className="entry-content__client">{client}</div>
        <div className="entry-content__time">
          {`${startTime} - ${endTime}`}
        </div>
      </li>
    </ul>
  </React.Fragment>
);

TimeEntry.propTypes = {
  client: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired
};

export default TimeEntry;
