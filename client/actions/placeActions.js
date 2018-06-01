import { createActions } from 'redux-actions';
import * as placeActionTypes from './placeActionTypes';

const actionTypes = createActions({}, ...Object.values(placeActionTypes));
export default actionTypes;
