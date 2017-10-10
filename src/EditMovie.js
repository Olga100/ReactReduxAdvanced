import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {updateMovie} from './Actions';

class EditMovieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getMovie() {
        return {
            id: this.props.movie.id,
            title: this.state.titleInput.value,
            posterUrl: this.state.posterUrlInput.value,
            genres: this.state.genresInput.value ? this.state.genresInput.value.split(',') : [],
            actors: this.state.actorsInput.value ? this.state.actorsInput.value.split(',') : [],
            director: this.state.directorInput.value,
            description: this.state.desciptionInput.value,
            likes: this.props.movie.likes,
            stars: this.props.movie.stars
        };
    }

    render() {
        const movie = this.props.movie;

        return (

            <div className="formContainer">

                <div className="inputContainer">Title
                    <input type="text" className="titleForm" placeholder="enter the title of the movie"
                           ref={(node) => this.state.titleInput = node} defaultValue={movie.title}/>
                </div>

                <div className="inputContainer">Poster
                    <input type="text" className="titleForm" placeholder="enter the Url of the poster"
                           ref={ (node) => this.state.posterUrlInput = node} defaultValue={movie.posterUrl}/>
                </div>

                <div className="inputContainer">Genres
                    <input type="text" className="genresForm" placeholder="enter the genres of the movie"
                           ref={ (node) => this.state.genresInput = node} defaultValue={movie.genres}/>
                </div>

                <div className="inputContainer">Actors
                    <input type="text" className="actorsForm" placeholder="enter the actors of the movie"
                           ref={ (node) => this.state.actorsInput = node} defaultValue={movie.actors}/>
                </div>

                <div className="inputContainer">Director
                    <input type="text" className="directorForm" placeholder="enter the director of the movie"
                           ref={ (node) => this.state.directorInput = node} defaultValue={movie.director}/>
                </div>

                <div className="inputContainer">Description
                    <textarea name="text" rows="6" cols="30" className="descriptionForm"
                              placeholder="enter the description of the movie"
                              ref={ (node) => this.state.desciptionInput = node}>{movie.description}</textarea>
                </div>

                <button type="submit" id="submitCreateForm" onClick={() => this.props.updateMovie(this.getMovie())}>
                    Update Movie
                </button>

                <Link to="/movies">
                    <button type="button" className="backToMovies">Back to MoviesList</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    movie: state.movies.filter((m) => m.id == ownProps.params.id)[0]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateMovie: (movie) => dispatch(updateMovie(movie))
});

const EditMovie = connect(mapStateToProps, mapDispatchToProps)(EditMovieForm);

export default EditMovie;

