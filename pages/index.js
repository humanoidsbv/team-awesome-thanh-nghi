import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import NewTimeEntry from '../components/new-time-entry';
import TimeEntries from '../components/time-entries';
import './style.scss';

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

class App extends React.Component {
  state = { timeEntries: timeEntryData };

  addNewEntry = (newEntry) => {
    this.setState(({ timeEntries }) => ({
      timeEntries: [
        newEntry,
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
