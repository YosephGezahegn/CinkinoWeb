import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addfavMovie, selectedMovie } from '../../action/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

class SearchResults extends Component {
	handleClick = () => {
		this.props.addfavMovie(this.props.searchedMovie)
	};

	render() {
		return (
			<div>
				{this.props.searchedMovie.map((movie) => {
					return (
						<div className="demo-card-wide mdl-card mdl-shadow--2dp">
							<div className="mdl-card__title">
								<h2 className="mdl-card__title-text">{movie.Title}</h2>
							</div>
							<div className="mdl-card__media">
								<img src={movie.Images.EventLargeImageLandscape} width="300px" height="400px" border={2} alt="" style={{ padding: '2px' }} />
							</div>
							<div className="mdl-card__supporting-text">
								{movie.Shot}
							</div>
							<div className="mdl-card__actions mdl-card--border">

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
				})}
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { searchedMovie: state.movieSearched.searchValue, };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addfavMovie, selectedMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
