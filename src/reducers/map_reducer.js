import { CURRENT_LOCATION } from '../actions/index';

export const initialState = {
    current_location: {},
};
export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case CURRENT_LOCATION:
            return {
                ...state,
                current_location: action.payload,
            }
        case null:
            return state;

        default:
            return state;
    }
}
