import { takeLatest, call, put } from 'redux-saga/effects';

import {
  RETRIEVE_TIME_ENTRIES_REQUEST, retrieveTimeEntriesSuccess,
  ADD_TIME_ENTRY_REQUEST, addTimeEntrySuccess,
  DELETE_TIME_ENTRY_REQUEST, deleteTimeEntrySuccess
} from '../ducks/time-entries.ts';
import { getTimeEntries, saveTimeEntry, removeTimeEntry } from '../shared/services/time-entries-api';

function* getTimeEntriesSaga() {
  const response = yield call(getTimeEntries);
  yield put(retrieveTimeEntriesSuccess(response));
}

function* saveTimeEntrySaga(action) {
  const newTimeEntry = yield call(saveTimeEntry, action.payload);
  yield put(addTimeEntrySuccess(newTimeEntry));
}

function* removeTimeEntrySaga(action) {
  const deleteTimeEntry = yield call(removeTimeEntry, action.payload);
  yield put(deleteTimeEntrySuccess(deleteTimeEntry));
}

export default function* watchTimeEntries() {
  yield takeLatest(RETRIEVE_TIME_ENTRIES_REQUEST, getTimeEntriesSaga);
  yield takeLatest(ADD_TIME_ENTRY_REQUEST, saveTimeEntrySaga);
  yield takeLatest(DELETE_TIME_ENTRY_REQUEST, removeTimeEntrySaga);
}
