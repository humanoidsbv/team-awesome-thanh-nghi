import React from 'react';
import Head from 'next/head';

import Clients from '../components/clients';
import Header from '../components/header';

const ClientsPage = () => (
  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Clients />
  </React.Fragment>
);

export default ClientsPage;
