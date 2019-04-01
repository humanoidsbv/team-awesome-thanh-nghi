import React from 'react';
import PropTypes from 'prop-types';

import './time-entry.scss';

class TimeEntry extends React.Component {
  confirmDelete = (id) => {
    const { onDelete } = this.props;
    const askConfirm = window.confirm('Do you want to delete this entry?');
    if (askConfirm) {
      onDelete(id);
    }
  }

  render() {
    const {
      client, endTime, id, startTime
    } = this.props;

    return (
      <React.Fragment>
        <ul className="entry-content">
          <li className="entry-content__activity">
            <div className="entry-content__client">{client}</div>
            <button
              onClick={() => this.confirmDelete(id)}
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
  }
}

TimeEntry.propTypes = {
  client: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired
};

export default TimeEntry;
