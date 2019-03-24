import PropTypes from 'prop-types';
import React from 'react';

import './new-time-entry.scss';
import NewEntryButton from '../new-entry-button';

import { getDateTimeToIso } from '../../shared/services/converter-time';

class NewTimeEntry extends React.Component {
  static stateDefault = {
    newTimeEntryModel: {
      activity: '',
      client: '',
      date: '',
      endTime: '',
      startTime: ''
    }
  };

  constructor(props) {
    super(props);
    this.formValidationRef = React.createRef();
  }

  state = {
    newTimeEntry: { ...NewTimeEntry.stateDefault.newTimeEntryModel },
    formValidity: false,
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

  clearNewEntry = () => {
    this.setState(() => ({ newTimeEntry: { ...NewTimeEntry.stateDefault.newTimeEntryModel } }));
  }

  handleSubmit = () => {
    const { onAdd } = this.props;
    const { newTimeEntry, formValidity } = this.state;
    this.setState(() => ({ formValidity: this.formValidationRef.current.checkValidity() }));

    if (formValidity) {
      onAdd({
        activity: newTimeEntry.activity,
        client: newTimeEntry.client,
        endTime: getDateTimeToIso(newTimeEntry.date, newTimeEntry.endTime),
        startTime: getDateTimeToIso(newTimeEntry.date, newTimeEntry.startTime)
      });
      this.onNewTimeEntryClick();
      this.clearNewEntry();
    }
  }

  handleBlur = ({ target }) => {
    if (target.checkValidity()) {
      target.classList.add('new-time-entry__input--valid');
      target.classList.remove('new-time-entry__input--invalid');
    } else {
      target.classList.add('new-time-entry__input--invalid');
      target.classList.remove('new-time-entry__input--valid');
    }
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
          <form
            className="new-time-entry__form"
            ref={this.formValidationRef}
          >
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
                maxLength={10}
                minLength={10}
                name="date"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                pattern="(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[0-2])[-]([0-9]{4})"
                required
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
                  maxLength={5}
                  minLength={5}
                  name="startTime"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  pattern="([01][0-9]|2[0-3])[:]([0-5][0-9])"
                  required
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
                  maxLength={5}
                  minLength={5}
                  name="endTime"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  pattern="([01][0-9]|2[0-3])[:]([0-5][0-9])"
                  required
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
