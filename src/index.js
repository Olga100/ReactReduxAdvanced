import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux'
import './CSS/index.css';
import registerServiceWorker from './registerServiceWorker';
import Movies from './Containers/MoviesIndex';
import Home from './Components/Home';
import About from './Components/About';
import CreateMovie from './Containers/CreateMovie';
import EditMovie from './Containers/EditMovie';
import PageNotFound from './Components/PageNotFound';
import {currentMovieReducer, moviesReducer, viewStateReducer} from './Reducers/reducers';


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




