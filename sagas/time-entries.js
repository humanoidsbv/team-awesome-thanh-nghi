import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_TIME_ENTRIES, requestTimeEntriesSuccess, ADD_NEW_TIME_ENTRY, DELETE_TIME_ENTRY } from '../ducks/time-entries';
import { getTimeEntries, saveTimeEntry, removeTimeEntry } from '../shared/services/time-entries-api';

function* onGetTimeEntries() {
  const response = yield call(getTimeEntries);
  yield put(requestTimeEntriesSuccess(response));
}

function* onSaveTimeEntry() {
  const response = yield call(saveTimeEntry);
  yield put(requestTimeEntriesSuccess(response));
}

// function* onRemoveTimeEntry() {
//   const response = yield call(removeTimeEntry);
//   yield put(requestTimeEntriesSuccess(response));
// }

export default function* watchTimeEntries() {
  yield takeLatest(REQUEST_TIME_ENTRIES, onGetTimeEntries);
  yield takeLatest(ADD_NEW_TIME_ENTRY, onSaveTimeEntry);
  // yield takeLatest(DELETE_TIME_ENTRY, onDeleteTimeEntry);
}
