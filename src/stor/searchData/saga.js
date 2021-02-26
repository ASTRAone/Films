import { takeLatest, put, call, delay } from "redux-saga/effects";
import { postDataList, successPostDataList } from './action';

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

function* setListDataSearch(api, action) {
    try {
        console.warn('[saga ===> setListDataSearch ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        console.log('Запрос производится по адресу', api)
        
        const apiRes = yield call(() => postman.get(`/posts/${action.payload}`));

        yield put(successPostDataList(apiRes.data));
        // action.meta && action.meta(apiRes.data);
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[setListDataSearch searchDataSaga] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

function* searchDataSaga(ea) { 
    // Получение списка фильмов
    yield takeLatest(postDataList().type, setListDataSearch, ea); 
}

export default searchDataSaga;
