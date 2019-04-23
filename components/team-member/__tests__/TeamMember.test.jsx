import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TeamMember from '../TeamMember.tsx';

const teamMember = {
  clientName: 'Humanoids',
  currentClient: '3',
  firstName: 'Pietje',
  lastName: 'Puk',
  description: 'Front End Developer',
  memberNumber: 'H-007',
  address: 'Goudseweg 12',
  zipcode: '6857SK',
  city: 'Verweggiestad',
  emailAddress: 'pietje.puk@humanoids.nl',
  linkedIn: 'linkedin.com/pietje-puk',
  startDate: '2019-03-03T15:07:44.742Z',
  id: 'aSMiO9N'
};

it('renders a snapshot', () => {
  const wrapper = shallow(
    <TeamMember
      currentClient={teamMember.clientName}
      description={teamMember.description}
      firstName={teamMember.firstName}
      key={teamMember.id}
      lastName={teamMember.lastName}
      memberNumber={teamMember.memberNumber}
      startDate={teamMember.startDate}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
