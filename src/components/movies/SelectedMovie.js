
import React from 'react'
import { connect } from 'react-redux'

export const SelectedMovie = ({ selectedMovie }) => {
    return (<div className="mdl-card on-the-road-again mdl-cell mdl-cell--12-col">
        <div className="mdl-card__media mdl-color-text--grey-50">
            <img src={selectedMovie.Images.EventLargeImageLandscape} 
            width="100%" 
            height="100%" 
            border={0} 
            alt={selectedMovie.Title} 
            style={{ padding: '10px' }} />

        </div>
        <div className="mdl-color-text--grey-600 mdl-card__supporting-text">
            {selectedMovie.ShortSynopsis} </div>
        <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
            <div className="minilogo" />
            <div>
                <strong>{selectedMovie.Title}</strong>
                <span>2 days ago</span>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    selectedMovie: state.movieSelected.selectedMovie
})

export default connect(mapStateToProps, null)(SelectedMovie)
