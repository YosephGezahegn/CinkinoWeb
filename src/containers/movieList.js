import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, selectedMovie, addfavMovie } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
class MovieList extends Component {
	componentDidMount() {
		const { fetchMovie } = this.props;
		fetchMovie();
		console.log("movies fetched")
	}
	mapMovies() {
		return this.props.movies.map((movie) => {
			// console.log(movie);
			var startTime = new Date(movie.dttmShowStart);
			var start = startTime.toLocaleTimeString();
			var endTime = new Date(movie.dttmShowEnd);
			var end = endTime.toLocaleTimeString();
			var mDATE = startTime.toLocaleDateString();
			return (
				<div key={movie.ID}>

					<div className="mdl-card" style={{ borderStyle: "solid", padding: "10px" }}>
						<div className="mdl-card__title">
							<h2 className="mdl-card__title-text" style={{ fontSize: "16px", fontFamily: "fantasy" }}>{movie.OriginalTitle}</h2>
						</div>
						<div className="mdl-card__media">
							<img src={movie.Images.EventMediumImagePortrait} width="304px" height="240px" border={0} alt={movie.Title} />
						</div>
						<div className="card__actions" style={{ marginTop: "10px", }}>
							<Link style={{ marginRight: "10px", marginLeft: "20px", marginTop: "50px", textDecoration: "none" }} to='/selected' onClick={() => this.props.selectedMovie(movie.EventID)}>Details</Link>
							<button onClick={() => this.props.addfavMovie(movie)}>Bookmark</button>
							<a
								style={{ marginLeft: "10px", marginTop: "50px", textDecoration: "none" }} href={movie.EventURL}> BUY TICKETS</a>
						</div>





					</div>

				</div>

			);
		});
	}

	render() {
		return <div className="mdl-grid">
			{this.mapMovies()}
		</div>


	}
}


function mapStateToProps(state) {
	return {
		movies: state.movieList.movieList,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovie, selectedMovie, addfavMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
