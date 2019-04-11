import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import './new-team-member.scss';

import Container from '../../shared/components/container';
import PageHeader from '../../shared/components/page-header';
import Select from '../../shared/components/select';

class NewTeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  state = {
    isFieldInvalid: {},
    isFormValid: false,
    newTeamMember: {}
  };

  handleBlur = ({ target }) => {
    this.setState(prevState => ({
      isFieldInvalid: { ...prevState.isFieldInvalid, [target.name]: !target.checkValidity() },
      isFormValid: this.formRef.current.checkValidity()
    }));
  };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      newTeamMember: { ...prevState.newTeamMember, [target.name]: target.value }
    }));
  };

  handleSubmit = () => {
    const { isFormValid, newTeamMember } = this.state;
    const { onAdd } = this.props;

    if (!isFormValid) {
      return;
    }

    onAdd({
      ...newTeamMember,
      startDate: new Date()
    });

    Router.push('/team-members');
  }

  render() {
    const { isFieldInvalid, isFormValid } = this.state;
    const { clients, teamMembers } = this.props;
    const count = teamMembers.length;

    return (
      <React.Fragment>
        <PageHeader
          title="Team Members"
          subtitle={`${count} ${count === 1 ? 'Member' : 'Members'}`}
        />
        <Container>
          <div className="new-team-member-header">
            <h2 className="new-team-member-header__title">Add new team member</h2>
            <div className="new-team-member-header__button-wrapper">
              <Link href="/team-members">
                <button
                  className="new-team-member-header__button new-team-member-header__button-cancel"
                  type="button"
                >
                  Cancel
                </button>
              </Link>
              <button
                className={`
                  new-team-member-header__button
                  new-team-member-header__button-save
                  new-team-member-header__button-save--${isFormValid ? 'enabled' : 'disabled'}
                `}
                onClick={this.handleSubmit}
                type="button"
              >
                Save
              </button>
            </div>
          </div>
          <div className="new-team-member">
            <form
              className="new-team-member__form"
              ref={this.formRef}
            >
              <div className="new-team-member__wrapper-group">
                <div className="new-team-member__wrapper-pair">
                  <label
                    className="new-team-member__label"
                    htmlFor="firstName"
                  >
                    First name
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--${isFieldInvalid.firstName ? 'invalid' : 'valid'}
                      `}
                      id="firstName"
                      minLength={2}
                      name="firstName"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                    />
                  </label>
                  <label
                    className="new-team-member__label"
                    htmlFor="lastName"
                  >
                    Last Name
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--${isFieldInvalid.name ? 'invalid' : 'valid'}
                      `}
                      id="lastName"
                      minLength={2}
                      name="lastName"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                    />
                  </label>
                </div>
                <label
                  className="new-team-member__label"
                  htmlFor="description"
                >
                  Function description
                  <input
                    className={`
                      new-team-member__input
                      new-team-member__input--${isFieldInvalid.description ? 'invalid' : 'valid'}
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
                  className="new-team-member__label"
                  htmlFor="team-memberNumber"
                >
                  Employee number
                  <input
                    className={`
                      new-team-member__input
                      new-team-member__input--${isFieldInvalid.memberNumber ? 'invalid' : 'valid'}
                    `}
                    id="memberNumber"
                    maxLength={5}
                    minLength={2}
                    name="memberNumber"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </label>
                <div className="new-team-member__wrapper--client">
                  <p className="new-team-member__label--client">
                    Current employer
                  </p>
                  <Select
                    className="select-element__form-new-team-member"
                    defaultValue={{ label: 'Select a client', value: '' }}
                    id="currentClient"
                    isInvalid={isFieldInvalid.currentClient}
                    name="currentClient"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    options={clients}
                    required
                  />
                </div>
              </div>
              <div className="new-team-member__wrapper-group">
                <label
                  className="new-team-member__label"
                  htmlFor="address"
                >
                  Address
                  <input
                    className={`
                      new-team-member__input
                      new-team-member__input--${isFieldInvalid.address ? 'invalid' : 'valid'}
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
                <div className="new-team-member__wrapper-pair">
                  <label
                    className="new-team-member__label"
                    htmlFor="zipcode"
                  >
                    ZIP code
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--${isFieldInvalid.zipcode ? 'invalid' : 'valid'}
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
                    className="new-team-member__label"
                    htmlFor="city"
                  >
                    City
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--pair
                        new-team-member__label--city
                        new-team-member__input--${isFieldInvalid.city ? 'invalid' : 'valid'}
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
                  className="new-team-member__label"
                  htmlFor="emailAddress"
                >
                  E-mail
                  <input
                    className={`
                      new-team-member__input
                      new-team-member__input--${isFieldInvalid.emailAddress ? 'invalid' : 'valid'}
                    `}
                    id="emailAddress"
                    minLength={2}
                    name="emailAddress"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </label>
                <label
                  className="new-team-member__label"
                  htmlFor="linkedIn"
                >
                  LinkedIn
                  <input
                    className={`
                      new-team-member__input
                      new-team-member__input--${isFieldInvalid.linkedIn ? 'invalid' : 'valid'}
                    `}
                    id="linkedIn"
                    minLength={2}
                    name="linkedIn"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </label>
              </div>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

NewTeamMember.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAdd: PropTypes.func.isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default NewTeamMember;
