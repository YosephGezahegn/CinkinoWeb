import { SEARCH_MOVIE_SUCESS } from '../action/index';

export const initialState =
{
	searchValue: []
}


export default function searchMovie(state = initialState, action) {
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
