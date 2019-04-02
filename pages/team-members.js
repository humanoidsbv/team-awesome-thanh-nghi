import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import Main from '../components/main';
import TeamMembers from '../components/team-members';

const TeamMembersPage = () => (
  <React.Fragment>
    <Head>
      <title>Team Awesome!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <PageHeader
      title="Team Members"
      subtitle="5 Members"
    />
    <Main>
      <TeamMembers />
    </Main>
  </React.Fragment>
);

export default TeamMembersPage;
