import {
    LOAD_ALBUM_WITH_PHOTOS, LOAD_ALBUM_WITH_PHOTOS_SUCCESS, LOAD_ALBUM_WITH_PHOTOS_FAILURE, RESET_LOAD_ALBUM_WITH_PHOTOS,
    UPLOAD_PHOTO_FILE, UPLOAD_PHOTO_FILE_SUCCESS, UPLOAD_PHOTO_FILE_FAILURE, RESET_UPLOAD_PHOTO_FILE
} from "../action/action_photo";

const INITIAL_STATE = {
    photoList : { photos : [], loading : false, error : null },
    pickPhoto : { photo : null, loading : false, error : null },
    uploading : { successCount : 0, loading : false, error : null}
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

        case UPLOAD_PHOTO_FILE :
            return { ...state, uploading : { ...state.uploading, loading : true, error : null}};
        case UPLOAD_PHOTO_FILE_SUCCESS :
            let nextCount = state.uploading.successCount;
            return { ...state, uploading : { successCount : nextCount+1, loading : false, error : null}};
        case UPLOAD_PHOTO_FILE_FAILURE :
            error = action.payload.data || {message : action.payload.message}
            return { ...state, uploading : { ...state.uploading, loading : false, error : error}};
        case RESET_UPLOAD_PHOTO_FILE :
            return { ...state, uploading : { successCount : 0, loading : false, error : null}};

        default :
            return state;
    }
}
