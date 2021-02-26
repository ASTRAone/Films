import {combineReducers, createStore, applyMiddleware } from 'redux';

import reducerDefData from './defaultData/reducer';
import reducerSearchData from './searchData/reducer';

export const createRootReducer = (history) =>
  combineReducers({
    defDataList: reducerDefData,
    searchDataList: reducerSearchData,

});
