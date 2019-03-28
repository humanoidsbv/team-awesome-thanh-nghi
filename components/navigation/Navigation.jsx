import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

import './navigation.scss';

const menuItems = [
  {
    href: '/index',
    label: 'Timesheets'
  },
  {
    href: '/team-members',
    label: 'Team members'
  },
  {
    href: '/projects',
    label: 'Projects'
  },
  {
    href: '/clients',
    label: 'Clients'
  },
  {
    href: '/documents',
    label: 'Documents'
  }
];

const Navigation = ({ handleClick, router }) => (

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
        {menuItems.map(menuItem => (
          <li
            className={`
              menu__item
              menu__item--${router.pathname === menuItem.href
              ? 'active'
              : 'inactive'}
            `}
            key={menuItem.label}
          >
            <Link href={menuItem.href}>
              <a className="menu__link" href="#null">
                {menuItem.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </React.Fragment>
);

Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

export default withRouter(Navigation);
