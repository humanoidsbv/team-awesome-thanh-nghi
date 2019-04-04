import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import TeamMembers from '../components/team-members';

const TeamMembersPage = () => (
  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <TeamMembers />
  </React.Fragment>
);

export default TeamMembersPage;
