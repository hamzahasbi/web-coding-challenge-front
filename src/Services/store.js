import {createStore, applyMiddleware, compose} from 'redux';
import isLoggedReducer from '../reducers/isLogged';
import createSagaMiddleware from 'redux-saga';
import signinWatcher from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    isLoggedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signinWatcher);

export default store;