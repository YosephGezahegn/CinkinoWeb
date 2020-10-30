import React from 'react';
import Autosuggest from 'react-autosuggest';
import './autosuggest.css';
import { searchMovie, fetchMovie } from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class BasicAutoSuggest extends React.Component {


    //Define state for value and suggestion collection
    state = {
        value: '',
        suggestions: []
    };

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.props.fetchMovie();
        this.setState({
            value: newValue
        });
    };


    // Filter logic
    getSuggestions = value => {
        
        

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.props.movies.filter(lang =>
            lang.Title.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.Title;

    // Render Each Option

    renderSuggestion = suggestion => (
        <span className="sugg-option">
            <span className="icon-wrap"><img alt={suggestion.Title} src={suggestion.Images.EventSmallImagePortrait} /></span>
            <span className="name">
                {suggestion.Title}
            </span>
        </span>
    );

    
    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {

        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Search Movie',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <div className="flex-container">
                <div className="flex-child">
                    <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                /></div>
                <div className="flex-child">
                    <Link
                        to="/result"
                        onClick={() => this.props.searchMovie(this.state.value)}
                    >
                        <button className="searchButton">
                            Search
                    </button>

                    </Link>
                </div>


            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        searchedMovie: state.movieSearched.searchValue,
        movies: state.movieList.movieList,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovie, fetchMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicAutoSuggest);