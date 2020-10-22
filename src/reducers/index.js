import { combineReducers } from 'redux';
import searchedMovie from './reducer_searchMovie';
import addedtofav from './reducer_addfav';
import fetchedMovies from './reducer_fetchMovies';
import selectedMovie from './reducer_selected'
import currentLocation from './map_reducer';
import fetchedNews from './reducer_news'


const rootReducer = combineReducers({
	movieSearched: searchedMovie,
	movieList: fetchedMovies,
	movieFavourite: addedtofav,
	movieSelected: selectedMovie,
	location: currentLocation,
	newsList: fetchedNews
});

export default rootReducer;
