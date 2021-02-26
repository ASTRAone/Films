import { createRootReducer } from './stor/index';
import { createBrowserHistory } from "history";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {createStore, compose, applyMiddleware} from 'redux';

import defaultDataSaga from './stor/defaultData/saga';
import searchDataSaga from './stor/searchData/saga';


const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(logger, sagaMiddleware))
);    

sagaMiddleware.run(defaultDataSaga);  
sagaMiddleware.run(searchDataSaga);  
 