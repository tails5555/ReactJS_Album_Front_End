import {
    LOAD_ALBUM_WITH_PHOTOS, LOAD_ALBUM_WITH_PHOTOS_SUCCESS, LOAD_ALBUM_WITH_PHOTOS_FAILURE, RESET_LOAD_ALBUM_WITH_PHOTOS
} from "../action/action_photo";

const INITIAL_STATE = {
    photoList : { photos : [], loading : false, error : null },
    pickPhoto : { photo : null, loading : false, error : null }
}

export default function(state=INITIAL_STATE, action){
    let error;
    switch (action.type) {
        case LOAD_ALBUM_WITH_PHOTOS :
            return { ...state, photoList : {photos : [], loading : true, error : null}};
        case LOAD_ALBUM_WITH_PHOTOS_SUCCESS :
            return { ...state, photoList : {photos : action.payload, loading : false, error : null}};
        case LOAD_ALBUM_WITH_PHOTOS_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return { ...state, photoList : {photos : [], loading : false, error : error}};
        case RESET_LOAD_ALBUM_WITH_PHOTOS :
            return { ...state, photoList : {photos : [], loading : false, error : null}};
        default :
            return state;
    }
}
