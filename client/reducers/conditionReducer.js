import { handleActions, createActions } from 'redux-actions';
import * as conditionActionTypes from '../actions/conditionActionTypes';

const actionTypes = createActions({}, ...Object.values(conditionActionTypes));
const initialState = {
  distance: 1,
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
