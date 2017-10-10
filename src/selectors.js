import {createSelector} from 'reselect'

const getMovies = state => state.movies;

const getFilter = state => state.viewState.filter;

const getSortBy = state => state.viewState.sortBy;

export const getFilteredSortedMovies = createSelector(
    [getMovies, getFilter, getSortBy],
    (movies, filter, sortBy) => {
        let items = [];

        if (!filter) {
            items = movies.slice();
        } else {
            filter = filter.toLocaleLowerCase();

            items = movies.filter(function (item) {
                return item.title.toLocaleLowerCase().indexOf(filter) >= 0;
            });
        }

        if (sortBy) {
            items.sort((a, b) => b[sortBy] - a[sortBy]);
        }

        return items;
    }
);