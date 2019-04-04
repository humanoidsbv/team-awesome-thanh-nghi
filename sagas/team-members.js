import { takeLatest, call, put } from 'redux-saga/effects';

import {
  RETRIEVE_TEAM_MEMBERS_REQUEST, retrieveTeamMembersSuccess,
  ADD_TEAM_MEMBER_REQUEST, addTeamMemberSuccess
} from '../ducks/team-members';
import { getTeamMembers, saveTeamMember } from '../shared/services/team-members-api';

function* getTeamMembersSaga() {
  const response = yield call(getTeamMembers);
  yield put(retrieveTeamMembersSuccess(response));
}

function* saveTeamMemberSaga(action) {
  const newTeamMember = yield call(saveTeamMember, action.payload);
  yield put(addTeamMemberSuccess(newTeamMember));
}

export default function* watchTeamMembers() {
  yield takeLatest(RETRIEVE_TEAM_MEMBERS_REQUEST, getTeamMembersSaga);
  yield takeLatest(ADD_TEAM_MEMBER_REQUEST, saveTeamMemberSaga);
}
