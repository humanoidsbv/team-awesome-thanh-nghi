import React from 'react';
import PropTypes from 'prop-types';

import './new-entry-button.scss';

const NewEntryButton = ({ isVisible, onClick }) => isVisible && (
  <button
    className="new-entry-button"
    onClick={onClick}
    type="button"
  >
    <img
      alt="Plus icon"
      className="new-entry-button__icon"
      src="/static/images/icon-plus.svg"
    />
    New time entry
  </button>
);

NewEntryButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NewEntryButton;
