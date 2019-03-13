import React from 'react';

import './page-header.scss';

const PageHeader = () => (
  <div className="page-header-bar">
    <h2 className="page-header-bar__title">Timesheets</h2>
    <div className="page-header-bar__divider">|</div>
    <p className="page-header-bar__number">12 Entries</p>
    <input
      className="page-header-bar__search"
      placeholder="Search"
      type="text"
    />
  </div>
);

export default PageHeader;
