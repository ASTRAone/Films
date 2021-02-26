// Получение списка дефолтных фильмов
export function getDataList(payload) {
    return {
        type: 'GET_DATA_LIST',
        payload
    };
};

export function successGetDataList(payload) {
    return {
        type: 'GET_DATA_LIST_SUCCESS',
        payload
    };
};