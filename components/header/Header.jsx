import React from 'react';

import Navigation from '../navigation';
import ProfileButton from '../profile-button/ProfileButton';

import './header.scss';

class Header extends React.Component {
  state = {
    isNavigationOpen: false
  };

  toggleNavigation = () => {
    this.setState(({ isNavigationOpen }) => ({ isNavigationOpen: !isNavigationOpen }));
  }

  render() {
    const { isNavigationOpen } = this.state;
    return (
      <header className={`header ${isNavigationOpen ? 'header--navigation-visible' : 'header--navigation-invisible'}`}>
        <Navigation handleClick={this.toggleNavigation} />
        <ProfileButton />
      </header>
    );
  }
}

export default Header;
