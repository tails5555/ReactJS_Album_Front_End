import {LOAD_ALBUMS, LOAD_ALBUMS_SUCCESS, LOAD_ALBUMS_FAILURE, RESET_LOAD_ALBUMS} from "../action/action_album";
const INITIAL_STATE = {
    albumList : {albums : [], loading : false, error : null},
    selectAlbum : {album : null, loading : false, error : null}
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
        default :
            return state;
    }
}