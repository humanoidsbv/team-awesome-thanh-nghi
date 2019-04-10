import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TimeEntry from '../TimeEntry.tsx';

const deleteTimeEntry = () => {};

const timeEntries = {
  client: '3',
  endTime: '2019-03-20T16:00:00.000Z',
  id: '123',
  startTime: '2019-03-20T08:00:00.000Z'
};

it('renders a snapshot', () => {
  const wrapper = shallow(
    <TimeEntry
      client={timeEntries.clientName}
      endTime={timeEntries.endTime}
      id={timeEntries.id}
      onDelete={deleteTimeEntry}
      startTime={timeEntries.startTime}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
