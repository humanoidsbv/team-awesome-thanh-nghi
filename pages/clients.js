import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import ClientEntries from '../components/client-entries';

const Clients = () => (

  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <PageHeader />
    <Main>
      <ClientEntries />
    </Main>
  </React.Fragment>
);

export default Clients;
