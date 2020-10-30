import React, { Component } from 'react'
import { fetchMovie, selectedMovie } from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Autosuggest from '../search/AutoSuggest';
import Drawer from './Drawer';
import Switch from '../router/Switch';
import Filter from '../filter/AreaFilter';
class Home extends Component {

  render() {
    return (<div>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">

        <header className="mdl-layout__header">

          <Autosuggest />
          <Filter />
        </header>
        <div className="mdl-layout__drawer">
          <Drawer />
        </div>
        <main className="mdl-layout__content">
          <Switch />
        </main>
      </div>

    </div>

    )
  }
}
function mapStateToProps(state) {
  return {
    movies: state.movieList.movieList,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie, selectedMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);