import { takeEvery, put } from 'redux-saga/effects';
import updateDetails from './editMovie';
import axios from 'axios';

// Create the rootSaga generator function
export default function* rootSaga() {
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