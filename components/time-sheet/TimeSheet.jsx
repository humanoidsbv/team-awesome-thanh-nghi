import React from 'react';
import PropTypes from 'prop-types';

import './time-sheet.scss';

const TimeSheet = ({ date, client, startTime, endTime }) => (
  <React.Fragment>
    <ul className="entry-content">
      <h2 className="entry-content__date">{date}</h2>
      <li className="entry-content__activity">
        <div className="entry-content__client">{client}</div>
        <div className="entry-content__time">
          {`${startTime} - ${endTime}`}
        </div>
      </li>
      <li className="entry-content__activity">
        <div className="entry-content__client">{client}</div>
        <div className="entry-content__time">
          {`${startTime} - ${endTime}`}
        </div>
      </li>
      <li className="entry-content__activity">
        <div className="entry-content__client">{client}</div>
        <div className="entry-content__time">
          {`${startTime} - ${endTime}`}
        </div>
      </li>
    </ul>
  </React.Fragment>
);

TimeSheet.propTypes = {
  date: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired
};

export default TimeSheet;
