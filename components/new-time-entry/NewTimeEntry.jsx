import React from 'react';

import './new-time-entry.scss';

const NewTimeEntry = () => (
  <div className="new-entry">
    <h2 className="new-entry__title">New time entry</h2>
    <form className="new-entry__form">
      <label
        className="form-employer__label label-font"
        htmlFor="employer"
      >
        EMPLOYER
        <input
          className="form-employer__input input-style"
          id="employer"
          type="text"
        />
      </label>
      <label
        className="form-activity__label label-font"
        htmlFor="activity"
      >
        ACTIVITY
        <input
          className="form-activity__input"
          id="activity"
          type="text"
        />
      </label>
      <label
        className="form-date__label label-font"
        htmlFor="date"
      >
        DATE
        <input
          className="form-date__input"
          id="date"
          type="date"
        />
      </label>
      <label
        className="form-from__label label-font"
        htmlFor="from"
      >
        FROM
        <input
          className="form-date__input"
          id="from"
          type="time"
        />
      </label>
      <label
        className="form-to__label label-font"
        htmlFor="to"
      >
        TO
        <input
          className="form-to__input"
          id="to"
          type="time"
        />
      </label>
      <div className="time-worked">08:00:00</div>
      <button
        className="add-button"
        type="button"
      >
          Add
      </button>
    </form>
  </div>
);

export default NewTimeEntry;
