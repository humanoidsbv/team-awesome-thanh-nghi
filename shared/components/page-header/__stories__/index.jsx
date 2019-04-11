import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from '../PageHeader';

const count = [].length;

storiesOf('PageHeader', module)
  .add('time-entries', () => (
    <PageHeader
      title="Timesheets"
      subtitle={`${count} ${count === 1 ? 'Entry' : 'Entries'}`}
    />
  ))
  .add('clients', () => (
    <PageHeader
      title="Clients"
      subtitle={`${count} ${count === 1 ? 'Client' : 'Clients'}`}
    />
  ))
  .add('new-client', () => (
    <PageHeader
      title="Clients"
      subtitle={`${count} ${count === 1 ? 'Client' : 'Clients'}`}
    />
  ))
  .add('team-members', () => (
    <PageHeader
      title="Team Members"
      subtitle={`${count} ${count === 1 ? 'Member' : 'Members'}`}
    />
  ))
  .add('new-team-member', () => (
    <PageHeader
      title="Team Members"
      subtitle={`${count} ${count === 1 ? 'Member' : 'Members'}`}
    />
  ));
