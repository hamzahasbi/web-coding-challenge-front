import {createStore, applyMiddleware, compose} from 'redux';
import isLoggedReducer from '../reducers/isLogged';
import createSagaMiddleware from 'redux-saga';
import signinWatcher, { failureWatch, SuccessWatch } from '../sagas';
import {createBrowserHistory} from "history";
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    isLoggedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signinWatcher);
sagaMiddleware.run(failureWatch);
sagaMiddleware.run(SuccessWatch);

export const history = createBrowserHistory();
export default store;