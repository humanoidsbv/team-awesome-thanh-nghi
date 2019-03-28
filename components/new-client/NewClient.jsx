import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import './new-client.scss';

class NewClient extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  state = {
    isFieldInvalid: {},
    isFormValid: false,
    newClient: {}
  };

  handleBlur = ({ target }) => {
    this.setState(prevState => ({
      isFieldInvalid: { ...prevState.isFieldInvalid, [target.name]: !target.checkValidity() },
      isFormValid: this.formRef.current.checkValidity()
    }));
  };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      newClient: { ...prevState.newClient, [target.name]: target.value }
    }));
  };

  handleSubmit = () => {
    const { isFormValid, newClient } = this.state;
    const { onAdd } = this.props;

    if (!isFormValid) {
      return;
    }

    onAdd(newClient);

    Router.push('/clients');
  }

  render() {
    const { isFieldInvalid, isFormValid } = this.state;

    return (
      <React.Fragment>
        <div className="new-client-header">
          <h2 className="new-client-header__title">Add new client</h2>
          <div className="new-client-header__button-wrapper">
            <Link href="/clients">
              <button
                className="new-client-header__button new-client-header__button-cancel"
                type="button"
              >
                Cancel
              </button>
            </Link>
            <button
              className={`
                new-client-header__button
                new-client-header__button-save
                new-client-header__button-save--${isFormValid ? 'enabled' : 'disabled'}
              `}
              onClick={this.handleSubmit}
              type="button"
            >
              Save
            </button>
          </div>
        </div>
        <div className="new-client">
          <form
            className="new-client__form"
            ref={this.formRef}
          >
            <div className="new-client__wrapper-group">
              <label
                className="new-client__label"
                htmlFor="name"
              >
                Name
                <input
                  className={`
                    new-client__input
                    new-client__input--${isFieldInvalid.name ? 'invalid' : 'valid'}
                  `}
                  id="name"
                  minLength={2}
                  name="name"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  required
                  type="text"
                />
              </label>
              <label
                className="new-client__label"
                htmlFor="description"
              >
                Description
                <input
                  className={`
                    new-client__input
                    new-client__input--${isFieldInvalid.description ? 'invalid' : 'valid'}
                  `}
                  id="description"
                  minLength={2}
                  name="description"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  required
                  type="text"
                />
              </label>
              <label
                className="new-client__label"
                htmlFor="number"
              >
                Client number
                <input
                  className={`
                    new-client__input
                    new-client__input--${isFieldInvalid.number ? 'invalid' : 'valid'}
                  `}
                  id="number"
                  maxLength={5}
                  minLength={2}
                  name="number"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  required
                  type="text"
                />
              </label>
              <label
                className="new-client__label"
                htmlFor="date"
              >
                Starting date
                <input
                  className={`
                    new-client__input
                    new-client__input--${isFieldInvalid.date ? 'invalid' : 'valid'}
                  `}
                  id="date"
                  minLength={2}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  required
                  name="date"
                  type="text"
                />
              </label>
            </div>
            <div className="new-client__wrapper-group">
              <label
                className="new-client__label"
                htmlFor="address"
              >
                Address
                <input
                  className={`
                    new-client__input
                    new-client__input--${isFieldInvalid.address ? 'invalid' : 'valid'}
                  `}
                  id="address"
                  minLength={2}
                  name="address"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  required
                  type="text"
                />
              </label>
              <div className="new-client__wrapper-pair">
                <label
                  className="new-client__label"
                  htmlFor="zipcode"
                >
                  ZIP code
                  <input
                    className={`
                      new-client__input
                      new-client__input--${isFieldInvalid.zipcode ? 'invalid' : 'valid'}
                    `}
                    id="zipcode"
                    maxLength={6}
                    minLength={6}
                    name="zipcode"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </label>
                <label
                  className="new-client__label"
                  htmlFor="city"
                >
                  City
                  <input
                    className={`
                      new-client__input
                      new-client__input--pair
                      new-client__label--city
                      new-client__input--${isFieldInvalid.city ? 'invalid' : 'valid'}
                    `}
                    id="city"
                    minLength={2}
                    name="city"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </label>
              </div>
              <label
                className="new-client__label"
                htmlFor="mail"
              >
                E-mail
                <input
                  className={`
                    new-client__input
                    new-client__input--${isFieldInvalid.mail ? 'invalid' : 'valid'}
                  `}
                  id="mail"
                  minLength={2}
                  name="mail"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  required
                  type="text"
                />
              </label>
              <label
                className="new-client__label"
                htmlFor="website"
              >
                Website
                <input
                  className={`
                    new-client__input
                    new-client__input--${isFieldInvalid.website ? 'invalid' : 'valid'}
                  `}
                  id="website"
                  minLength={2}
                  name="website"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  required
                  type="text"
                />
              </label>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

NewClient.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default NewClient;