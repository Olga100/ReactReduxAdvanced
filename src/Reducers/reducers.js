import * as actions from '../Actions/Actions';

export function currentMovieReducer(state = null, action) {
    switch (action.type) {

        case actions.SELECT_MOVIE:
            return  action.id;

        default:
            return state;
    }
}

export function moviesReducer(state = [], action) {
    switch (action.type) {

        case  actions.RECEIVE_MOVIES:
            return action.movies;

        case  actions.RECEIVE_MOVIE:
            let existingIndex = state.findIndex((m) => m.id === action.movie.id);   
            let movies = state.slice();

            if (existingIndex >= 0) {
                movies[existingIndex] = action.movie;
            }
            else {
                movies.push(action.movie);
            }

            return movies;

        case actions.RECEIVE_ID_DELETE:
            let id = action.id;
            return state.filter(item => {
                return item.id != id;
            });


        default:
            return state;
    }
}

export function viewStateReducer(state = {}, action) {
    switch (action.type) {
        case actions.SET_ADMIN:
            return Object.assign({}, state, {isAdmin: action.isAdmin});
        case actions.SORT_BY:
            return Object.assign({}, state, {sortBy: action.field});
        case actions.FILTER:
            return Object.assign({}, state, {filter: action.value});

        default:
            return state;
    }

}
