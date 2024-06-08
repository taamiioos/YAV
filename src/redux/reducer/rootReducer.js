import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import {publicationReducer} from "./publicationReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    post: publicationReducer
});

export default rootReducer;
