import { handleActions } from 'redux-actions';
import { successGetDataList } from './action';

const initialState = {
    defData: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successGetDataList().type]: (state, action) => {
            console.log('successGetSFilmsList', action);
            return {
                ...state,
                defData: action.payload
            }
        },
    },

    initialState
)