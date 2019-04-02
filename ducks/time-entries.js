import { createSelector } from 'reselect';
import { clientsSelector } from './clients';

// ACTIONS
export const RETRIEVE_TIME_ENTRIES_REQUEST = 'RETRIEVE_TIME_ENTRIES_REQUEST';
export const RETRIEVE_TIME_ENTRIES_SUCCESS = 'RETRIEVE_TIME_ENTRIES_SUCCESS';
export const RETRIEVE_TIME_ENTRIES_ERROR = 'RETRIEVE_TIME_ENTRIES_ERROR';
export const ADD_TIME_ENTRY_REQUEST = 'ADD_TIME_ENTRY_REQUEST';
export const ADD_TIME_ENTRY_SUCCESS = 'ADD_TIME_ENTRY_SUCCESS';
export const ADD_TIME_ENTRY_ERROR = 'ADD_TIME_ENTRY_ERROR';
export const DELETE_TIME_ENTRY_REQUEST = 'DELETE_TIME_ENTRY_REQUEST';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const DELETE_TIME_ENTRY_ERROR = 'DELETE_TIME_ENTRY_ERROR';
export const FILTER_TIME_ENTRIES = 'FILTER_TIME_ENTRIES';

// ACTION CREATORS
export const retrieveTimeEntriesRequest = () => ({
  type: RETRIEVE_TIME_ENTRIES_REQUEST
});

export const retrieveTimeEntriesSuccess = timeEntries => ({
  type: RETRIEVE_TIME_ENTRIES_SUCCESS,
  payload: timeEntries
});

export const retrieveTimeEntriesError = error => ({
  type: RETRIEVE_TIME_ENTRIES_ERROR,
  payload: error
});

export const addTimeEntryRequest = newTimeEntry => ({
  type: ADD_TIME_ENTRY_REQUEST,
  payload: newTimeEntry
});

export const addTimeEntrySuccess = newTimeEntry => ({
  type: ADD_TIME_ENTRY_SUCCESS,
  payload: newTimeEntry
});

export const addTimeEntryError = error => ({
  type: ADD_TIME_ENTRY_ERROR,
  payload: error
});

export const deleteTimeEntryRequest = id => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: id
});

export const deleteTimeEntrySuccess = id => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: id
});

export const deleteTimeEntryError = error => ({
  type: DELETE_TIME_ENTRY_ERROR,
  payload: error
});

export const filterTimeEntries = filter => ({
  type: FILTER_TIME_ENTRIES,
  payload: filter
});

// INITIAL STATE
export const initialState = {
  items: [],
  isLoading: false,
  error: '',
  filterBy: ''
};

// REDUCERS
export const timeEntriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_TIME_ENTRIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case RETRIEVE_TIME_ENTRIES_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };

    case ADD_TIME_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ADD_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [
          action.payload,
          ...state.items
        ]
      };

    case DELETE_TIME_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: [
          ...state.items.filter(timeEntry => timeEntry.id !== action.payload)
        ]
      };

    case DELETE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case FILTER_TIME_ENTRIES:
      return {
        ...state,
        filterBy: action.payload
      };

    default:
      return state;
  }
};

// SELECTORS
export const timeEntriesRootSelector = state => state.timeEntries;

export const timeEntriesItemsSelector = createSelector(
  timeEntriesRootSelector,
  timeEntries => timeEntries.items
);

export const timeEntriesClientIdSelector = createSelector(
  timeEntriesItemsSelector,
  clientsSelector,
  (timeEntries, clients) => timeEntries.map((timeEntry) => {
    const { name } = clients.find(client => timeEntry.client === client.id) || {};
    return {
      ...timeEntry,
      clientName: name || 'Unknown'
    };
  })
);

export const timeEntriesFilterSelector = createSelector(
  timeEntriesRootSelector,
  timeEntries => timeEntries.filterBy
);

export const timeEntriesSelector = createSelector(
  timeEntriesClientIdSelector,
  timeEntriesFilterSelector,
  (timeEntries, filterBy) => timeEntries
    .filter(timeEntry => !filterBy || timeEntry.client === filterBy)
);
