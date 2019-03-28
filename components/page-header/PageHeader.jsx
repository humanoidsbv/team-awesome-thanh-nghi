import React from 'react';
import PropTypes from 'prop-types';

import './page-header.scss';

const PageHeader = ({ title, subtitle }) => (
  <div className="page-header-bar">
    <h2 className="page-header-bar__title">{title}</h2>
    <div className="page-header-bar__divider">|</div>
    <p className="page-header-bar__subtitle">{subtitle}</p>
    <input
      className="page-header-bar__search"
      placeholder="Search"
      type="text"
    />
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default PageHeader;
