import { combineReducers } from 'redux';
import { timeEntriesReducer } from './time-entries';

const rootReducer = combineReducers({
  timeEntries: timeEntriesReducer
});

export default rootReducer;
