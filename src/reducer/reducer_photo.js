import {
    LOAD_ALBUM_WITH_PHOTOS, LOAD_ALBUM_WITH_PHOTOS_SUCCESS, LOAD_ALBUM_WITH_PHOTOS_FAILURE,
    RESET_LOAD_ALBUM_WITH_PHOTOS,
    UPLOAD_PHOTO_FILE, UPLOAD_PHOTO_FILE_SUCCESS, UPLOAD_PHOTO_FILE_FAILURE, RESET_UPLOAD_PHOTO_FILE,
    ALL_UPLOADING_EXECUTE, ALL_UPLOADING_COMPLETE, RESET_ALL_UPLOADING
} from "../action/action_photo";

const INITIAL_STATE = {
    photoList : { photos : [], loading : false, error : null },
    pickPhoto : { photo : null, loading : false, error : null },
    uploading : { message : null, loading : false, error : null},
    uploadState : { status : 'NOT_EXECUTING' }
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

        case ALL_UPLOADING_EXECUTE :
            return { ...state, uploadState : {status : 'EXECUTING'}};
        case ALL_UPLOADING_COMPLETE :
            return { ...state, uploadState : {status : 'COMPLETE'}};
        case RESET_ALL_UPLOADING :
            return { ...state, uploadState : {status : 'NOT_EXECUTING'}};

        case UPLOAD_PHOTO_FILE :
            return { ...state, uploading : { message : null, loading : true, error : null}};
        case UPLOAD_PHOTO_FILE_SUCCESS :
            return { ...state, uploading : { message : action.payload, loading : false, error : null}};
        case UPLOAD_PHOTO_FILE_FAILURE :
            error = action.payload.data || {message : action.payload.message}
            return { ...state, uploading : { message : 'FAILED', loading : false, error : error}};
        case RESET_UPLOAD_PHOTO_FILE :
            return { ...state, uploading : { message : null, loading : false, error : null}};

        default :
            return state;
    }
}
