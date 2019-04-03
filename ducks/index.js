import { combineReducers } from 'redux';

import { clientsReducer } from './clients';
import { teamMembersReducer } from './team-members';
import { timeEntriesReducer } from './time-entries';

const rootReducer = combineReducers({
  clients: clientsReducer,
  teamMembers: teamMembersReducer,
  timeEntries: timeEntriesReducer
});

export default rootReducer;
