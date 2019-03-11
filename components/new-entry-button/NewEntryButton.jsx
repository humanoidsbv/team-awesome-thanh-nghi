import React from 'react';

import './new-entry-button.scss';

const NewEntryButton = () => (
  <button
    className="new-entry-button"
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

export default NewEntryButton;
