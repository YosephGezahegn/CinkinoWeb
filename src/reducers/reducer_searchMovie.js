import { SEARCH_MOVIE_SUCESS } from '../actions/index';

export const initialState =
{
	searchValue: []
}


export default function (state = initialState, action) {
	switch (action.type) {
		case SEARCH_MOVIE_SUCESS:
			return {
				...state,
				searchValue: action.payload,
			};

		case null:
			return state;

		default:
			return state;
	}
}
