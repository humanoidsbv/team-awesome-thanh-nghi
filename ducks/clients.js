import { createSelector } from 'reselect';

// ACTIONS
export const RETRIEVE_CLIENTS_REQUEST = 'RETRIEVE_CLIENTS_REQUEST';
export const RETRIEVE_CLIENTS_SUCCESS = 'RETRIEVE_CLIENTS_SUCCESS';
export const ADD_CLIENT_REQUEST = 'ADD_CLIENT_REQUEST';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const SORT_CLIENTS = 'SORT_CLIENTS';
export const SORT_DIRECTION_CLIENTS = 'SORT_DIRECTION_CLIENTS';

// ACTION CREATORS
export const retrieveClientsRequest = () => ({
  type: RETRIEVE_CLIENTS_REQUEST
});

export const retrieveClientsSuccess = clients => ({
  type: RETRIEVE_CLIENTS_SUCCESS,
  payload: clients
});

export const addClientRequest = newClient => ({
  type: ADD_CLIENT_REQUEST,
  payload: newClient
});

export const addClientSuccess = newClient => ({
  type: ADD_CLIENT_SUCCESS,
  payload: newClient
});

export const sortClients = sortBy => ({
  type: SORT_CLIENTS,
  payload: sortBy
});

export const sortDirectionClients = sortDirection => ({
  type: SORT_DIRECTION_CLIENTS,
  payload: sortDirection
});

// INITIAL STATE

export const initialState = {
  items: [],
  sortBy: 'name',
  sortDirection: 'ascending',
  isLoading: false,
  error: ''
};

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

    case SORT_DIRECTION_CLIENTS:
      return {
        ...state,
        sortDirection: action.payload
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
    id: item.id,
    name: item.name
  }))
);

export const clientsSortBySelector = createSelector(
  clientsRootSelector,
  clients => clients.sortBy
);

export const clientsSortDirectionSelector = createSelector(
  clientsRootSelector,
  clients => clients.sortDirection
);

export const clientsSelector = createSelector(
  clientsItemsSelector,
  clientsSortBySelector,
  clientsSortDirectionSelector,
  (clients, sortBy, sortDirection) => (
    [...clients].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortDirection === 'ascending' ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortDirection === 'ascending' ? 1 : -1;
      }
      return 0;
    })
  )
);
