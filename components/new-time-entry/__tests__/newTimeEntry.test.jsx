import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewTimeEntry from '../NewTimeEntry.tsx';

configure({ adapter: new Adapter() });

describe('<NewTimeEntry /> shallow rendering', () => {
  it('loads the default state in NewTimeEntry', () => {
    const wrapper = shallow(<NewTimeEntry />);
    expect(wrapper.state()).toEqual({
      isFieldInvalid: {
        activity: false,
        client: false,
        date: false,
        endTime: false,
        startTime: false
      },
      isFormValid: false,
      newTimeEntry: {
        activity: '',
        client: '',
        date: '',
        endTime: '',
        startTime: ''
      },
      newTimeEntryIsVisible: false
    });
  });
});
