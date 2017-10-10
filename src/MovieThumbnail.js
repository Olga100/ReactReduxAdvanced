import React from 'react';
import {connect} from 'react-redux'
import Stars from './Stars';
import {selectMovie, updateMovieLikes, setRating} from './Actions';

class MovieThumbnailView extends React.Component {

    render() {
        const movie = this.props.movie;

        return (
            <div className="movie-thumbnail-title" onClick={this.props.selectMovie}>
                <div className="title">
                    <small>{ movie.title }</small>
                </div>
                <div className="likes">
                    <button type="button" className="thumb" onClick={() => this.props.incrementLikes()}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                    </button>
                    <button type="button" className="thumb" onClick={() => this.props.decrementLikes()}>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"/>
                    </button>
                    <small>likes</small>
                    <hr/>
                    <span className="amountLike">{movie.likes}</span>
                </div>
                <img className="image" src={movie.posterUrl} alt="poster"/>
                <div className="clear"></div>
                <div className="stars"><Stars stars={movie.stars} onChange={this.props.setRating}/></div>
            </div>);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectMovie: () => dispatch(selectMovie(ownProps.movie)),
    incrementLikes: () => dispatch(updateMovieLikes(ownProps.movie.id, 1)),
    decrementLikes: () => dispatch(updateMovieLikes(ownProps.movie.id, -1)),
    setRating: (rating) => dispatch(setRating(ownProps.movie.id, rating))
});

const MovieThumbnail = connect(null, mapDispatchToProps)(MovieThumbnailView);

export default MovieThumbnail;

