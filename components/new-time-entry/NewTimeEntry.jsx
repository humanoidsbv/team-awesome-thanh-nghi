import PropTypes from 'prop-types';
import React from 'react';

import './new-time-entry.scss';
import NewEntryButton from '../new-entry-button';

class NewTimeEntry extends React.Component {
  static newTimeEntryModel = {
    activity: '',
    client: '',
    date: '',
    endTime: '',
    id: '',
    startTime: ''
  };

  state = {
    newTimeEntry: NewTimeEntry.newTimeEntryModel,
    newTimeEntryIsVisible: false
  };

  onNewTimeEntryClick = () => {
    this.setState(({ newTimeEntryIsVisible }) => ({
      newTimeEntryIsVisible: !newTimeEntryIsVisible
    }));
  }

  handleChange = ({ target: { value, name } }) => {
    const { newTimeEntry } = this.state;
    this.setState(() => ({
      newTimeEntry: {
        ...newTimeEntry,
        [name]: value || ''
      }
    }));
  }

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { newTimeEntry } = this.state;
    const { clearNewEntry } = this;
    const { onNewTimeEntryClick } = this;
    onSubmit(newTimeEntry);
    clearNewEntry();
    onNewTimeEntryClick();
  }

  clearNewEntry = () => {
    this.setState(() => ({ newTimeEntry: NewTimeEntry.newTimeEntryModel }));
  }

  render() {
    const { newTimeEntry, newTimeEntryIsVisible } = this.state;
    const {
      date, client, activity, startTime, endTime
    } = newTimeEntry;
    return (
      <React.Fragment>
        <NewEntryButton
          onClick={this.onNewTimeEntryClick}
          isVisible={!newTimeEntryIsVisible}
        />
        <div className={`new-time-entry ${newTimeEntryIsVisible ? 'new-time-entry--visible' : 'new-time-entry--invisible'}`}>
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
                onChange={this.handleChange}
                type="text"
                value={client}
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
                onChange={this.handleChange}
                type="text"
                value={activity}
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
                onChange={this.handleChange}
                type="date"
                value={date}
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
                  onChange={this.handleChange}
                  type="time"
                  value={startTime}
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
                  onChange={this.handleChange}
                  type="time"
                  value={endTime}
                />
              </label>
            </div>
            <button
              className="new-time-entry__add-button"
              onClick={this.handleSubmit}
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
