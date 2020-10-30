import { combineReducers } from 'redux';
import searchedMovie from './reducer_searchMovie';
import addedtofav from './reducer_addfav';
import fetchedMovies from './reducer_fetchMovies';
import selectedMovie from './reducer_selected'
import fetchedNews from './reducer_news'


const rootReducer = combineReducers({
	movieSearched: searchedMovie,
	movieList: fetchedMovies,
	movieFavourite: addedtofav,
	movieSelected: selectedMovie,
	newsList: fetchedNews
});

export default rootReducer;
