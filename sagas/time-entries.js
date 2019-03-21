import { takeLatest, call, put } from 'redux-saga/effects';
import {
  RETRIEVE_TIME_ENTRIES_REQUEST, retrieveTimeEntriesSuccess,
  ADD_NEW_TIME_ENTRY_REQUEST, addNewTimeEntrySuccess,
  DELETE_TIME_ENTRY_REQUEST, deleteTimeEntrySuccess
} from '../ducks/time-entries';
import { getTimeEntries, saveTimeEntry, removeTimeEntry } from '../shared/services/time-entries-api';

function* onGetTimeEntries() {
  const response = yield call(getTimeEntries);
  yield put(retrieveTimeEntriesSuccess(response));
}

function* onSaveTimeEntry(action) {
  const newTimeEntry = yield call(saveTimeEntry, action.payload);
  yield put(addNewTimeEntrySuccess(newTimeEntry));
}

function* onRemoveTimeEntry(action) {
  const deleteTimeEntry = yield call(removeTimeEntry, action.payload);
  yield put(deleteTimeEntrySuccess(deleteTimeEntry));
}

export default function* watchTimeEntries() {
  yield takeLatest(RETRIEVE_TIME_ENTRIES_REQUEST, onGetTimeEntries);
  yield takeLatest(ADD_NEW_TIME_ENTRY_REQUEST, onSaveTimeEntry);
  yield takeLatest(DELETE_TIME_ENTRY_REQUEST, onRemoveTimeEntry);
}
