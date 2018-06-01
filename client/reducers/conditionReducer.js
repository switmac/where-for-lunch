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
  },
  initialState,
);

export default conditionReducer;
