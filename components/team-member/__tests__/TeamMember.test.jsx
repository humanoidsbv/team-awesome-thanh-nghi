import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TeamMember from '../TeamMember';

const teamMembers = {
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
      currentClient={teamMembers.clientName}
      description={teamMembers.description}
      firstName={teamMembers.firstName}
      key={teamMembers.id}
      lastName={teamMembers.lastName}
      memberNumber={teamMembers.memberNumber}
      startDate={teamMembers.startDate}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
