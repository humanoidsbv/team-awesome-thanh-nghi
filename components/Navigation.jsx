import React from 'react';

export default () => (
  <React.Fragment>
    <h1 className="header__logo">team awesome</h1>
    <button
      className="menu-button"
      type="button"
    >
      <img
        alt="icon-menu"
        className="menu-button__icon menu-button__icon--open"
        src="images/icon-menu.svg"
      />

      <img
        alt="icon-close"
        className="menu-button__icon menu-button__icon--close"
        src="images/icon-close.svg"
      />
    </button>

    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item menu__item--active">
          <a
            className="menu__link"
            href="#null"
          >
            Timesheets
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            href="#null"
          >
            Team members
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            href="#null"
          >
            Projects
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            href="#null"
          >
            Clients
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            href="#null"
          >
            Documents
          </a>
        </li>
      </ul>
    </nav>
  </React.Fragment>
);