import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import AlbumReducer from './reducer_album';

export const rootReducer = combineReducers({
    album : AlbumReducer,
    form : formReducer
})