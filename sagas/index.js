import { all } from 'redux-saga/effects';
import watchClients from './clients';
import watchTimeEntries from './time-entries';

export default function* rootSaga() {
  yield all([
    watchClients(),
    watchTimeEntries()
  ]);
}
