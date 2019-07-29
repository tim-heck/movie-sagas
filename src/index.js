import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('UPDATE_DETAILS', updateDetails);
}

/**
 * Saga/generator function that sends a get request to the server for /movies
 * then stores them in the movies reducer
 */
function* fetchMovies() {
    try {
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

/**
 * Saga/generator function that sends a get request to the server for /genres
 * then stores them in the genres reducer
 */
function* fetchGenres() {
    try {
        const response = yield axios.get('/genres');
        yield put({ type: 'SET_TAGS', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

/**
 * Saga/generator function that sends a get request to the server for /movies/details/id
 * then stores the first object in the firstDetails reducer and all details in
 * the details reducer
 * @param {object} action contains the type and payload passed from a dispatch
 */
function* fetchDetails(action) {
    try {
        console.log(action.payload);
        const responseMovies = yield axios.get(`/movies/details/${action.payload.id}`);
        yield put({ type: 'SET_FIRST_DETAILS', payload: responseMovies.data[0] });
        const responseGenres = yield axios.get(`/movies/details/genres/${action.payload.id}`);
        yield put({ type: 'SET_DETAILS', payload: responseGenres.data })
    } catch (err) {
        console.log(err);
    }
}

/**
 * Saga/generator function that sends a put request to the server for /movies
 * to update a title and/or description change
 * Calls the fetchMovies with action type to get updated movie list
 * @param {object} action contains the type and payload passed from a dispatch
 */
function* updateDetails(action) {
    console.log('in updateDetails', action.payload);
    try {
        yield axios.put('/movies', action.payload);
        yield put({ type: 'FETCH_DETAILS', payload: action.payload });
    } catch (err) {
        console.log(err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store first details object
const firstDetails = (state = {}, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'SET_FIRST_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store a specific movie's details
const details = (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        firstDetails,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
