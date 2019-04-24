import React from 'react';

import './page-header.scss';

interface PageHeaderProps {
  subtitle: string;
  title: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
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

export default PageHeader;
