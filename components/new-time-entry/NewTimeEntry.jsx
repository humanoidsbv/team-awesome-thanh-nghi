import React from 'react';

import './new-time-entry.scss';
import NewEntryButton from '../new-entry-button';

class NewTimeEntry extends React.Component {
  state = { NewTimeEntryOpen: false };

  onNewTimeEntryClick = () => {
    this.setState(({ NewTimeEntryOpen }) => ({ NewTimeEntryOpen: !NewTimeEntryOpen }));
  }

  render() {
    const { NewTimeEntryOpen } = this.state;
    return (
      <React.Fragment>
        <NewEntryButton
          onClick={this.onNewTimeEntryClick}
          isVisible={!NewTimeEntryOpen}
        />
        <div className={`new-time-entry ${NewTimeEntryOpen ? 'new-time-entry--visible' : 'new-time-entry--invisible'}`}>
          <h2 className="new-time-entry__title">New time entry</h2>
          <form className="new-time-entry__form">
            <button
              className="new-time-entry__close-button"
              onClick={this.onNewTimeEntryClick}
              type="button"
            >
              x
            </button>
            <label
              className="new-time-entry__label new-time-entry__label--employer"
              htmlFor="employer"
            >
              EMPLOYER
              <input
                className="new-time-entry__input new-time-entry__input--employer new-time-entry__input--large"
                id="employer"
                type="text"
              />
            </label>
            <label
              className="new-time-entry__label new-time-entry__label--activity"
              htmlFor="activity"
            >
              ACTIVITY
              <input
                className="new-time-entry__input new-time-entry__input--activity new-time-entry__input--large"
                id="activity"
                type="text"
              />
            </label>
            <label
              className="new-time-entry__label new-time-entry__label--date"
              htmlFor="date"
            >
              DATE
              <input
                className="new-time-entry__input new-time-entry__input--date new-time-entry__input--medium"
                id="date"
                type="date"
              />
            </label>
            <div className="new-time-entry__fieldset">
              <label
                className="new-time-entry__label new-time-entry__label--from"
                htmlFor="from"
              >
                FROM
                <input
                  className="new-time-entry__input new-time-entry__input--from new-time-entry__input--small"
                  id="from"
                  type="time"
                />
              </label>
              <label
                className="new-time-entry__label new-time-entry__label--to"
                htmlFor="to"
              >
                TO
                <input
                  className="new-time-entry__input new-time-entry__input--to new-time-entry__input--small"
                  id="to"
                  type="time"
                />
              </label>
            </div>
            <button
              className="new-time-entry__add-button"
              type="button"
            >
                Add
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default NewTimeEntry;
