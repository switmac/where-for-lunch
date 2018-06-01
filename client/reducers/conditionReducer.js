import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/conditionActionTypes';

const initialState = {
  distance: 1000,
};
const conditionReducer = handleActions(
  {
    [actionTypes.SET_DISTANCE](state, action) {
      return { ...state, distance: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latLng: `${latitude},${longitude}` };
    },
  },
  initialState,
);

export default conditionReducer;
