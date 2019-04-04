import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import NewTeamMember from '../components/new-team-member';

const NewTeamMemberPage = () => (
  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <NewTeamMember />
  </React.Fragment>
);

export default NewTeamMemberPage;
