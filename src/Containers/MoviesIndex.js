import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../CSS/App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import MainHeader from '../Components/MainHeader';
import {Link} from 'react-router';
import {setAdmin, fetchMovies} from '../Actions/Actions';


class MoviesIndexView extends Component {

    componentDidMount() {
       this.props.loadMovies();        
    }

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

                <div className="movie-list-container">
                    <MovieList />
                </div>

                <div className="movie-details-container">
                    <MovieDetails />
                </div>

                <div className="clear"></div>

                <div className="footer"><h2> EPAM</h2></div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isAdmin: state.viewState.isAdmin  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setAdmin: () => dispatch(setAdmin(true)),
    setUser: () => dispatch(setAdmin(false)),
    loadMovies: () => dispatch(fetchMovies())
});

const MoviesIndex = connect(mapStateToProps, mapDispatchToProps)(MoviesIndexView);

export default MoviesIndex;


