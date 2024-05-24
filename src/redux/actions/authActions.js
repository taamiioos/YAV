import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_START });
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
        if (response.data.status) {
            console.log('Регистрация прошла успешно!');
            window.location.href = "/clusterPage";

        } else {
            console.log(response.data.error);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        console.log('Произошла ошибка при регистрации. Попробуйте снова.');
    }
};
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth', userData);
        if (response.data.status) {
            console.log('успешно');
            window.location.href = "/clusterPage";
        } else {
            console.log(response.data.error);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        console.log('Произошла ошибка при входе');
    }
};

