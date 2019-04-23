import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TeamMembers from '../TeamMembers';

const retrieveClients = () => {};
const retrieveTeamMembers = () => {};
const sortTeamMembers = () => {};

const teamMembers = [
  {
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
  },
  {
    clientName: 'Port of Rotterdam',
    currentClient: '2',
    firstName: 'Jantje',
    lastName: 'Smit',
    description: 'Designer',
    memberNumber: 'H-008',
    address: 'Zilverstraat 8',
    zipcode: '1234GS',
    city: 'Timboektoe',
    emailAddress: 'jantje.smit@humanoids.nl',
    linkedIn: 'linkedin.com/jantje-smit',
    startDate: '2019-04-03T15:07:44.742Z',
    id: 'KfAM5Sn'
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
    <TeamMembers
      clients={clientNameIdSelector}
      onRetrieveClients={retrieveClients}
      onRetrieveTeamMembers={retrieveTeamMembers}
      sortTeamMembers={sortTeamMembers}
      teamMembers={teamMembers}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
