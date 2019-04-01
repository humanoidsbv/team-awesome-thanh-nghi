import React from 'react';
import PropTypes from 'prop-types';

import './time-entries.scss';
import TimeEntry from '../time-entry';
import SelectElement from '../../shared/components/SelectElement';

import { dateToLocaleString, timeToLocaleString } from '../../shared/services/converter-time';

class TimeEntries extends React.Component {
  handleChangeFilter = ({ target }) => {
    const { filterTimeEntries } = this.props;
    filterTimeEntries(target.value);
  }

  render() {
    const { onDelete, timeEntries, clients } = this.props;

    return (
      <React.Fragment>
        <div className="time-entries">
          <h2 className="time-entries__title">
            Time Entries
          </h2>
          <SelectElement
            onChange={this.handleChangeFilter}
            defaultValue={{ label: 'Alle clients', value: '' }}
            options={clients}
          />
        </div>
        {timeEntries.map(({
          clientName, endTime, id, startTime
        }, i) => {
          const localizeDate = dateToLocaleString(startTime);
          const localizeEndTime = timeToLocaleString(endTime);
          const localizeStartTime = timeToLocaleString(startTime);

          return (
            <React.Fragment key={id}>
              {(i === 0 || localizeDate !== dateToLocaleString(timeEntries[i - 1].startTime))
                && <h2 className="entry-date">{localizeDate}</h2>
              }
              <TimeEntry
                client={clientName}
                endTime={localizeEndTime}
                id={id}
                onDelete={onDelete}
                startTime={localizeStartTime}
              />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

TimeEntries.propTypes = {
  filterTimeEntries: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  timeEntries: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TimeEntries;
