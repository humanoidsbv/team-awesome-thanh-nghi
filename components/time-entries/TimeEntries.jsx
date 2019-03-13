import React from 'react';

import './time-entries.scss';
import TimeEntry from '../time-entry';

const timeEntryData = [
  {
    id: '1',
    date: '29-07-2018',
    client: 'Port of Rotterdam',
    startTime: '09:00',
    endTime: '17:00'
  },
  {
    id: '2',
    date: '30-07-2018',
    client: 'Hike One',
    startTime: '10:00',
    endTime: '18:00'
  },
  {
    id: '3',
    date: '31-07-2018',
    client: 'ING Bank',
    startTime: '09:00',
    endTime: '18:00'
  }
];

class TimeEntries extends React.Component {
  state = { entries: timeEntryData };

  render() {
    const { entries } = this.state;
    return (
      <React.Fragment>
        {entries.map(({
          client, date, startTime, endTime, id
        }) => (
          <TimeEntry
            key={id}
            date={date}
            client={client}
            startTime={startTime}
            endTime={endTime}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default TimeEntries;
