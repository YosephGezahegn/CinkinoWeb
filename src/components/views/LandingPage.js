
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../action/index';
import { bindActionCreators } from 'redux';

export class LandingPage extends Component {

    render() {
        return (

            <div className="mdl-card amazing mdl-cell mdl-cell--12-col" style={{ backgroundColor: "#424242" }}>
                <div className="mdl-card__title mdl-color-text--grey-50">
                    <h3 className="quote">
                        Welcome to Cinkino
                    </h3>
                </div>
         
                <div className="mdl-card__supporting-text" >
                    <div style={{ color: "white" }}>
                        <strong>Disclaimer: </strong>
                        <span>This site a School Project and is not a replacment for the real finnkino website or application</span>
                    </div>

                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMovie }, dispatch);
}


export default connect(null, mapDispatchToProps)(LandingPage)
