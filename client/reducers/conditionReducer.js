import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/conditionActionTypes';

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
      return { ...state, latitude, longitude };
    },
  },
  initialState,
);

export default conditionReducer;
