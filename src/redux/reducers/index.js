import { combineReducers } from 'redux';

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
    export default combineReducers({
        movies,
        genres,
        firstDetails,
        details,
    });