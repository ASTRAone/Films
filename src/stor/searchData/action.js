// Получение списка дефолтных фильмов
export function postDataList(payload) {
    return {
        type: 'POST_DATA_LIST',
        payload
    };
};

export function successPostDataList(payload) {
    return {
        type: 'POST_DATA_LIST_SUCCESS',
        payload
    };
};