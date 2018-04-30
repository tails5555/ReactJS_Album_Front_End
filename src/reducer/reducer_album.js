import {
    LOAD_ALBUMS, LOAD_ALBUMS_SUCCESS, LOAD_ALBUMS_FAILURE, RESET_LOAD_ALBUMS,
    SELECT_ALBUM, SELECT_ALBUM_SUCCESS, SELECT_ALBUM_FAILURE, RESET_SELECT_ALBUM
} from "../action/action_album";
const INITIAL_STATE = {
    albumList : { albums : [], loading : false, error : null },
    selectAlbum : { album : null, loading : false, error : null }
}

export default function(state=INITIAL_STATE, action){
    let error;
    switch (action.type) {
        case LOAD_ALBUMS :
            return { ...state, albumList : {albums : [], loading : true, error : null}};
        case LOAD_ALBUMS_SUCCESS :
            return { ...state, albumList : {albums : action.payload, loading : false, error : null}};
        case LOAD_ALBUMS_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return { ...state, albumList : {albums : [], loading : false, error : error}};
        case RESET_LOAD_ALBUMS :
            return { ...state, albumList : {albums : [], loading : false, error : null}};

        case SELECT_ALBUM :
            return { ...state, selectAlbum : {album : null, loading : true, error : null}};
        case SELECT_ALBUM_SUCCESS :
            return { ...state, selectAlbum : {album : action.payload, loading : false, error : null}};
        case SELECT_ALBUM_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return { ...state, selectAlbum : {album : null, loading : false, error : error}};
        case RESET_SELECT_ALBUM :
            return { ...state, selectAlbum : {album : null, loading : false, error : null}};

        default :
            return state;
    }
}