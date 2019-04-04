import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import NewClient from '../components/new-client';

const NewClientPage = () => (
  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <NewClient />
  </React.Fragment>
);

export default NewClientPage;
