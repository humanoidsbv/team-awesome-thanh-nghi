import PropTypes from 'prop-types';
import React from 'react';

import './new-time-entry.scss';
import NewEntryButton from '../new-entry-button';

import { getDateTimeToIso } from '../../shared/services/converter-time';

// reminder: erase default values when done
class NewTimeEntry extends React.Component {
  static newTimeEntryModel = {
    activity: '',
    client: '',
    date: '',
    endTime: '',
    startTime: ''
  };

  state = {
    newTimeEntry: { ...NewTimeEntry.newTimeEntryModel },
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
    const { onAdd } = this.props;
    const { newTimeEntry } = this.state;

    onAdd({
      activity: newTimeEntry.activity,
      client: newTimeEntry.client,
      endTime: getDateTimeToIso(newTimeEntry.date, newTimeEntry.endTime),
      startTime: getDateTimeToIso(newTimeEntry.date, newTimeEntry.startTime)
    });
    this.clearNewEntry();
    this.onNewTimeEntryClick();
  }

  clearNewEntry = () => {
    this.setState(() => ({ newTimeEntry: { ...NewTimeEntry.newTimeEntryModel } }));
  }

  render() {
    const { newTimeEntry, newTimeEntryIsVisible } = this.state;
    const {
      activity, client, date, endTime, startTime
    } = newTimeEntry;

    return (
      <React.Fragment>
        <NewEntryButton
          isVisible={!newTimeEntryIsVisible}
          onClick={this.onNewTimeEntryClick}
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
                type="text"
                value={date}
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
                  name="startTime"
                  onChange={this.handleChange}
                  type="text"
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
                  type="text"
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
  onAdd: PropTypes.func.isRequired
};

export default NewTimeEntry;
