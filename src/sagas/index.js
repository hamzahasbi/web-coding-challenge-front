import { put, takeEvery, call } from 'redux-saga/effects'
import UserService from '../Services/UserService';
import { AUTH_REQUEST, loginSuccess, loginFailure, AUTH_FAILURE, AUTH_SUCCESS } from '../actions';
import { history } from '../Services/store';


// Our worker Saga: will perform the async authentication task
function* getUser({ payload: { username, password } }) {
    try {
        let response = yield call(UserService.getUserToken, {username, password});

        localStorage.setItem('token', response.data.token);
        yield put(loginSuccess(response.data.token));

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

function* failure() {
    yield history.push('/error');
}
function* success() {
    yield history.push('/dashboard');
}

// Our watcher Saga.
export default function* signinWatcher() {
    yield takeEvery(AUTH_REQUEST, getUser);
}

export function* failureWatch() {
    yield takeEvery(AUTH_FAILURE, failure);
}
export function* SuccessWatch() {
    yield takeEvery(AUTH_SUCCESS, success);
}
