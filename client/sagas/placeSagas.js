import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  GET_DETAILS,
} from 'actions/placeActionTypes';

function* getDetails(action) {
  try {
    const place = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setDetails(place));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeEvery(GET_DETAILS, getDetails);
}

export default placeSagas;
