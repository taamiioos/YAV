import axios from 'axios';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const register = (username, password, name) => async (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/reg', { username, password, name });
        if (response.data.status === true) {
            dispatch({ type: REGISTER_USER_SUCCESS });
        } else {
            dispatch({ type: REGISTER_USER_FAILURE, payload: response.data.error });
        }
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
    }
};
