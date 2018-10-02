import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  priceSelectedFilter: [],
  priceFilterList: [
    { id: 1, label: '₱' },
    { id: 2, label: '₱₱' },
    { id: 3, label: '₱₱₱' },
    { id: 4, label: '₱₱₱₱' },
  ],
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
    [actionTypes.SET_PRICE_RANGE](state, action) {
      const { priceSelectedFilter } = state;
      const { id } = action.payload;
      const priceSelectedFilterExist = priceSelectedFilter.find(filter => filter.id === id);

      const updatedPriceSelectedFilter = priceSelectedFilterExist ?
        priceSelectedFilter.filter(filter => filter.id !== id) : [...priceSelectedFilter, action.payload];

      return { ...state, priceSelectedFilter: updatedPriceSelectedFilter };
    },
  },
  initialState,
);

export default conditionReducer;
