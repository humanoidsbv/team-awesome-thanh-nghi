import React from 'react';
import PropTypes from 'prop-types';

import './client.scss';

const Client = ({
  address, city, date, mail, name, website, zipcode
}) => (
  <React.Fragment>
    <ul className="client-content">
      <li className="client-content__item">
        <div className="entry-content__name">{name}</div>
        <div className="entry-content__adress-wrapper">
          <div className="entry-content__address">{address}</div>
          <div className="entry-content__zipcode">{zipcode}</div>
          <div className="entry-content__city">{city}</div>
        </div>
        <div className="entry-content__wrapper">
          <div className="entry-content__mail">{mail}</div>
          <div className="entry-content__website">{website}</div>
        </div>
        <div>
          <div className="entry-content__startdate">{date}</div>
          <div className="entry-content__startdate">Starting date</div>
        </div>
      </li>
    </ul>
  </React.Fragment>
);

Client.propTypes = {
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired
};

export default Client;
