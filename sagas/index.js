import { all } from 'redux-saga/effects';
import watchTimeEntries from './time-entries';

export default function* rootSaga() {
  yield all([
    watchTimeEntries()
  ]);
}
