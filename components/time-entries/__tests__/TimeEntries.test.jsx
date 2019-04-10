import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TimeEntries from '../TimeEntries.tsx';

const deleteTimeEntry = () => {};
const filterTimeEntries = () => {};
const retrieveTimeEntries = () => {};

const timeEntriesSelector = [
  {
    activity: 'front-end',
    client: '3',
    clientName: 'Humanoids',
    endTime: '2019-03-20T16:00:00.000Z',
    id: '123',
    startTime: '2019-03-20T08:00:00.000Z'
  },
  {
    activity: 'design',
    client: '1',
    clientName: 'Port of Rotterdam',
    endTime: '2019-03-22T16:00:00.000Z',
    id: '124',
    startTime: '2019-03-20T08:00:00.000Z'
  },
  {
    activity: 'lol',
    client: '2',
    clientName: 'Bank of Amsterdam',
    endTime: '2019-03-25T16:00:00.000Z',
    id: '125',
    startTime: '2019-03-20T08:00:00.000Z'
  }
];

const clientNameIdSelector = [
  {
    label: 'Port of Rotterdam',
    value: '1'
  },
  {
    label: 'Port of Rotterdam',
    value: '2'
  },
  {
    label: 'Humanoids',
    value: '3'
  }
];

it('renders a snapshot', () => {
  const wrapper = shallow(
    <TimeEntries
      clients={clientNameIdSelector}
      filterTimeEntries={filterTimeEntries}
      onDelete={deleteTimeEntry}
      onRetrieve={retrieveTimeEntries}
      timeEntries={timeEntriesSelector}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
