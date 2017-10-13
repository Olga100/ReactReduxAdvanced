import React from 'react';
import {connect} from 'react-redux';
import Stars from '../Components/Stars';
import {Link} from 'react-router';
import {deleteMovie} from '../Actions/Actions';
import {getCurrentMovie} from '../Selectors/getCurrentMovie';


class MovieDetailsView extends React.Component {

    renderModeButtons() {
        if (this.props.isAdmin) {

            return (
                <div className="editMovie">
                    <Link to={"/editMovie/" + this.props.movie.id} activeClassName="active">
                        <button type="button" className="edit">Edit Movie</button>
                    </Link>
                    <button type="button" className="delete" onClick={() => this.props.deleteMovie(this.props.movie.id)}>Delete Movie</button>
                </div>
            )
        }
    }

    render() {
        const {movie} = this.props;

        if (movie) {
            return (
                <div>
                    <div className="movie-details-left">
                        {movie.title}<br />
                        Likes: {movie.likes}<br />
                        <Stars stars={movie.stars}/>
                        {this.renderModeButtons()}
                    </div>
                    <div className="movie-details-right">
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
        else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    isAdmin: state.viewState.isAdmin,
    movie: getCurrentMovie(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteMovie: id => dispatch(deleteMovie(id))
});

const MovieDetails = connect(mapStateToProps, mapDispatchToProps)(MovieDetailsView);

export default MovieDetails;
 