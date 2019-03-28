import { createSelector } from 'reselect';

// ACTIONS
export const RETRIEVE_CLIENTS_REQUEST = 'RETRIEVE_CLIENTS_REQUEST';
export const RETRIEVE_CLIENTS_SUCCESS = 'RETRIEVE_CLIENTS_SUCCESS';
export const ADD_CLIENT_REQUEST = 'ADD_CLIENT_REQUEST';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';

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

export const initialState = {
  items: [],
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

    default:
      return state;
  }
};

// SELECTORS
export const rootSelector = state => state.clients;

export const clientsSelector = createSelector(
  rootSelector,
  clients => clients.items
);

export const clientsOptionsSelector = createSelector(
  clientsSelector,
  items => items.map(item => ({
    id: item.id,
    name: item.name
  }))
);
