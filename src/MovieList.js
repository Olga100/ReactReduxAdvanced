import React from 'react';
import {connect} from 'react-redux'
import MovieThumbnail from './MovieThumbnail';
import Input from './Input';
import {sortBy, filter} from './Actions';
import {getFilteredSortedMovies} from './selectors'

class MovieListView extends React.Component {

    renderItems(movies) {
        return this.props.movies.map(function (item) {
            return (<MovieThumbnail key={item.id} movie={item}/>);
        });
    }

    render() {
        return (
            <div className="leftPart">
                <div className="FieldSortSearch">

                    <p>Sort movies</p>

                    <div>

                        <button type="button" className="sortByLikies" onClick={this.props.sortByLikes}>
                            <small> by likies</small>
                        </button>

                        <button type="button" className="sortByRating" onClick={this.props.sortByRating }>
                            <small> by rating</small>
                        </button>

                    </div>
                    <Input onFilter={this.props.filter}/>
                </div>

                { this.renderItems(this.props.movies) }
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    movies: getFilteredSortedMovies(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sortByLikes: () => dispatch(sortBy('likes')),
    sortByRating: () => dispatch(sortBy('stars')),
    filter: (value) => dispatch(filter(value))
});

const MovieList = connect(mapStateToProps, mapDispatchToProps)(MovieListView);

export default MovieList;
