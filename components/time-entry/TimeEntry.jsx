import React from 'react';
import PropTypes from 'prop-types';

import './time-entry.scss';

const TimeEntry = ({
  client, deleteTimeEntry, id, startTime, endTime
}) => (
  <React.Fragment>
    <ul className="entry-content">
      <li className="entry-content__activity">
        <div className="entry-content__client">{client}</div>
        <button
          onClick={() => deleteTimeEntry(id)}
          className="entry-content__button"
          type="button"
        >
          <img
            alt="Delete icon"
            className="entry-content__button-icon"
            src="/static/images/icon-delete.svg"
          />
          Delete
        </button>
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
