import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {createMovie} from './Actions';

class CreateMovieForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    getMovie() {
        return {
            title: this.state.titleInput.value,
            posterUrl: this.state.posterUrlInput.value,
            genres: this.state.genresInput.value ? this.state.genresInput.value.split(',') : [],
            actors: this.state.actorsInput.value ? this.state.actorsInput.value.split(',') : [],
            director: this.state.directorInput.value,
            description: this.state.desciptionInput.value,
            likes: 0,
            stars: 0
        };
    }

    render() {

        return (
            <div className="formContainer">

                <div className="inputContainer">Title
                    <input type="text" className="titleForm" placeholder="enter the title of the movie"
                           ref={(node) => this.state.titleInput = node}/>
                </div>

                <div className="inputContainer">Poster
                    <input type="text" className="titleForm" placeholder="enter the Url of the poster"
                           ref={ (node) => this.state.posterUrlInput = node}/>
                </div>

                <div className="inputContainer">Genres
                    <input type="text" className="genresForm" placeholder="enter the genres of the movie"
                           ref={ (node) => this.state.genresInput = node}/>
                </div>

                <div className="inputContainer">Actors
                    <input type="text" className="actorsForm" placeholder="enter the actors of the movie"
                           ref={ (node) => this.state.actorsInput = node}/>
                </div>

                <div className="inputContainer">Director
                    <input type="text" className="directorForm" placeholder="enter the director of the movie"
                           ref={ (node) => this.state.directorInput = node}/>
                </div>

                <div className="inputContainer">Description
                    <textarea name="text" rows="6" cols="30" className="descriptionForm"
                              placeholder="enter the description of the movie"
                              ref={ (node) => this.state.desciptionInput = node}> </textarea>
                </div>

                <button type="submit" id="submitCreateForm" onClick={() => this.props.addMovie(this.getMovie())}>Create
                    Movie
                </button>

                <Link to="/movies">
                    <button type="button" className="backToMovies">Back to MoviesList</button>
                </Link>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMovie: (movie) => dispatch(createMovie(movie))
});

const CreateMovie = connect(null, mapDispatchToProps)(CreateMovieForm);

export default CreateMovie;
