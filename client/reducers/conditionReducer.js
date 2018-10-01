import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
};
const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, getLatLangInProgress: false, latitude, longitude };
    },
    [actionTypes.GET_LAT_LNG](state, action) {
      return { ...state, getLatLangInProgress: true, ...action.payload };
    },
  },
  initialState,
);

export default conditionReducer;
