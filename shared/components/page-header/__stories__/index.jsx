import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PageHeader from '../PageHeader';

storiesOf('PageHeader', module)
  .addDecorator(withInfo)
  .add(
    'Time Entries',
    () => (
      <PageHeader
        title="Timesheets"
        subtitle="0 Time Entries"
      />
    ),
    { info: 'This story displays the Pageheader generic component for Timesheets.' }
  )
  .add(
    'Clients',
    () => (
      <PageHeader
        title="Clients"
        subtitle="1 Client"
      />
    ),
    { info: 'This story displays the Pageheader generic component for Clients.' }
  )
  .add(
    'New Client',
    () => (
      <PageHeader
        title="Clients"
        subtitle="2 Clients"
      />
    ),
    { info: 'This story displays the Pageheader generic component when adding a new client.' }
  )
  .add(
    'Team Members',
    () => (
      <PageHeader
        title="Team Members"
        subtitle="3 Members"
      />
    ),
    { info: 'This story displays the Pageheader generic component for Team Members.' }
  )
  .add(
    'New Team Member',
    () => (
      <PageHeader
        title="Team Members"
        subtitle="4 Members"
      />
    ),
    { info: 'This story displays the Pageheader generic component when adding a new team member.' }
  );
