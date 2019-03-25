import React from 'react';
import PropTypes from 'prop-types';

import './page-header.scss';

const PageHeader = ({ pageTitle, pageSubTitle }) => (
  <div className="page-header-bar">
    <h2 className="page-header-bar__title">{pageTitle}</h2>
    <div className="page-header-bar__divider">|</div>
    <p className="page-header-bar__subtitle">{pageSubTitle}</p>
    <input
      className="page-header-bar__search"
      placeholder="Search"
      type="text"
    />
  </div>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageSubTitle: PropTypes.string.isRequired
};

export default PageHeader;
