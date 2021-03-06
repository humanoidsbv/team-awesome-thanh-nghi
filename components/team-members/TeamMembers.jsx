import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

import './team-members.scss';

import Container from '../../shared/components/container';
import PageHeader from '../../shared/components/page-header';
import Select from '../../shared/components/select';
import TeamMember from '../team-member';

import { dateToLocaleStringMonthYear } from '../../shared/services/converter-time';

class TeamMembers extends React.Component {
  handleChange = ({ target }) => {
    const { sortTeamMembers } = this.props;
    sortTeamMembers(target.value);
  }

  render() {
    const { teamMembers } = this.props;
    const count = teamMembers.length;

    return (
      <React.Fragment>
        <PageHeader
          title="Team Members"
          subtitle={`${count} ${count === 1 ? 'Member' : 'Members'}`}
        />
        <Container>
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
              onChange={this.handleChange}
              options={[
                {
                  label: 'First name A-Z',
                  value: 'firstName-ascending'
                },
                {
                  label: 'First name Z-A',
                  value: 'firstName-descending'
                },
                {
                  label: 'Last name A-Z',
                  value: 'lastName-ascending'
                },
                {
                  label: 'Last name Z-A',
                  value: 'lastName-descending'
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
                  value: 'clientName-ascending'
                },
                {
                  label: 'Current Employer Z-A',
                  value: 'clientName-descending'
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
                <TeamMember
                  currentClient={teamMember.clientName}
                  description={teamMember.description}
                  firstName={teamMember.firstName}
                  key={teamMember.id}
                  lastName={teamMember.lastName}
                  memberNumber={teamMember.memberNumber}
                  startDate={localizedStartDate}
                />
              );
            })}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}


TeamMembers.propTypes = {
  sortTeamMembers: PropTypes.func.isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TeamMembers;
