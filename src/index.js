import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootSaga from './redux/sagas/index';
import combinedReducers from './redux/reducers';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combinedReducers,
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger));

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
