import React from 'react';
import Link from 'next/link';

import './new-client.scss';

const NewClient = () => (
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
          className="new-client-header__button new-client-header__button-save"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
    <div className="new-client">
      <form className="new-client__form">
        <div className="new-client__wrapper-group">
          <label
            className="new-client__label"
            htmlFor="name"
          >
            Name
            <input
              className="new-client__input"
              id="name"
              name="name"
              type="text"
            />
          </label>
          <label
            className="new-client__label"
            htmlFor="description"
          >
            Description
            <input
              className="new-client__input"
              id="description"
              name="description"
              type="text"
            />
          </label>
          <label
            className="new-client__label"
            htmlFor="number"
          >
            Client number
            <input
              className="new-client__input"
              id="number"
              name="number"
              type="text"
            />
          </label>
          <label
            className="new-client__label"
            htmlFor="date"
          >
            Starting date
            <input
              className="new-client__input"
              id="date"
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
              className="new-client__input"
              id="address"
              name="address"
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
                className="new-client__input"
                id="zipcode"
                name="zipcode"
                type="text"
              />
            </label>
            <label
              className="new-client__label"
              htmlFor="city"
            >
              City
              <input
                className="new-client__input new-client__input--pair new-client__label--city"
                id="city"
                name="city"
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
              className="new-client__input"
              id="mail"
              name="mail"
              type="text"
            />
          </label>
          <label
            className="new-client__label"
            htmlFor="website"
          >
            Website
            <input
              className="new-client__input"
              id="website"
              name="website"
              type="text"
            />
          </label>
        </div>
      </form>
    </div>
  </React.Fragment>
);
export default NewClient;
