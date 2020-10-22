import { FETCH_NEWS } from '../actions/index'

export const initialstate = {
    loading: false,
    newsList: [],

};
export default function (state = initialstate, action) {
    console.log(action.payload)
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
