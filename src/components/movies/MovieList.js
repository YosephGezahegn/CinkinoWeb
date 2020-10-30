import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, selectedMovie, addfavMovie } from '../../action/index';
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
			const small = movie.Images.EventLargeImageLandscape;
			const medium = movie.Images.EventMediumImagePortrait;
			const large = movie.Images.EventLargeImagePortrait;
			return (
				<div key={movie.ID}>

					<div className="mdl-card" style={{ padding: "10px" }}>
						
						<div className="mdl-card__media">
							{/* <img src={medium} width="304px" height="240px" border={0} alt={movie.Title} /> */}
							{/* EventLargeImageLandscape: "http://media.finnkino.fi/1012/Event_12974/landscape_large/NIMBY_670.jpg"
							EventLargeImagePortrait: "http://media.finnkino.fi/1012/Event_12974/portrait_small/NIMBY_1080.jpg"
							EventMediumImagePortrait: "http://media.finnkino.fi/1012/Event_12974/portrait_medium/NIMBY_1080.jpg"
							EventSmallImageLandscape: "http://media.finnkino.fi/1012/Event_12974/landscape_small/NIMBY_444.jpg"
							EventSmallImagePortrait */}
							<img
								srcset={`${large} 1200w,
										 ${medium} 600w,
										 ${small} 400w,
										`}
										width="304px" height="240px"
								src={large}
								alt="responsive image"/>



						</div><h5 style={{ color: "white" }}>{movie.OriginalTitle}</h5>
						<div className="card__actions" style={{ marginTop: "10px", }}>
							<Link style={{ marginRight: "10px", marginLeft: "20px", marginTop: "50px", textDecoration: "none",}} 
							to='/selected' 
							onClick={() => this.props.selectedMovie(movie.EventID)}>Details</Link>
						
						<Link style={{textDecoration: "none"}} onClick={() => this.props.addfavMovie(movie)}> Bookmark</Link>
								<a style={{ marginLeft: "10px", marginTop: "50px", textDecoration: "none" }} href={movie.EventURL}> BUY TICKETS</a>
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
