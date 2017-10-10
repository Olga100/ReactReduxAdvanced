import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Stars from './Stars';
import {Link} from 'react-router';
import {deleteMovie} from './Actions'


class MovieDetails extends React.Component {

    renderModeButtons() {

        if (this.props.isAdmin) {

            return (
                <div className="editMovie">
                    <Link to={"/editMovie/" + this.props.currentMovie.id} activeClassName="active">
                        <button type="button" className="edit">Edit Movie</button>
                    </Link>
                    <button type="button" className="delete" onClick={this.props.deleteMovie}>Delete Movie</button>
                </div>
            )
        }
    }

    render() {
        const {movie} = this.props;

        return (
            <div>
                <div id="movie-details-left">
                    {movie.title}<br />
                    Likes: {movie.likes}<br />
                    <Stars stars={movie.stars}/>
                    {this.renderModeButtons()}
                </div>
                <div id="movie-details-right">
                    <div className="center-container">
                        <img src={movie.posterUrl}/>
                    </div>
                    <div><b>Director:</b> {movie.director} </div>
                    <div><b>Actors:</b> {movie.actors.join(", ")} </div>
                    <div><b>Genres:</b> {movie.genres.join(", ")} </div>
                    <div><b>Description:</b> {movie.description} </div>
                </div>
            </div>
        );
    }
}

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    isAdmin: state.viewState.isAdmin,
    currentMovie: state.currentMovie
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteMovie: () => dispatch(deleteMovie(ownProps.movie.id))
});

const Details = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

export default Details;
