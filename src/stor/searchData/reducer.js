import { handleActions } from 'redux-actions';
import { successPostDataList } from './action';

const initialState = {
    searchData: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successPostDataList().type]: (state, action) => {
            console.log('successPostDataList', action);
            return {
                ...state,
                searchData: action.payload
            }
        },
    },

    initialState
)