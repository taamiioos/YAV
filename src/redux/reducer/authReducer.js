import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from '../actions/authActions';

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
