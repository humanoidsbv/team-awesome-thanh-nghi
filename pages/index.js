import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import NewTimeEntry from '../components/new-time-entry';
import TimeEntries from '../components/time-entries';

const Index = () => (

  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <PageHeader
      title="Timesheets"
      subtitle="5 Entries"
    />
    <Main>
      <NewTimeEntry />
      <TimeEntries />
    </Main>
  </React.Fragment>
);

export default Index;
