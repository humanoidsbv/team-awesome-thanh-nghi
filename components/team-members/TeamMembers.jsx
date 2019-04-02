import React from 'react';
import Link from 'next/link';

import './team-members.scss';

const TeamMembers = () => (
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
    </div>
  </React.Fragment>
);

export default TeamMembers;
