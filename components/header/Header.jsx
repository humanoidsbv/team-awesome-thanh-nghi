import React from 'react';

import Navigation from '../navigation';
import ProfileButton from '../profile-button/ProfileButton';

import './header.scss';

const Header = () => (
  <header className="header">
    <Navigation />
    <ProfileButton />
  </header>
);

export default Header;
