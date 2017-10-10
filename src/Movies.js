import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import MovieList from './MovieList';
import Details from './MovieDetails';
import MainHeader from './MainHeader';
import {Link} from 'react-router';
import {setAdmin} from './Actions';

class MoviesView extends Component {

    renderModeButton() {
        if (!this.props.isAdmin) {
            return <button type="button" onClick={this.props.setAdmin} className="admin">Admin</button>
        }
        else {
            return <button type="button" onClick={this.props.setUser} className="user">User</button>
        }
    }

    renderModeCreate() {

        if (this.props.isAdmin) {

            return (
                <Link to="/createMovie" activeClassName="active">
                    <button type="button" className="create">Create Movie</button>
                </Link>
            )
        }
    }

    render() {
        var movieDetails = null;

        if (this.props.currentMovie) {
            movieDetails = <Details movie={this.props.currentMovie}/>;
        }

        return (
            <div className="App">

                <MainHeader/>

                <div className="header">

                    {this.renderModeCreate()}

                    <h2>Movies</h2>
                    <div className="buttonMode">
                        {this.renderModeButton()}
                    </div>
                </div>

                <div id="movie-list-container">
                    <MovieList />
                </div>

                <div id="movie-details-container">
                    { movieDetails }
                </div>

                <div className="clear"></div>

                <div className="footer"><h2> EPAM</h2></div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentMovie: state.currentMovie,
    isAdmin: state.viewState.isAdmin
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setAdmin: () => dispatch(setAdmin(true)),
    setUser: () => dispatch(setAdmin(false))
});

const Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesView);

export default Movies;


