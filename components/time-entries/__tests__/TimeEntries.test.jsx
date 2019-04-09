import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TimeEntries from '../TimeEntries.tsx';

it('renders a snapshot', () => {
  const wrapper = shallow(<TimeEntries />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
