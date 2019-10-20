const defaultState = {
    'error' : null,
    'token'  : localStorage.getItem('token')
};
const isLoggedReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'AUTH_SUCCESS' :
            return {
                'error' : null,
                'token'  : action.payload
            };
        case 'AUTH_FAILURE' :
            return { 
                'token'  : null,
                'error': action.payload 
            };
        default:
            return state;
    }
};

export default isLoggedReducer;