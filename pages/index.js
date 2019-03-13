import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import NewTimeEntry from '../components/new-time-entry';
import TimeEntries from '../components/time-entries';

const timeEntryData = [
  {
    client: 'Port of Rotterdam',
    date: '29-07-2018',
    endTime: '17:00',
    id: '1',
    startTime: '09:00'
  },
  {
    client: 'Hike One',
    date: '30-07-2018',
    endTime: '18:00',
    id: '2',
    startTime: '10:00'
  },
  {
    client: 'ING Bank',
    date: '31-07-2018',
    endTime: '18:00',
    id: '3',
    startTime: '09:00'
  }
];

class App extends React.Component {
  state = { timeEntries: timeEntryData };

  addNewEntry = (newTimeEntry) => {
    this.setState(({ timeEntries }) => ({
      timeEntries: [
        newTimeEntry,
        ...timeEntries
      ]
    }));
  }

  render() {
    const { timeEntries } = this.state;
    return (
      <React.Fragment>
        <Head>
          <title>Team Awesome!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <PageHeader />
        <Main>
          <NewTimeEntry onSubmit={this.addNewEntry} />
          <TimeEntries timeEntries={timeEntries} />
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
