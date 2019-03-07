import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import './style.scss';
import './fonts.scss';

export default () => (
  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
  </React.Fragment>

);
