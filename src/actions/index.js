export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const login = (credentials) => {
    return {
        'type' : AUTH_REQUEST,
        'payload' : credentials,
    };
};
export const loginFailure = (message) => {
    return {
        'type' : AUTH_FAILURE,
        'payload' : message,
    };
};
export const loginSuccess = (token) => {
    return {
        'type' : AUTH_SUCCESS,
        'payload' : token,
    };
};