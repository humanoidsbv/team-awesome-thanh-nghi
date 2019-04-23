import React from 'react';

import './team-member.scss';

interface TeamMemberProps {
  currentClient: string;
  description: string;
  firstName: string;
  lastName: string;
  memberNumber: string;
  startDate: string;
}

const TeamMember = ({
  currentClient, description, firstName, lastName, memberNumber, startDate
}: TeamMemberProps) => (
  <React.Fragment>
    <ul className="member-content">
      <li className="member-content__item">
        <img
          alt="Person Icon"
          className="member-content__logo"
          src="../static/images/icon-person.svg"
        />
        <div className="member-content__wrapper-name">
          <div className="member-content__element member-content__title">{`${firstName} ${lastName}`}</div>
          <div className="member-content__element member-content__subtitle">{description}</div>
        </div>
        <div className="member-content__wrapper member-content__wrapper--first">
          <div className="member-content__element member-content__title">{memberNumber}</div>
          <div className="member-content__element member-content__subtitle">Employee number</div>
        </div>
        <div className="member-content__wrapper">
          <div className="member-content__element member-content__title">{currentClient}</div>
          <div className="member-content__element member-content__subtitle">Current Employer</div>
        </div>
        <div className="member-content__wrapper">
          <div className="member-content__element member-content__title">{startDate}</div>
          <div className="member-content__element member-content__subtitle">Starting date</div>
        </div>
        <button
          className="member-content__button"
          type="button"
        >
          <img
            alt="Arrow down"
            className="member-content__button-img"
            src="../static/images/icon-arrow-down.svg"
          />
        </button>
      </li>
    </ul>
  </React.Fragment>
);

export default TeamMember;
