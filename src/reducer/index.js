import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import AlbumReducer from './reducer_album';
import PhotoReducer from './reducer_photo';

export const rootReducer = combineReducers({
    album : AlbumReducer,
    photo : PhotoReducer,
    form : formReducer
})