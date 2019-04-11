import React from 'react';

import { storiesOf } from '@storybook/react';

// import { filterTimeEntries } from '../../../../ducks/time-entries.ts';
import sortClients from '../../../../ducks/clients';
import Select from '../Select';

storiesOf('Select', module)
  .add('form', () => (
    <Select
      className="select-element__form"
      defaultValue={{ label: 'Select a client', value: '' }}
      id="client"
      name="client"
      // onChange={this.handleChange}
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
  ))
  .add('filter', () => (
    <Select
      className="select-element__filter"
      defaultValue={{ label: 'All clients', value: '' }}
      // onChange={this.handleChange}
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
  ))
  .add('sort', () => (
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
  ));
