import {createSelector} from 'reselect';
import {getFilteredSortedMovies} from './getFilteredSortedMovies';

const currentMovie = state => state.currentMovie;

export const getCurrentMovie = createSelector(
    [currentMovie, getFilteredSortedMovies],
    (currentMovie, movies) => {                                 
        const m = movies.filter(item => item.id === currentMovie)[0];         

        return m ? m : movies[0];         
    }
);