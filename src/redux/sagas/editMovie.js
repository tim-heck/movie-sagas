import axios from 'axios';
import {put} from 'redux-saga/effects';

/**
 * Saga/generator function that sends a put request to the server for /movies
 * to update a title and/or description change
 * Calls the fetchMovies with action type to get updated movie list
 * @param {object} action contains the type and payload passed from a dispatch
 */
export default function* updateDetails(action) {
    console.log('in updateDetails', action.payload);
    try {
        yield axios.put('/movies', action.payload);
        yield put({ type: 'FETCH_DETAILS', payload: action.payload });
    } catch (err) {
        console.log(err);
    }
}

