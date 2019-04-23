import React from 'react';
import Link from 'next/link';

import './clients.scss';

import Client from '../client';
import Container from '../../shared/components/container';
import PageHeader from '../../shared/components/page-header';

import { ClientModel, ClientsState } from '../../ducks/clients';
import { dateToLocaleStringMonthYear } from '../../shared/services/converter-time';

interface ClientsProps {
  clients: ClientModel[];
  sortClients: Function;
}

class Clients extends React.Component<ClientsProps, ClientsState> {
  handleChange = ({ target }) => {
    const { sortClients } = this.props;
    sortClients(target.value);
  }

  render() {
    const { clients } = this.props;
    const count = clients.length;

    return (
      <React.Fragment>
        <PageHeader
          title="Clients"
          subtitle={`${count} ${count === 1 ? 'Client' : 'Clients'}`}
        />
        <Container>
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
              onChange={this.handleChange}
            >
              <option value="">Sort by:</option>
              <option value="name-ascending">Client Name A-Z</option>
              <option value="name-descending">Client Name Z-A</option>
              <option value="city-ascending">Location A-Z</option>
              <option value="city-descending">Location Z-A</option>
              <option value="clientNumber-ascending">Client Number 0-9</option>
              <option value="clientNumber-descending">Client Number 9-0</option>
              <option value="dateAdded-ascending">Date Added Old-New</option>
              <option value="dateAdded-descending">Date Added New-Old</option>
            </select>
          </div>
          <div className="clients-list">
            {clients.map((client) => {
              const localizeddateAdded = dateToLocaleStringMonthYear(client.dateAdded);
              return (
                <React.Fragment key={client.id}>
                  <Client
                    address={client.address}
                    city={client.city}
                    dateAdded={localizeddateAdded}
                    description={client.description}
                    id={client.id}
                    key={client.id}
                    emailAddress={client.emailAddress}
                    name={client.name}
                    clientNumber={client.clientNumber}
                    website={client.website}
                    zipcode={client.zipcode}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Clients;
