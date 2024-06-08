import { ADD_PUBLICATION_SUCCESS, ADD_PUBLICATION_ERROR, LOAD_PUBLICATIONS_SUCCESS, LOAD_PUBLICATIONS_ERROR }
    from '../actions/types';

const initialState = {
    publications: [],
    loading: false,
    error: null,
};

export const publicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PUBLICATION_SUCCESS:
            return {
                ...state,
                publications: [action.payload, ...state.publications],
                loading: false,
                error: null,
            };
        case ADD_PUBLICATION_ERROR:
            return { ...state, loading: false, error: action.payload };
        case LOAD_PUBLICATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                publications: action.payload,
                error: null,
            };
        case LOAD_PUBLICATIONS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
