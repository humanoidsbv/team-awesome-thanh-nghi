import { createSelector } from 'reselect';

// ACTIONS
export const RETRIEVE_CLIENTS_REQUEST = 'RETRIEVE_CLIENTS_REQUEST';
export const RETRIEVE_CLIENTS_SUCCESS = 'RETRIEVE_CLIENTS_SUCCESS';
export const ADD_CLIENT_REQUEST = 'ADD_CLIENT_REQUEST';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const SORT_CLIENTS = 'SORT_CLIENTS';

// TYPESCRIPT INTERFACES

export interface ClientModel {
  address: string;
  city: string;
  clientNumber: string;
  dateAdded: string;
  description: string;
  id?: string;
  emailAddress: string;
  name: string;
  website: string;
  zipcode: string;
}

export interface ClientsState {
  error: string;
  isLoading: boolean;
  items: ClientModel[];
  sortBy: string;
}

// INITIAL STATE

export const initialState: ClientsState = {
  error: '',
  isLoading: false,
  items: [],
  sortBy: 'name-ascending'
};

// ACTION CREATORS
export const retrieveClientsRequest = () => ({
  type: RETRIEVE_CLIENTS_REQUEST
});

export const retrieveClientsSuccess = (clients: ClientModel[]) => ({
  type: RETRIEVE_CLIENTS_SUCCESS,
  payload: clients
});

export const addClientRequest = (newClient: ClientModel) => ({
  type: ADD_CLIENT_REQUEST,
  payload: newClient
});

export const addClientSuccess = (newClient: ClientModel) => ({
  type: ADD_CLIENT_SUCCESS,
  payload: newClient
});

export const sortClients = (sortSelection: ClientsState["sortBy"]) => ({
  type: SORT_CLIENTS,
  payload: sortSelection
});

// REDUCERS
export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_CLIENTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case RETRIEVE_CLIENTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };

    case ADD_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ADD_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [
          action.payload,
          ...state.items
        ]
      };

    case SORT_CLIENTS:
      return {
        ...state,
        sortBy: action.payload
      };

    default:
      return state;
  }
};

// SELECTORS
export const clientsRootSelector = state => state.clients;

export const clientsItemsSelector = createSelector(
  clientsRootSelector,
  clients => clients.items
);

export const clientNameIdSelector = createSelector(
  clientsItemsSelector,
  items => items.map(item => ({
    label: item.name,
    value: item.id
  }))
);

export const clientsSortBySelector = createSelector(
  clientsRootSelector,
  clients => clients.sortBy
);

export const clientsSelector = createSelector(
  clientsItemsSelector,
  clientsSortBySelector,
  (items, sortBy) => (
    [...items].sort((a, b) => {
      const [property, order] = sortBy.split('-');
      if (a[property] === b[property]) {
        return 0;
      }
      if (order === 'ascending') {
        return (a[property] < b[property]) ? -1 : 1;
      }
      return (a[property] < b[property]) ? 1 : -1;
    })
  )
);
