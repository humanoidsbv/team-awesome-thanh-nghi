// import React from 'react';

// import { storiesOf } from '@storybook/react';

// import Select from '../Select';

// storiesOf('Select', module)
//   .add('form-new-time-entry', () => (
//     <Select
//       className="select-element__form"
//       defaultValue={{ label: 'Select a client', value: '' }}
//       id="client"
//       name="client"
//       onBlur={this.handleBlur}
//       onChange={this.handleChange}
//       options={clients}
//       required
//     />
//   ))
//   .add('form-new-team-member', () => (
//     <Select
//       className="select-element__form-new-team-member"
//       defaultValue={{ label: 'Select a client', value: '' }}
//       id="currentClient"
//       name="currentClient"
//       onBlur={this.handleBlur}
//       onChange={this.handleChange}
//       options={clients}
//       required
//     />
//   ))
//   .add('filter', () => (
//     <Select
//       className="select-element__filter"
//       defaultValue={{ label: 'All clients', value: '' }}
//       onChange={this.handleChange}
//       options={clients}
//     />
//   ))
//   .add('sort', () => (
//     <Select
//       className="select-element__sort"
//       defaultValue={{ label: 'Sort by:', value: '' }}
//       onChange={this.handleChange}
//       options={[
//         {
//           label: 'First name A-Z',
//           value: 'firstName-ascending'
//         },
//         {
//           label: 'First name Z-A',
//           value: 'firstName-descending'
//         },
//         {
//           label: 'Last name A-Z',
//           value: 'lastName-ascending'
//         },
//         {
//           label: 'Last name Z-A',
//           value: 'lastName-descending'
//         },
//         {
//           label: 'Employee Number 0-9',
//           value: 'memberNumber-ascending'
//         },
//         {
//           label: 'Employee Number 9-0',
//           value: 'memberNumer-descending'
//         },
//         {
//           label: 'Current Employer A-Z',
//           value: 'clientName-ascending'
//         },
//         {
//           label: 'Current Employer Z-A',
//           value: 'clientName-descending'
//         },
//         {
//           label: 'Starting Date Old-New',
//           value: 'startDate-ascending'
//         },
//         {
//           label: 'Starting Date New-Old',
//           value: 'startDate-descending'
//         }
//       ]}
//       required
//     />
//   ));
