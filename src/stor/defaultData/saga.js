import { takeLatest, put, call, delay } from "redux-saga/effects";
import { getDataList, successGetDataList } from './action';

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

function* setListData(api, action) {
    try {
        console.warn('[saga ===> setListData ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        console.log('Запрос производится по адресу', api)
        
        const apiRes = yield call(() => postman.get("/posts"));

        yield put(successGetDataList(apiRes.data));
        // action.meta && action.meta(apiRes.data);
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[setListData defaultDataSaga] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

function* defaultDataSaga(ea) { 
    // Получение списка фильмов
    yield takeLatest(getDataList().type, setListData, ea); 
}

export default defaultDataSaga;
