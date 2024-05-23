import { REGISTER_USER } from '../actions/authActions';
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    error: null,
};

const authReducer = async (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            try {
                const response = await axios.post('/api/auth/register', action.payload);
                if (response.data.status === true) {
                    return {
                        ...state,
                        isAuthenticated: true,
                        error: null,
                    };
                } else {
                    return {
                        ...state,
                        isAuthenticated: false,
                        error: response.data.error,
                    };
                }
            } catch (error) {
                return {
                    ...state,
                    isAuthenticated: false,
                    error: error.message,
                };
            }
        default:
            return state;
    }
};

export default authReducer;
