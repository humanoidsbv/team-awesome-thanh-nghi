import React from 'react';

import './time-entries.scss';

import Container from '../../shared/components/Container';
import NewTimeEntry from '../new-time-entry';
import PageHeader from '../../shared/components/PageHeader';
import Select from '../../shared/components/Select';
import TimeEntry from '../time-entry';
import { TimeEntryModel, TimeEntriesState } from '../../ducks/time-entries';
import { dateToLocaleString, timeToLocaleString } from '../../shared/services/converter-time/converter-time';

interface TimeEntriesProps {
  clients: string[];
  filterTimeEntries: Function;
  onDelete: Function;
  timeEntries: TimeEntryModel[];
}

class TimeEntries extends React.Component<TimeEntriesProps, TimeEntriesState> {
  handleChange = ({ target }) => {
    const { filterTimeEntries } = this.props;
    filterTimeEntries(target.value);
  }

  render() {
    const { clients, onDelete, timeEntries } = this.props;
    const count = timeEntries.length;

    return (
      <React.Fragment>
        <PageHeader
          title="Timesheets"
          subtitle={`${count} ${count === 1 ? 'Entry' : 'Entries'}`}
        />
        <Container>
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
        </Container>
      </React.Fragment>
    );
  }
}

export default TimeEntries;
