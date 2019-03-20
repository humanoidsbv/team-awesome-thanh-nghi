// ACTIONS
export const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';
export const REQUEST_TIME_ENTRIES_ERROR = 'REQUEST_TIME_ENTRIES_ERROR';
export const ADD_NEW_TIME_ENTRY = 'ADD_NEW_TIME_ENTRY';
export const ADD_NEW_TIME_ENTRY_SUCCESS = 'ADD_NEW_TIME_ENTRY_SUCCESS';
export const ADD_NEW_TIME_ENTRY_ERROR = 'ADD_NEW_TIME_ENTRY_ERROR';
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const DELETE_TIME_ENTRY_ERROR = 'DELETE_TIME_ENTRY_ERROR';

// ACTION CREATORS
export const requestTimeEntries = () => ({
  type: REQUEST_TIME_ENTRIES
});

export const requestTimeEntriesSuccess = timeEntries => ({
  type: REQUEST_TIME_ENTRIES_SUCCESS,
  payload: timeEntries
});

export const requestTimeEntriesError = error => ({
  type: REQUEST_TIME_ENTRIES_ERROR,
  payload: error
});

export const addNewTimeEntry = () => ({
  type: ADD_NEW_TIME_ENTRY
});

export const addNewTimeEntrySuccess = newTimeEntry => ({
  type: ADD_NEW_TIME_ENTRY_SUCCESS,
  payload: newTimeEntry
});

export const addNewTimeEntryError = error => ({
  type: ADD_NEW_TIME_ENTRY_ERROR,
  payload: error
});

export const deleteTimeEntry = () => ({
  type: DELETE_TIME_ENTRY
});

export const deleteTimeEntrySuccess = id => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: id
});

export const deleteTimeEntryError = error => ({
  type: DELETE_TIME_ENTRY_ERROR,
  payload: error
});

export const initialState = {
  items: [],
  isLoading: false,
  error: ''
};

// REDUCERS
export const timeEntriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TIME_ENTRIES:
      return {
        ...state,
        isLoading: true
      };

    case REQUEST_TIME_ENTRIES_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };

    case ADD_NEW_TIME_ENTRY:
      return {
        ...state,
        isLoading: true
      };

    case ADD_NEW_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [
          action.payload,
          ...state.items
        ]
      };

    case DELETE_TIME_ENTRY:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [
          ...state.items.filter(timeEntry => timeEntry.id !== action.payload)
        ]
      };
    default:
      return state;
  }
};
