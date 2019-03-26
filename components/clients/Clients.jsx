import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

import './clients.scss';
import Client from '../client';

const Clients = ({ clients }) => (
  <React.Fragment>
    <div className="clients-header">
      <h2 className="clients-header__title">All Clients</h2>
      <Link href="/new-client">
        <button
          className="clients-header__add-button"
          type="button"
        >
          <img
            alt="Plus icon"
            className="clients-header__add-icon"
            src="/static/images/icon-plus.svg"
          />
          New Client
        </button>
      </Link>
      <select className="clients-header__sort">
        <option value=""> Sort by: </option>
        <option value="name"> Name </option>
        <option value="date"> Date </option>
      </select>
    </div>
    <div className="clients-list">
      <React.Fragment>
        {clients.map(({
          address, city, date, id, mail, name, website, zipcode
        }) => (
          <React.Fragment key={id}>
            <Client
              address={address}
              city={city}
              date={date}
              id={id}
              mail={mail}
              name={name}
              website={website}
              zipcode={zipcode}
            />
          </React.Fragment>
        ))}
      </React.Fragment>
    </div>
  </React.Fragment>
);

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Clients;
