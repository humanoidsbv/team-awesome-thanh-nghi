import React from 'react';

import './new-time-entry.scss';
import NewEntryButton from './new-entry-button/NewEntryButton';
import Select from '../../shared/components/Select';
import { getDateTimeToIso } from '../../shared/services/converter-time';

interface ClientModel {
  id: string;
  name: string;
}

interface NewTimeEntryModel {
  activity: string;
  client: string;
  date: string;
  endTime: string;
  startTime: string;
}

interface NewTimeEntryProps {
  clients: ClientModel[];
  isInvalid: boolean;
  onAdd: Function;
}

interface NewTimeEntryState {
  isFieldInvalid: object;
  isFormValid: boolean;
  newTimeEntry: NewTimeEntryModel;
  newTimeEntryIsVisible: boolean;
}

interface NewTimeEntryValidity {
  activity: boolean;
  client: boolean;
  date: boolean;
  endTime: boolean;
  startTime: boolean;
}

class NewTimeEntry extends React.Component<NewTimeEntryProps, NewTimeEntryState, NewTimeEntryValidity> {
  private formValidationRef = React.createRef<HTMLFormElement>();

  static defaultStateValues = {
    newTimeEntryModel: {
      activity: '',
      client: '',
      date: '',
      endTime: '',
      startTime: ''
    },
    isFieldInvalidModel: {
      activity: false,
      client: false,
      date: false,
      endTime: false,
      startTime: false
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    isFieldInvalid: { ...NewTimeEntry.defaultStateValues.isFieldInvalidModel },
    isFormValid: false,
    newTimeEntry: { ...NewTimeEntry.defaultStateValues.newTimeEntryModel },
    newTimeEntryIsVisible: false
  };

  toggleForm = () => {
    this.setState(({ newTimeEntryIsVisible }) => ({
      newTimeEntryIsVisible: !newTimeEntryIsVisible
    }));
  }

  handleBlur = ({ target }) => {
    this.setState(prevState => ({
      isFieldInvalid: { ...prevState.isFieldInvalid, [target.name]: !target.checkValidity() },
      isFormValid: this.formValidationRef.current.checkValidity()
    }));
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      newTimeEntry: { ...prevState.newTimeEntry, [target.name]: target.value }
    }));
  }

  handleSubmit = () => {
    const { isFormValid, newTimeEntry } = this.state;
    const { onAdd } = this.props;

    if (!isFormValid) {
      return;
    }

    onAdd({
      activity: newTimeEntry.activity,
      client: newTimeEntry.client,
      endTime: getDateTimeToIso(newTimeEntry.date, newTimeEntry.endTime),
      startTime: getDateTimeToIso(newTimeEntry.date, newTimeEntry.startTime)
    });
    this.setState(() => ({ newTimeEntry: { ...NewTimeEntry.defaultStateValues.newTimeEntryModel } }));
    this.toggleForm();
  }

  render() {
    const {
      isFieldInvalid, isFormValid, newTimeEntry, newTimeEntryIsVisible
    } = this.state;
    const { clients } = this.props;

    return (
      <React.Fragment>
        <NewEntryButton
          isVisible={!newTimeEntryIsVisible}
          onClick={this.toggleForm}
        />
        <div className={`
          new-time-entry
          new-time-entry--${newTimeEntryIsVisible ? 'visible' : 'invisible'}
        `}
        >
          <h2 className="new-time-entry__title">New time entry</h2>
          <form
            className="new-time-entry__form"
            ref={this.formValidationRef}
          >
            <button
              className="new-time-entry__close-button"
              onClick={this.toggleForm}
              type="button"
            >
              x
            </button>
            <div className="new-time-entry__wrapper--client">
              <p className="new-time-entry__label--client">
                CLIENT
              </p>
              <Select
                className="select-element__form"
                defaultValue={{ label: 'Select a client', value: '' }}
                id="client"
                isInvalid={isFieldInvalid.client}
                name="client"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                options={clients}
                required
              />
            </div>
            <label
              className="new-time-entry__label new-time-entry__label--activity"
              htmlFor="activity"
            >
              ACTIVITY
              <input
                className={`
                  new-time-entry__input
                  new-time-entry__input--large
                  new-time-entry__input--${isFieldInvalid.activity ? 'invalid' : 'valid'}
                `}
                id="activity"
                minLength={2}
                name="activity"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                required
                type="text"
                value={newTimeEntry.activity}
              />
            </label>
            <label
              className="new-time-entry__label new-time-entry__label--date"
              htmlFor="date"
            >
              DATE
              <input
                className={`
                  new-time-entry__input
                  new-time-entry__input--medium
                  new-time-entry__input--${isFieldInvalid.date ? 'invalid' : 'valid'}
                `}
                id="date"
                maxLength={10}
                minLength={10}
                name="date"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                pattern="(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[0-2])[-]([0-9]{4})"
                required
                type="text"
                value={newTimeEntry.date}
              />
            </label>
            <div className="new-time-entry__fieldset">
              <label
                className="new-time-entry__label new-time-entry__label--from"
                htmlFor="from"
              >
                FROM
                <input
                  className={`
                    new-time-entry__input
                    new-time-entry__input--small
                    new-time-entry__input--${isFieldInvalid.startTime ? 'invalid' : 'valid'}
                  `}
                  id="from"
                  maxLength={5}
                  minLength={5}
                  name="startTime"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  pattern="([01][0-9]|2[0-3])[:]([0-5][0-9])"
                  required
                  type="text"
                  value={newTimeEntry.startTime}
                />
              </label>
              <label
                className="new-time-entry__label new-time-entry__label--to"
                htmlFor="to"
              >
                TO
                <input
                  className={`
                    new-time-entry__input
                    new-time-entry__input--small
                    new-time-entry__input--${isFieldInvalid.endTime ? 'invalid' : 'valid'}
                  `}
                  id="to"
                  maxLength={5}
                  minLength={5}
                  name="endTime"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  pattern="([01][0-9]|2[0-3])[:]([0-5][0-9])"
                  required
                  type="text"
                  value={newTimeEntry.endTime}
                />
              </label>
            </div>
            <button
              className={`
                new-time-entry__add-button
                new-time-entry__add-button--${isFormValid ? 'enabled' : 'disabled'}
              `}
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

export default NewTimeEntry;
