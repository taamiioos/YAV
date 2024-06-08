import axios from 'axios';
import {LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_START} from "./types";
import {REGISTER_URL,LOGIN_URL} from "../../apiConfig";

export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_START });
    try {
        const response = await axios.post(`${REGISTER_URL}`, userData);
        if (response.data.status) {
            console.log('Регистрация прошла успешно!');
            localStorage.setItem('token', response.data.token);
            console.log('Токен:', response.data.token);
            window.location.href = "/clusterPage";

        } else {
            console.log(response.data.error);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        console.log('Произошла ошибка при регистрации. Попробуйте снова.');
        dispatch({ type: REGISTER_FAILURE, error: error.message });
    }
};


export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await axios.post(`${LOGIN_URL}`, userData);
        if (response.data.status) {
            console.log('успешно');
            localStorage.setItem('token', response.data.token);
            console.log('Токен:', response.data.token);
            window.location.href = "/clusterPage";
        } else {
            console.log(response.data.error);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        console.log('Произошла ошибка при входе');
        dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
};