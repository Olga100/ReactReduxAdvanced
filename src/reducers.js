export function currentMovieReducer(state = null, action) {
    switch (action.type) {
        case 'RECEIVE_MOVIES':
            return action.movies[0];
        case 'RECEIVE_MOVIE':
            if (state && state.id == action.movie.id) {
                return action.movie;
            }
            return state;
        case 'SELECT_MOVIE':
            return Object.assign({}, action.movie);

        default:
            return state;
    }
}

export function moviesReducer(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_MOVIES':
            return action.movies;
        case 'RECEIVE_MOVIE':
            let existingIndex = state.findIndex((m) => m.id === action.movie.id);
            let movies = state.slice();

            if (existingIndex >= 0) {
                movies[existingIndex] = action.movie;
            }
            else {
                movies.push(action.movie);
            }

            return movies;
        default:
            return state;
    }
}

export function viewStateReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_ADMIN':
            return Object.assign({}, state, {isAdmin: action.isAdmin});
        case 'SORT_BY':
            return Object.assign({}, state, {sortBy: action.field});
        case 'FILTER':
            return Object.assign({}, state, {filter: action.value});
        default:
            return state;
    }

}
