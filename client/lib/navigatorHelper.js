import {
  SET_LAT_LNG,
  GET_LAT_LNG,
} from 'actions/conditionActionTypes';

export function fetchLatLng(store) {
  store.dispatch({
    type: GET_LAT_LNG,
  });

  navigator.geolocation.getCurrentPosition((position) => {
    store.dispatch({
      type: SET_LAT_LNG,
      payload: position.coords,
    });
  }, (err) => {
    console.log('give it to me! ', err);
  });
}
