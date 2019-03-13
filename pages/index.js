import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import NewTimeEntry from '../components/new-time-entry';
import TimeEntries from '../components/time-entries';
import './style.scss';

class App extends React.Component {
  state = { timeEntries: [] };

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
