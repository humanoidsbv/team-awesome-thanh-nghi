import React from 'react';

export default () => (
  <React.Fragment>
    <div className="profile">
      <button
        className="profile__button"
        type="button"
      >
        <img
          alt="Logo Humanoids"
          className="profile__logo"
          src="/static/images/logo-humanoids.svg"
        />
        <img
          alt="Profile TN"
          className="profile__picture"
          src="/static/images/picture-tnt.jpg"
        />
      </button>
      <button
        className="dropdown"
        type="button"
      >
        <img
          alt="Arrow down"
          className="dropdown__icon"
          src="/static/images/icon-arrow-down.svg"
        />
      </button>
    </div>
  </React.Fragment>
);
