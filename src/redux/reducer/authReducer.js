import {LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_START} from "../actions/types";


const initialState = {
    isLoading: false,
    isRegistered: false,
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return { ...state, isLoading: true };
        case REGISTER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, isAuthenticated: false, error: null };
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isAuthenticated: false, user: null, error: action.payload };
        default:
            return state;
    }
};
