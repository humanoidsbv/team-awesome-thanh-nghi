import React from 'react';

import './client-entries.scss';
import ClientEntry from '../client-entry';

const ClientEntries = () => (
  <React.Fragment>
    <div className="clients-header">
      <h2 className="clients-header__title">All Clients</h2>
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
      <select className="clients-header__sort">
        <option value=""> Sort by: </option>
        <option value="name"> Name </option>
        <option value="date"> Date </option>
      </select>
    </div>
    <div className="clients-entries">
      <ClientEntry />
    </div>
  </React.Fragment>
);

export default ClientEntries;
