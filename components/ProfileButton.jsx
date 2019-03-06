import React from 'react';

export default () => (
  <div className="profile">
    <button className="profile__button">
      <img
        className="profile__logo"
        src="images/logo-humanoids.svg"
      />
      <img
        className="profile__picture"
        src="images/picture-tnt.jpg"
      />
    </button>
    <button className="dropdown">
      <img
        className="dropdown__icon"
        src="images/icon-arrow-down.svg"
    />
    </button>
  </div>
);
