import axios from 'axios';
import parser from 'fast-xml-parser';


const ROOT_URL = `https://www.finnkino.fi/xml`;

export const FETCH_MOVIE_REQ = 'FETCH_MOVIE_REQ';
export const FETCH_MOVIE_SUCESS = 'FETCH_MOVIE_SUCESS';
export const FETCH_MOVIE_FAIL = 'FETCH_MOVIE_FAIL';
export const DELETE_FAV_MOVIE = 'DELETE_FAV_MOVIE';
export const SEARCH_MOVIE_SUCESS = 'SEARCH_MOVIE_SUCESS';
export const ADD_FAV_MOVIE = 'ADD_FAV_MOVIE';
export const FILTER_MOVIE_BY_YEAR = 'FILTER_MOVIE_BY_YEAR';
export const SELECTED_MOVIE = 'SELECTED_MOVIE';
export const LOADING = 'LOADING';
export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_AREA = 'FETCH_AREA'
export const FETCH_LOCATION = 'FETCH_LOCATION'
export const CURRENT_LOCATION = 'CURRENT_LOCATION'


export function fetchMovie(areaId, date) {
	console.log(date)
	console.log(areaId)

	const url = `${ROOT_URL}/Schedule/?area=${areaId}&dt=${date}`;
	const request = axios.get(url).then((xmlData) => {
		var result = parser.validate(xmlData.data);
		if (result !== true) console.log("failed to fetch from server");
		var jsonObj = parser.parse(xmlData.data);
		var movieUnmapped = jsonObj.Schedule.Shows.Show;
		let res = movieUnmapped.filter((ele, ind) => ind === movieUnmapped.findIndex(elem => elem.EventID === ele.EventID))

		console.log(res)
		return res;

	})
		.catch(function (error) {
			alert("API not working")
			console.log(error);
		});

	return {
		type: FETCH_MOVIE_SUCESS,
		payload: request,
	};
}

export function searchMovie(title) {
	console.log(title)
	const url = `${ROOT_URL}/Events`;
	const searchRequest = axios.get(url).then((xmlData) => {
		var result = parser.validate(xmlData.data);

		if (result !== true) console.log("failed to fetch from server");
		var jsonObj = parser.parse(xmlData.data);

		let movieUnmapped = jsonObj.Events.Event
		let res = movieUnmapped.filter((ele, ind) => ind === movieUnmapped.findIndex(elem => elem.ID === ele.ID))
		let filteredmovies =
			res.filter(
				(obj) => obj.Title === title
			);
		return filteredmovies;
	});

	return {
		type: SEARCH_MOVIE_SUCESS,
		payload: searchRequest,
	};
}

export function addfavMovie(favmovie) {

	console.log(favmovie)
	return {

		type: ADD_FAV_MOVIE,
		payload: favmovie

	};
}
export function deletefavMovie(index) {
	console.log('delete action started' + index);
	return {
		type: DELETE_FAV_MOVIE,
		index
	};
}
export function selectedMovie(movieID) {
	console.log(movieID)

	const url = `${ROOT_URL}/Events/?eventID=${movieID}`;
	const selected = axios.get(url).then((xmlData) => {
		var result = parser.validate(xmlData.data);

		if (result !== true) console.log("failed to fetch from server");
		var jsonObj = parser.parse(xmlData.data);

		let movieUnmapped = jsonObj.Events.Event
		return movieUnmapped
	});

	return {
		type: SELECTED_MOVIE,
		payload: selected
	}
}
export function fetchNews() {

	const url = `https://www.finnkino.fi/xml/News/`;
	const news = axios.get(url).then((xmlData) => {
		var result = parser.validate(xmlData.data);

		if (result !== true) console.log("failed to fetch from server");
		var jsonObj = parser.parse(xmlData.data);

		let newsUnmapped = jsonObj.News.NewsArticle
		return newsUnmapped
	});

	return {
		type: FETCH_NEWS,
		payload: news
	}
}
export const currentLocation = (location) => {
	return {
		type: CURRENT_LOCATION,
		payload: location
	};
};

export const setLoading = () => {
	return {
		type: LOADING
	};
};