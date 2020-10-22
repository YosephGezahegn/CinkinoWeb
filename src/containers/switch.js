import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from "react-router-dom";

const FavouriteMovies = lazy(() => import('./favouriteMovies'))
const SearchResults = lazy(() => import('./searchResults'))
const SelectedMovie = lazy(() => import('./SelectedMovie'))
const Maps = lazy(() => import('./Maps'))
const movieList = lazy(() => import('./movieList'))
const News = lazy(() => import('./NewsList'))


export default class swtich extends Component {
    render() {
        return (
            <div>
                <Switch>

                    <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
                        <Route path="/map" component={Maps} />
                        <Route path="/result" component={SearchResults} />
                        <Route path="/favourite" component={FavouriteMovies} />
                        <Route exact path="/movies" component={movieList} />
                        <Route path="/selected" component={SelectedMovie} />
                        <Route path="/news" component={News} />
                    </Suspense>
                </Switch>
            </div>





        )
    }
}
