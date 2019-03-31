import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

import './clients.scss';
import Client from '../client';

import { dateToLocaleStringMonthYear } from '../../shared/services/converter-time';

class Clients extends React.Component {
  handleChangeSortBy = ({ target }) => {
    const { sortClients } = this.props;
    sortClients(target.value);
  }

  handleChangeSortDirection = ({ target }) => {
    const { sortDirectionClients } = this.props;
    sortDirectionClients(target.value);
  }

  render() {
    const { clients, sortBy, sortDirection } = this.props;

    return (
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
          <select
            className="clients-header__sort"
            onChange={this.handleChangeSortBy}
            value={sortBy}
          >
            <option value=""> Sort by: </option>
            <option value="name"> Client Name </option>
            <option value="city"> Location </option>
            <option value="number"> Client Number </option>
          </select>
          <select
            className="clients-header__sort"
            onChange={this.handleChangeSortDirection}
            value={sortDirection}
          >
            <option value=""> Sort direction: </option>
            <option value="ascending"> Ascending </option>
            <option value="descending"> Descending </option>
          </select>
        </div>
        <div className="clients-list">
          {clients.map((client) => {
            const localizeDate = dateToLocaleStringMonthYear(client.date);
            return (
              <React.Fragment key={client.id}>
                <Client
                  address={client.address}
                  city={client.city}
                  date={localizeDate}
                  description={client.description}
                  id={client.id}
                  key={client.id}
                  mail={client.mail}
                  name={client.name}
                  number={client.number}
                  website={client.website}
                  zipcode={client.zipcode}
                />
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sortBy: PropTypes.string.isRequired,
  sortClients: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortDirectionClients: PropTypes.func.isRequired
};

export default Clients;
