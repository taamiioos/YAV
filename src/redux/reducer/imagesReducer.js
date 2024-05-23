const initialState = {
    images: [],
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_IMAGES':
            return {
                ...state,
                images: [...state.images, ...action.payload],
            };
        default:
            return state;
    }
};
