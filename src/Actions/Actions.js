import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

export const SELECT_MOVIE = 'SELECT_MOVIE';

export function selectMovie(id) {
    return {
        type: SELECT_MOVIE,
        id: id
    }
}
export const SET_ADMIN = 'SET_ADMIN';

export function setAdmin(isAdmin) {
    return {
        type: 'SET_ADMIN',
        isAdmin: isAdmin
    }
}
export const SORT_BY = 'SORT_BY';

export function sortBy(field) {
    return {
        type: 'SORT_BY',
        field: field
    }
}
export const FILTER = 'FILTER';

export function filter(value) {
    return {
        type: 'FILTER',
        value: value
    }
}
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export function receiveMovies(movies) {           
    return {
        type: 'RECEIVE_MOVIES',
        movies: movies
    }
}
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

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
        return fetch(`http://localhost:3001/movies/${movie.id}`,
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
        return fetch(`http://localhost:3001/movies/${id}`)
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
        return fetch(`http://localhost:3001/movies/${id}`)
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
export const RECEIVE_ID_DELETE = 'RECEIVE_ID_DELETE';

export function receiveDeleteId(id) {
    return {
        type: 'RECEIVE_ID_DELETE',
        id: id
    }
}

export function deleteMovie(id) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/movies/${id}`,       
            {
                method: 'DELETE'
            })
            .then( () => {
                dispatch(receiveDeleteId(id));
    });
    }
}
