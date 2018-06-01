import { all } from 'redux-saga/effects';

import placeSagas from './placeSagas';

export default function* rootSagas() {
  yield all([
    placeSagas(),
  ]);
}
