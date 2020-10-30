

import { SELECTED_MOVIE } from '../action/index';

export const initialState =
{
    selectedMovie:{}
}


export default function  selected (state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload,
            };

        case null:
            return state;

        default:
            return state;
    }
}
