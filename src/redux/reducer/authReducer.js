import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/authActions';

const initialState = {
    isLoading: false,
    isRegistered: false,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return { ...state, isLoading: true };
        case REGISTER_SUCCESS:
            return { ...state, isLoading: false, isRegistered: true };
        case REGISTER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        case LOGIN_REQUEST:
            return { ...state, isAuthenticated: false, error: null };
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload, error: null };
        case LOGIN_FAILURE:
            return { ...state, isAuthenticated: false, user: null, error: action.payload };
        default:
            return state;
    }
};

