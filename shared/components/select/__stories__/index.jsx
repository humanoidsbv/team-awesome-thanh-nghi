import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Select from '../Select';
import { filterTimeEntries } from '../../../../ducks/time-entries.ts';
import { sortClients } from '../../../../ducks/clients';

storiesOf('Select', module)
  .addDecorator(withInfo)
  .add(
    'Form',
    () => (
      <Select
        className="select-element__form"
        defaultValue={{ label: 'Select a client', value: '' }}
        id="client"
        name="client"
        onChange={action('handleChange')}
        options={[
          {
            label: 'Port of Rotterdam',
            value: '1'
          },
          {
            label: 'Bank of Amsterdam',
            value: '2'
          },
          {
            label: 'Humanoids',
            value: '3'
          }
        ]}
      />
    ),
    { info: 'This story displays the Select generic component for forms. The component contains a select element where the user can select between several options, in this case, the available clients. This generic component is being used in the NewTimeEntry and NewTeamMember components.' }
  )
  .add(
    'Filter',
    () => (
      <Select
        className="select-element__filter"
        defaultValue={{ label: 'All clients', value: '' }}
        onChange={e => filterTimeEntries(e.target.value)}
        options={[
          {
            label: 'Port of Rotterdam',
            value: '1'
          },
          {
            label: 'Bank of Amsterdam',
            value: '2'
          },
          {
            label: 'Humanoids',
            value: '3'
          }
        ]}
      />
    ),
    { info: 'This story displays the Select generic component with a filter function. The component contains a select element where the user can select between several options, in this case, the available clients. This generic component is being used in the TimeEntries component.' }
  )
  .add(
    'Sort',
    () => (
      <Select
        className="select-element__sort"
        defaultValue={{ label: 'Sort by:', value: '' }}
        onChange={e => sortClients(e.target.value)}
        options={[
          {
            label: 'First name A-Z',
            value: 'firstName-ascending'
          },
          {
            label: 'First name Z-A',
            value: 'firstName-descending'
          },
          {
            label: 'Last name A-Z',
            value: 'lastName-ascending'
          },
          {
            label: 'Last name Z-A',
            value: 'lastName-descending'
          },
          {
            label: 'Employee Number 0-9',
            value: 'memberNumber-ascending'
          },
          {
            label: 'Employee Number 9-0',
            value: 'memberNumer-descending'
          },
          {
            label: 'Current Employer A-Z',
            value: 'clientName-ascending'
          },
          {
            label: 'Current Employer Z-A',
            value: 'clientName-descending'
          },
          {
            label: 'Starting Date Old-New',
            value: 'startDate-ascending'
          },
          {
            label: 'Starting Date New-Old',
            value: 'startDate-descending'
          }
        ]}
      />
    ),
    { info: 'This story displays the Select generic component with a sort function. The component contains a select element where the user can select between several categories (ascending and descending). This generic component is being used in the Clients and TeamMembers components.' }
  );
