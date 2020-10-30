import React, { Component, lazy, Suspense} from 'react'
// 
import { Route, Switch } from "react-router-dom";

// import MovieList from '../movies/MovieList'
// import FavouriteMovies from '../movies/FavouriteMovies'
// import SearchResults from '../movies/SearchResults'
// import SelectedMovie from '../movies/SelectedMovie'
// import Maps from '../maps/Maps'
// import News from '../news/NewsList'
// import LandingPage from '../views/LandingPage'


const MovieList = lazy(() => import('../movies/MovieList'))
const FavouriteMovies = lazy(() => import('../movies/FavouriteMovies'))
const SearchResults = lazy(() => import('../movies/SearchResults'))
const SelectedMovie = lazy(() => import('../movies/SelectedMovie'))

const Maps = lazy(() => import('../maps/Maps'))
const News = lazy(() => import('../news/NewsList'))
const LandingPage = lazy(() => import('../views/LandingPage'))


export default class swtich extends Component {
    render() {
        return (
            <div>
                <Switch>
                
                    <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/map" component={Maps} />
                        <Route path="/result" component={SearchResults} />
                        <Route path="/favourite" component={FavouriteMovies} />
                        <Route  path="/movies" component={MovieList} />
                        <Route path="/selected" component={SelectedMovie} />
                        <Route path="/news" component={News} />
                    </Suspense>
                </Switch>
            </div>





        )
    }
}
