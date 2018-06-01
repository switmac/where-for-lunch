import { createActions } from 'redux-actions';
import * as conditionActionTypes from './conditionActionTypes';

export const actionTypes = createActions({}, ...Object.values(conditionActionTypes));
