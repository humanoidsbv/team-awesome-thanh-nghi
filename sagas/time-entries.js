import { takeLatest, call, put } from 'redux-saga/effects';
import {
  REQUEST_TIME_ENTRIES, requestTimeEntriesSuccess,
  ADD_NEW_TIME_ENTRY, addNewTimeEntrySuccess,
  DELETE_TIME_ENTRY, deleteTimeEntrySuccess
} from '../ducks/time-entries';
import { getTimeEntries, saveTimeEntry, removeTimeEntry } from '../shared/services/time-entries-api';

function* onGetTimeEntries() {
  const response = yield call(getTimeEntries);
  yield put(requestTimeEntriesSuccess(response));
}

function* onSaveTimeEntry({ timeEntry }) {
  const newTimeEntry = yield call(saveTimeEntry, timeEntry);
  yield put(addNewTimeEntrySuccess(newTimeEntry));
}

// function* onRemoveTimeEntry({ id }) {
//   yield call(removeTimeEntry, id);
//   yield put(deleteTimeEntrySuccess(id));
// }

export default function* watchTimeEntries() {
  yield takeLatest(REQUEST_TIME_ENTRIES, onGetTimeEntries);
  yield takeLatest(ADD_NEW_TIME_ENTRY, onSaveTimeEntry);
  // yield takeLatest(DELETE_TIME_ENTRY, onRemoveTimeEntry);
}
