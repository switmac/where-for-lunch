import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from '../services/placeApi';
import {
  FETCH_PLACES,
} from '../actions/placeActionTypes';
import placeActions from '../actions/placeActions';


import { getRandom } from '../lib/utils';

function* fetchPlace(action) {
  try {
    const placeIds = yield call(getPlaceIds, action.payload);
    console.log('oh hehehe ', placeIds);
    const randomPlaceId = getRandom(placeIds);
    console.log('?????? ', randomPlaceId);
    const placeDetails = yield call(getPlaceDetails, randomPlaceId);
    yield put(placeActions.setDetails(placeDetails));
  } catch (e) {
    console.log('eeeeee ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

export default placeSagas;
