import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PageHeader from '../PageHeader';

const count = [].length;

storiesOf('PageHeader', module)
  .addDecorator(withInfo)
  .add(
    'Time Entries',
    () => (
      <PageHeader
        title="Timesheets"
        subtitle={`${count} ${count === 1 ? 'Entry' : 'Entries'}`}
      />
    ),
    { info: 'This story displays the Pageheader generic component for Timesheets.' }
  )
  .add(
    'Clients',
    () => (
      <PageHeader
        title="Clients"
        subtitle={`${count} ${count === 1 ? 'Client' : 'Clients'}`}
      />
    ),
    { info: 'This story displays the Pageheader generic component for Clients.' }
  )
  .add(
    'New Client',
    () => (
      <PageHeader
        title="Clients"
        subtitle={`${count} ${count === 1 ? 'Client' : 'Clients'}`}
      />
    ),
    { info: 'This story displays the Pageheader generic component when adding a new client.' }
  )
  .add(
    'Team Members',
    () => (
      <PageHeader
        title="Team Members"
        subtitle={`${count} ${count === 1 ? 'Member' : 'Members'}`}
      />
    ),
    { info: 'This story displays the Pageheader generic component for Team Members.' }
  )
  .add(
    'New Team Member',
    () => (
      <PageHeader
        title="Team Members"
        subtitle={`${count} ${count === 1 ? 'Member' : 'Members'}`}
      />
    ),
    { info: 'This story displays the Pageheader generic component when adding a new team member.' }
  );
