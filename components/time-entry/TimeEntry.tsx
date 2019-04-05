import React from 'react';

import './time-entry.scss';
import { TimeEntriesState } from 'ducks/time-entries';

interface TimeEntryProps {
  client: string;
  endTime: string;
  id: string;
  onDelete: Function;
  startTime: string;
}

class TimeEntry extends React.Component<TimeEntryProps, TimeEntriesState> {

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

export default TimeEntry;
