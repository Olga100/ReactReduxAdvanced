import React from 'react';
import {connect} from 'react-redux'
import MovieThumbnail from './MovieThumbnail';
import {sortBy, filter} from '../Actions/Actions';
import {getFilteredSortedMovies} from '../Selectors/getFilteredSortedMovies';
import FilterSort from '../Components/FilterSort';

class MovieListView extends React.Component {

    renderItems(){
        return this.props.movies.map(function (item) {
            return (<MovieThumbnail key={item.id} movie={item}/>);
        });
    }

    render() {

        const {sortByRating, sortByLikes, filter} = this.props;

        return (

            <div className="leftPart">
                <FilterSort
                    sortByLikes={sortByLikes}
                    sortByRating={sortByRating}
                    filter={filter}
                />
                { this.renderItems() }

            </div>
     )}

}
const mapStateToProps = (state, ownProps) => ({
    movies: getFilteredSortedMovies(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sortByLikes: () => dispatch(sortBy('likes')),
    sortByRating: () => dispatch(sortBy('stars')),
    filter: value => dispatch(filter(value))
});

const MovieList = connect(mapStateToProps, mapDispatchToProps)(MovieListView);
export default MovieList;
