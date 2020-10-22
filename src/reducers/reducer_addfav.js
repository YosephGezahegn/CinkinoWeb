import { ADD_FAV_MOVIE } from '../actions/index';
import { DELETE_FAV_MOVIE } from '../actions/index';

export const initialState = {
	favMovie: [],

};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_FAV_MOVIE:
			var addstate = state.favMovie.concat(action.payload);
			const existsInArray = state.favMovie.some(l => l.ID === action.payload.ID)
			if (existsInArray) {
				return state;
			}
			return {
				...state,
				favMovie: addstate
			}

		case DELETE_FAV_MOVIE:

			let deletestate = state.favMovie.filter((a) => a.ID !== action.index)
			return {
				...state,
				favMovie: deletestate,
			}
		case null:
			return state;

		default:
			return state;
	}
}
