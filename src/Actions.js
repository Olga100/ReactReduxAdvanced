import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

export function selectMovie(movie) {
    return {
        type: 'SELECT_MOVIE',
        movie: movie
    }
}

export function setAdmin(isAdmin) {
    return {
        type: 'SET_ADMIN',
        isAdmin: isAdmin
    }
}

export function sortBy(field) {
    return {
        type: 'SORT_BY',
        field: field
    }
}

export function filter(value) {
    return {
        type: 'FILTER',
        value: value
    }
}

export function receiveMovies(movies) {
    return {
        type: 'RECEIVE_MOVIES',
        movies: movies
    }
}

export function receiveMovie(movie) {
    return {
        type: 'RECEIVE_MOVIE',
        movie: movie
    }
}

export function fetchMovies() {
    return function (dispatch) {
        return fetch("http://localhost:3001/movies")
            .then(
                response => response.json(),
                error => console.log(error)
            )
            .then(
                movies => dispatch(receiveMovies(movies))
            );
    }
}

export function createMovie(movie) {
    return function (dispatch) {
        return fetch("http://localhost:3001/movies",
            {
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(movie)
            })
            .then(
                response => response.json(),
                error => console.log(error)
            )
            .then(movie => {
                dispatch(receiveMovie(movie));
                browserHistory.push("/movies");
            });
    }
}

export function updateMovie(movie) {
    return function (dispatch) {
        return fetch("http://localhost:3001/movies/" + movie.id,
            {
                method: "PUT",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(movie)
            })
            .then(
                response => response.json(),
                error => console.log(error)
            )
            .then(movie => {
                dispatch(receiveMovie(movie));
                browserHistory.push("/movies");
            });
    }
}

export function updateMovieLikes(id, likes) {
    return function (dispatch) {
        return fetch("http://localhost:3001/movies/" + id)
            .then(
                response => response.json(),
                error => console.log(error)
            )
            .then(json => {
                json.likes += likes;
                return updateMovie(json)(dispatch);
            });
    }
}

export function setRating(id, rating) {
    return function (dispatch) {
        return fetch("http://localhost:3001/movies/" + id)
            .then(
                response => response.json(),
                error => console.log(error)
            )
            .then(json => {
                json.stars = rating;
                return updateMovie(json)(dispatch);
            });
    }
}

export function deleteMovie(id) {
    return function (dispatch) {
        return fetch("http://localhost:3001/movies/" + id,
            {
                method: 'DELETE'
            })
            .then(
                response => dispatch(fetchMovies()),
                error => console.log(error)
            );
    }
}
