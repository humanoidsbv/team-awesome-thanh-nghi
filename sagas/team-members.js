import { takeLatest, call, put } from 'redux-saga/effects';

import {
  RETRIEVE_TEAM_MEMBERS_REQUEST, retrieveTeamMembersSuccess
} from '../ducks/team-members';
import { getTeamMembers } from '../shared/services/team-members-api';

function* getTeamMembersSaga() {
  const response = yield call(getTeamMembers);
  yield put(retrieveTeamMembersSuccess(response));
}

export default function* watchTeamMembers() {
  yield takeLatest(RETRIEVE_TEAM_MEMBERS_REQUEST, getTeamMembersSaga);
}
