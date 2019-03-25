import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './navigation.scss';

const Navigation = ({ handleClick }) => (

  <React.Fragment>
    <h1 className="header__logo">team awesome</h1>
    <button
      className="menu-button"
      onClick={handleClick}
      type="button"
    >
      <img
        alt="icon-menu"
        className="menu-button__icon menu-button__icon--open"
        src="/static/images/icon-menu.svg"
      />
      <img
        alt="icon-close"
        className="menu-button__icon menu-button__icon--close"
        src="/static/images/icon-close.svg"
      />
    </button>

    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item menu__item--active">
          <Link href="/index">
            <a
              className="menu__link"
              href="#null"
            >
              Timesheets
            </a>
          </Link>
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
          <Link href="/clients">
            <a
              className="menu__link"
              href="#null"
            >
              Clients
            </a>
          </Link>
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

Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Navigation;
