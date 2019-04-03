import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

import './team-members.scss';

import TeamMember from '../team-member';
import Select from '../../shared/components/Select';

import { dateToLocaleStringMonthYear } from '../../shared/services/converter-time';

const TeamMembers = ({ teamMembers }) => (
  <React.Fragment>
    <div className="members-header">
      <h2 className="members-header__title">All Humanoids</h2>
      <Link href="/new-team-member">
        <button
          className="members-header__add-button"
          type="button"
        >
          <img
            alt="Plus icon"
            className="members-header__add-icon"
            src="/static/images/icon-plus.svg"
          />
          New Humanoid
        </button>
      </Link>
      <Select
        className="select-element__sort"
        defaultValue={{ label: 'Sort by:', value: '' }}
        options={[
          {
            label: 'Member Name A-Z',
            value: 'name-ascending'
          },
          {
            label: 'Member Name Z-A',
            value: 'name-descending'
          },
          {
            label: 'Employee Number 0-9',
            value: 'memberNumber-ascending'
          },
          {
            label: 'Employee Number 9-0',
            value: 'memberNumer-descending'
          },
          {
            label: 'Current Employer A-Z',
            value: 'city-ascending'
          },
          {
            label: 'Current Employer Z-A',
            value: 'city-descending'
          },
          {
            label: 'Starting Date Old-New',
            value: 'startDate-ascending'
          },
          {
            label: 'Starting Date New-Old',
            value: 'startDate-descending'
          }
        ]}
        required
      />
    </div>
    <div className="members-list">
      {teamMembers.map((teamMember) => {
        const localizedStartDate = dateToLocaleStringMonthYear(teamMember.startDate);
        return (
          <React.Fragment key={teamMember.id}>
            <TeamMember
              currentClient={teamMember.currentClient}
              description={teamMember.description}
              firstName={teamMember.firstName}
              lastName={teamMember.lastName}
              memberNumber={teamMember.memberNumber}
              startDate={localizedStartDate}
            />
          </React.Fragment>
        );
      })}
    </div>
  </React.Fragment>
);

TeamMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TeamMembers;
