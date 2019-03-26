import { takeLatest, call, put } from 'redux-saga/effects';

import {
  RETRIEVE_CLIENTS_REQUEST, retrieveClientsSuccess,
  ADD_CLIENT_REQUEST, addClientSuccess
} from '../ducks/clients';
import { getClients, saveClient } from '../shared/services/clients-api';

function* getClientsSaga() {
  const response = yield call(getClients);
  yield put(retrieveClientsSuccess(response));
}

function* saveClientSaga(action) {
  const newClient = yield call(saveClient, action.payload);
  yield put(addClientSuccess(newClient));
}

export default function* watchClients() {
  yield takeLatest(RETRIEVE_CLIENTS_REQUEST, getClientsSaga);
  yield takeLatest(ADD_CLIENT_REQUEST, saveClientSaga);
}
