import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Drawer extends Component {
    render() {
        return (

            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to="/movies">Movies</Link>
                <Link className="mdl-navigation__link" to="/favourite">Favourite</Link>
                <Link className="mdl-navigation__link" to="/map">Map</Link>
                <Link className="mdl-navigation__link" to="/news">News</Link>

            </nav>

        )
    }
}
