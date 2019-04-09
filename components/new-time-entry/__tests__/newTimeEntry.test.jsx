import React from 'react';
import { shallow } from 'enzyme';

import NewTimeEntry from '../NewTimeEntry.tsx';

describe('<NewTimeEntry /> shallow rendering', () => {
  test('loads the default state in NewTimeEntry', () => {
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
