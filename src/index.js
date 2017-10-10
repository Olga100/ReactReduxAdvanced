import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux'
import Movies from './Movies';
import Home from './Home';
import About from './About';
import CreateMovie from './CreateMovie';
import EditMovie from './EditMovie';
import PageNotFound from './PageNotFound';
import {currentMovieReducer, moviesReducer, viewStateReducer} from './reducers';
import {fetchMovies} from './Actions';

const combinedReducers = combineReducers({
    movies: moviesReducer,
    currentMovie: currentMovieReducer,
    viewState: viewStateReducer
});

const store = createStore(combinedReducers, {
        viewState: {
            isAdmin: false,
            sortBy: '',
            filter: ''
        }
    },
    applyMiddleware(thunkMiddleware));

store.dispatch(fetchMovies());


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <IndexRoute component={Home}/>
            <Route path="/" component={Home}/>
            <Route path="/movies" component={Movies}>
                <Route path=":id" component={Movies}/>
            </Route>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/createMovie" component={CreateMovie}/>
            <Route path="/editMovie/:id" component={EditMovie}/>
            <Route path="*" component={PageNotFound}/>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();




