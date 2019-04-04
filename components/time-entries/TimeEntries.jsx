import React from 'react';
import PropTypes from 'prop-types';

import './time-entries.scss';

import Main from '../../shared/components/Main';
import NewTimeEntry from '../new-time-entry';
import PageHeader from '../../shared/components/PageHeader';
import Select from '../../shared/components/Select';
import TimeEntry from '../time-entry';

import { dateToLocaleString, timeToLocaleString } from '../../shared/services/converter-time';

class TimeEntries extends React.Component {
  handleChange = ({ target }) => {
    const { filterTimeEntries } = this.props;
    filterTimeEntries(target.value);
  }

  render() {
    const { clients, onDelete, timeEntries } = this.props;

    return (
      <React.Fragment>
        <PageHeader
          title="Timesheets"
          subtitle="5 Entries"
        />
        <Main>
          <NewTimeEntry />
          <div className="time-entries">
            <h2 className="time-entries__title">
              Time Entries
            </h2>
            <Select
              className="select-element__filter"
              defaultValue={{ label: 'All clients', value: '' }}
              onChange={this.handleChange}
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
        </Main>
      </React.Fragment>
    );
  }
}

TimeEntries.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterTimeEntries: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  timeEntries: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TimeEntries;
