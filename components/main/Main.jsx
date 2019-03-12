import React from 'react';
import PropTypes from 'prop-types';

import './main.scss';

const Main = ({ children }) => (
  <main className="main">
    { children }
  </main>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Main;
