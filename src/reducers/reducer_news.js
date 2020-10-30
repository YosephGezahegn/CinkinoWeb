import { FETCH_NEWS } from '../action/index';

export const initialstate = {
    loading: false,
    newsList: [],

};
export default function news (state = initialstate, action) {
    // console.log(action.payload)
    switch (action.type) {

        case FETCH_NEWS:
            return {
                ...state,
                loading: false,
                newsList: action.payload
            };

        case null:
            return state;

        default:
            return state;
    }
}
