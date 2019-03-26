import { combineReducers } from 'redux';

import { clientsReducer } from './clients';
import { timeEntriesReducer } from './time-entries';

const rootReducer = combineReducers({
  clients: clientsReducer,
  timeEntries: timeEntriesReducer
});

export default rootReducer;
