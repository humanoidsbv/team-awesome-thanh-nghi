import React from 'react';

import './new-time-entry.scss';
import PropTypes from 'prop-types';
import NewEntryButton from '../new-entry-button';

class NewTimeEntry extends React.Component {
  state = {
    NewTimeEntryOpen: true,
    NewEntry: {
      id: '',
      date: '',
      client: '',
      activity: '',
      startTime: '',
      endTime: ''
    }
  };

  onNewTimeEntryClick = () => {
    this.setState(({ NewTimeEntryOpen }) => ({ NewTimeEntryOpen: !NewTimeEntryOpen }));
  }

  onInputChange = ({ target: { value, name } }) => {
    const { NewEntry } = this.state;
    this.setState(() => ({
      NewEntry: {
        ...NewEntry,
        [name]: value || ''
      }
    }));
  }

  submit = () => {
    const { onSubmit } = this.props;
    const { NewEntry } = this.state;
    onSubmit(NewEntry);
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
                name="client"
                onChange={this.onInputChange}
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
                name="activity"
                onChange={this.onInputChange}
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
                name="date"
                onChange={this.onInputChange}
                type="date"
              />
            </label>
            <div className="new-time-entry__time-wrapper">
              <label
                className="new-time-entry__label new-time-entry__label--from"
                htmlFor="from"
              >
                FROM
                <input
                  className="new-time-entry__input new-time-entry__input--from new-time-entry__input--small"
                  id="from"
                  name="startTime"
                  onChange={this.onInputChange}
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
                  name="endTime"
                  onChange={this.onInputChange}
                  type="time"
                />
              </label>
            </div>
            <button
              className="new-time-entry__add-button"
              onClick={this.submit}
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

NewTimeEntry.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewTimeEntry;
