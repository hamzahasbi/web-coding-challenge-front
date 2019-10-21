import { put, takeEvery, call } from 'redux-saga/effects'
import UserService from '../Services/UserService';
import { AUTH_REQUEST, loginSuccess, loginFailure } from '../actions';

// Our worker Saga: will perform the async authentication task
function* getUser({ payload: { username, password } }) {
    try {
        let response = yield call(UserService.getUserToken, {username, password});

        yield put(loginSuccess(response.data.token));
        localStorage.setItem('token', response.data.token);

    } catch (error) {
        let message;
        switch (error.response.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put(loginFailure(message));
        localStorage.removeItem('token');
    }
}

// Our watcher Saga.
export default function* signinWatcher() {
    yield takeEvery(AUTH_REQUEST, getUser);
}
