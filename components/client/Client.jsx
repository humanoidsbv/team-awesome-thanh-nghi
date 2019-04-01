import React from 'react';
import PropTypes from 'prop-types';

import './client.scss';

const Client = ({
  city, startDate, description, name, clientNumber
}) => (
  <React.Fragment>
    <ul className="client-content">
      <li className="client-content__item">
        <img
          alt="Logo"
          className="client-content__logo"
          src="../static/images/logo-at.jpeg"
        />
        <div className="client-content__wrapper-name">
          <div className="client-content__element client-content__title">{name}</div>
          <div className="client-content__element client-content__subtitle">{description}</div>
        </div>
        <div className="client-content__wrapper client-content__wrapper--first">
          <div className="client-content__element client-content__title">{city}</div>
          <div className="client-content__element client-content__subtitle">Location</div>
        </div>
        <div className="client-content__wrapper">
          <div className="client-content__element client-content__title">{clientNumber}</div>
          <div className="client-content__element client-content__subtitle">Client number</div>
        </div>
        <div className="client-content__wrapper">
          <div className="client-content__element client-content__title">{startDate}</div>
          <div className="client-content__element client-content__subtitle">Starting date</div>
        </div>
        <button
          className="client-content__button"
          type="button"
        >
          <img
            alt="Arrow down"
            className="client-content__button-img"
            src="../static/images/icon-arrow-down.svg"
          />
        </button>
      </li>
    </ul>
  </React.Fragment>
);

Client.propTypes = {
  city: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clientNumber: PropTypes.string.isRequired
};

export default Client;
