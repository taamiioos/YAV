import axios from "axios";
import {
    ADD_PUBLICATION_ERROR,
    ADD_PUBLICATION_SUCCESS,
    LOAD_PUBLICATIONS_ERROR,
    LOAD_PUBLICATIONS_SUCCESS
} from "./types";
import {LOAD_URL, UPLOAD_URL} from "../../apiConfig";
const token = localStorage.getItem('token');

export const addPublication = (publicationData) => {

    return async function (dispatch) {
        try {
            const response = await axios.post(
                `${UPLOAD_URL}`,
                publicationData,
                { headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } }
            );
            if (response.status === 201) {
                dispatch({
                    type: ADD_PUBLICATION_SUCCESS,
                    payload: response.data,
                });
                console.log(`Publication successfully saved`);
            }
        } catch (error) {
            dispatch({
                type: ADD_PUBLICATION_ERROR,
                payload: error.message,
            });
            console.log(error);
        }
    };
};

export const loadPublications = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(
                `${LOAD_URL}`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            );
            if (response.status === 200) {
                dispatch({
                    type: LOAD_PUBLICATIONS_SUCCESS,
                    payload: response.data,
                });
                console.log(`Publications loaded successfully`);
            }
        } catch (error) {
            dispatch({
                type: LOAD_PUBLICATIONS_ERROR,
                payload: error.message,
            });
            console.log(error);
        }
    };
};
