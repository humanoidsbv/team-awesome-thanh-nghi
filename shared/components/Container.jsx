import React from 'react';
import PropTypes from 'prop-types';

import './container.scss';

const Container = ({ children }) => (
  <main className="main">
    {children}
  </main>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Container;
