import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletefavMovie, selectedMovie } from '../../action/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

class FavouriteMovies extends Component {
	deletefavMovie(e, index) {
		e.preventDefault();
		this.props.deletefavMovie(index);
		console.log(this.props.deletefavMovie(index));
	}

	mapMovies() {
		return this.props.favmoviestomap.favMovie.map((movie, i) => {
			console.log(movie);
			return (
				<div className="demo-card-wide mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title">
						<h2 className="mdl-card__title-text">{movie.Title}</h2>
					</div>
					<div className="mdl-card__media">
						<img src={movie.Images.EventMediumImagePortrait} width="300px" height="400px" border={2} alt="" style={{ padding: '2px' }} />
					</div>
					<div className="mdl-card__supporting-text">
						{movie.Shot}
					</div>
					<div className="mdl-card__actions mdl-card--border">

						<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
							onClick={(e) => this.deletefavMovie(e, movie.ID)}
						>
							Remove{' '}
						</button>

						<Link style={{ marginRight: "10px", marginLeft: "20px", marginTop: "50px", textDecoration: "none" }}
							to='/selected'
							onClick={() => this.props.selectedMovie(movie.EventID)}>

							<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
							>
								Details
						</button>
						</Link>


					</div>

				</div>
			);
		});
	}

	render() {
		console.log(this.mapMovies());
		return (
			<div>
				<h2 className="mdl-card__title-text">Bookmarks</h2>
				<div className="mdl-grid"> {this.mapMovies().length === 0 ? <div>there is no movie in the FavouriteMovies</div> : this.mapMovies()}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		favmoviestomap: state.movieFavourite,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deletefavMovie, selectedMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteMovies);
