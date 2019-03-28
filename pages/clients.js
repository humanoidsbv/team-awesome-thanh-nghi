import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import Clients from '../components/clients';

const ClientsPage = () => (
  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <PageHeader
      title="Clients"
      subtitle="5 Clients"
    />
    <Main>
      <Clients />
    </Main>
  </React.Fragment>
);

export default ClientsPage;
