import { createSelector } from 'reselect';
import { clientsSelector } from './clients';

// ACTIONS
export const RETRIEVE_TIME_ENTRIES_REQUEST = 'RETRIEVE_TIME_ENTRIES_REQUEST';
export const RETRIEVE_TIME_ENTRIES_SUCCESS = 'RETRIEVE_TIME_ENTRIES_SUCCESS';
export const ADD_TIME_ENTRY_REQUEST = 'ADD_TIME_ENTRY_REQUEST';
export const ADD_TIME_ENTRY_SUCCESS = 'ADD_TIME_ENTRY_SUCCESS';
export const DELETE_TIME_ENTRY_REQUEST = 'DELETE_TIME_ENTRY_REQUEST';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const FILTER_TIME_ENTRIES = 'FILTER_TIME_ENTRIES';

// TYPESCRIPT INTERFACES

export interface TimeEntryModel {
  activity: string;
  client: string;
  clientName: string;
  endTime: string;
  id: string;
  startTime: string;
}

export interface TimeEntriesState {
  items: TimeEntryModel[];
  isLoading: boolean;
  error: string;
  filterBy: string;
}

// INITIAL STATE
export const initialState: TimeEntriesState = {
  items: [],
  isLoading: false,
  error: '',
  filterBy: ''
};

// ACTION CREATORS
export const retrieveTimeEntriesRequest = () => ({
  type: RETRIEVE_TIME_ENTRIES_REQUEST
});

export const retrieveTimeEntriesSuccess = (timeEntries: TimeEntryModel[]) => ({
  type: RETRIEVE_TIME_ENTRIES_SUCCESS,
  payload: timeEntries
});

export const addTimeEntryRequest = (newTimeEntry: TimeEntryModel) => ({
  type: ADD_TIME_ENTRY_REQUEST,
  payload: newTimeEntry
});

export const addTimeEntrySuccess = (newTimeEntry: TimeEntryModel) => ({
  type: ADD_TIME_ENTRY_SUCCESS,
  payload: newTimeEntry
});

export const deleteTimeEntryRequest = (id: TimeEntryModel["id"]) => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: id
});

export const deleteTimeEntrySuccess = (id: TimeEntryModel["id"]) => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: id
});

export const filterTimeEntries = (filter: TimeEntriesState["filterBy"]) => ({
  type: FILTER_TIME_ENTRIES,
  payload: filter
});

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
    const { name } = clients.find(client => timeEntry.client === client.id) || { name: 'Unknown' };
    return {
      ...timeEntry,
      clientName: name
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
