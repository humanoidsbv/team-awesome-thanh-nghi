import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import NewTimeEntry from '../components/new-time-entry';
import TimeEntries from '../components/time-entries';

import { getTimeEntries, saveTimeEntry, removeTimeEntry } from '../shared/services/time-entries-api';

class App extends React.Component {
  state = { timeEntries: [] };

  componentDidMount() {
    this.setStateTimeEntries();
  }

  async setStateTimeEntries() {
    const dataTimeEntries = await getTimeEntries();
    this.setState({ timeEntries: dataTimeEntries });
  }

  addNewEntry = (newTimeEntry) => {
    saveTimeEntry(newTimeEntry);
    this.setState(({ timeEntries }) => ({
      timeEntries: [
        newTimeEntry,
        ...timeEntries
      ]
    }));
  }

  deleteTimeEntry = (id) => {
    this.setState(({ timeEntries }) => ({
      timeEntries: timeEntries.filter(timeEntry => timeEntry.id !== id)
    }));
    removeTimeEntry(id);
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
          <TimeEntries
            deleteTimeEntry={this.deleteTimeEntry}
            timeEntries={timeEntries}
          />
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
