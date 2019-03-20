import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import NewTimeEntry from '../components/new-time-entry';
import TimeEntries from '../components/time-entries';

import { getTimeEntries, saveTimeEntry, removeTimeEntry } from '../shared/services/time-entries-api';

class Index extends React.Component {
  state = { timeEntries: [] };

  componentDidMount() {
    this.setStateTimeEntries();
  }

  async setStateTimeEntries() {
    const dataTimeEntries = await getTimeEntries();
    this.setState({ timeEntries: dataTimeEntries });
  }


  addNewEntry = async (newTimeEntry) => {
    const response = await saveTimeEntry(newTimeEntry);
    this.setState(({ timeEntries }) => ({
      timeEntries: [
        response,
        ...timeEntries
      ]
    }));
  }

  deleteTimeEntry = async (id) => {
    const prompt = window.confirm('Do you want to delete this entry?');
    if (!prompt) return;
    await removeTimeEntry(id);
    this.setState(({ timeEntries }) => ({
      timeEntries: timeEntries.filter(timeEntry => timeEntry.id !== id)
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
          <NewTimeEntry />
          <TimeEntries />
        </Main>
      </React.Fragment>
    );
  }
}

export default Index;
