import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TimeEntries from '../TimeEntries.tsx';

const deleteTimeEntry = () => {};
const filterTimeEntries = () => {};

const timeEntriesSelector = [
  {
    client: '3',
    endTime: '2019-03-20T16:00:00.000Z',
    id: '123',
    startTime: '2019-03-20T08:00:00.000Z'
  },
  {
    client: '1',
    endTime: '2019-03-22T16:00:00.000Z',
    id: '124',
    startTime: '2019-03-20T08:00:00.000Z'
  },
  {
    client: '2',
    endTime: '2019-03-25T16:00:00.000Z',
    id: '125',
    startTime: '2019-03-20T08:00:00.000Z'
  }
];

const clientNameIdSelector = [
  {
    client: 'Port of Rotterdam',
    id: '1'
  },
  {
    client: 'Port of Rotterdam',
    id: '2'
  },
  {
    client: 'Humanoids',
    id: '3'
  }
];

it('renders a snapshot', () => {
  const wrapper = shallow(
    <TimeEntries
      clients={clientNameIdSelector}
      filterTimeEntries={filterTimeEntries}
      onDelete={deleteTimeEntry}
      timeEntries={timeEntriesSelector}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
