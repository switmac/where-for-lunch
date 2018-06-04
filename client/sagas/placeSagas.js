import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds } from '../services/placeApi';
import {
  FETCH_PLACES,
} from '../actions/placeActionTypes';
import placeActions from '../actions/placeActions';


import { getRandom } from '../lib/utils';

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    // const placeDetails = yield call(getPlaceDetails, randomPlace);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

export default placeSagas;
