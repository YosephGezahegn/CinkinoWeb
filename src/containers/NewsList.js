import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/index'
import { bindActionCreators } from 'redux';


export class NewsList extends Component {

    componentDidMount() {
        const { fetchNews } = this.props;
        fetchNews()
    }

    render() {
        console.log(this.props.newsList)
        return (
            <div className="flex-container">
                {this.props.newsList.map((news) => {
                    return <div className="flex-child">
                        <div className="mdl-card">

                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">{news.Title}</h2>
                            </div>
                            <div className="mdl-card__media">
                                <img src={news.ImageURL} width="60px" height="60px" border={2} alt="" style={{ padding: '2px' }} />
                            </div>
                            <div className="mdl-card__supporting-text">
                                {news.HTMLLead}
                            </div>
                            <div className="mdl-card__actions">
                                <a href="(URL or function)">Related Action</a>
                            </div>
                        </div></div>
                })}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    newsList: state.newsList.newsList
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
