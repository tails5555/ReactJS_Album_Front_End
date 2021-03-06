import {
    LOAD_ALBUM_WITH_PHOTOS, LOAD_ALBUM_WITH_PHOTOS_SUCCESS, LOAD_ALBUM_WITH_PHOTOS_FAILURE,
    RESET_LOAD_ALBUM_WITH_PHOTOS,
    UPLOAD_PHOTO_FILE, UPLOAD_PHOTO_FILE_SUCCESS, UPLOAD_PHOTO_FILE_FAILURE, RESET_UPLOAD_PHOTO_FILE,
    ALL_UPLOADING_EXECUTE, ALL_UPLOADING_COMPLETE, RESET_ALL_UPLOADING,
    LOAD_PHOTO_INFO, LOAD_PHOTO_INFO_SUCCESS, LOAD_PHOTO_INFO_FAILURE, RESET_LOAD_PHOTO_INFO,
    DELETE_PHOTO, DELETE_PHOTO_SUCCESS, DELETE_PHOTO_FAILURE, RESET_DELETE_PHOTO, DELETE_SELECT_PHOTOS,
    DELETE_SELECT_PHOTOS_SUCCESS, DELETE_SELECT_PHOTOS_FAILURE, RESET_DELETE_SELECT_PHOTOS
} from "../action/action_photo";

const INITIAL_STATE = {
    photoList : { photos : [], loading : false, error : null },
    pickPhoto : { photo : null, loading : false, error : null },
    uploading : { message : null, loading : false, error : null},
    uploadState : { status : 'NOT_EXECUTING' },
    deletePhoto : { message : null, delLoading : false, delError : null} // 이는 하나 삭제이든 모든 삭제이든 둘 다 쓰인다.
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
            error = action.payload.data || {message : action.payload.message};
            return { ...state, uploading : { message : 'FAILED', loading : false, error : error}};
        case RESET_UPLOAD_PHOTO_FILE :
            return { ...state, uploading : { message : null, loading : false, error : null}};

        case LOAD_PHOTO_INFO :
            return { ...state, pickPhoto : { photo : null, loading : true, error : null}};
        case LOAD_PHOTO_INFO_SUCCESS :
            return { ...state, pickPhoto : { photo : action.payload, loading : false, error : null}};
        case LOAD_PHOTO_INFO_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return { ...state, pickPhoto : { photo : null, loading : false, error : error}};
        case RESET_LOAD_PHOTO_INFO :
            return { ...state, pickPhoto : { photo : null, loading : false, error : null}};

        case DELETE_PHOTO :
            return { ...state, deletePhoto : { message : null, delLoading : true, delError : null}};
        case DELETE_PHOTO_SUCCESS :
            return { ...state, deletePhoto : { message : action.payload, delLoading : false, delError : null}};
        case DELETE_PHOTO_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return { ...state, deletePhoto : { message : null, delLoading : false, delError : error}};
        case RESET_DELETE_PHOTO :
            return { ...state, deletePhoto : { message : null, delLoading : false, delError : null}};

        case DELETE_SELECT_PHOTOS :
            return { ...state, deletePhoto : { message : null, delLoading : true, delError : null}};
        case DELETE_SELECT_PHOTOS_SUCCESS :
            return { ...state, deletePhoto : { message : action.payload, delLoading : false, delError : null}};
        case DELETE_SELECT_PHOTOS_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return { ...state, deletePhoto : { message : null, delLoading : false, delError : error}};
        case RESET_DELETE_SELECT_PHOTOS :
            return { ...state, deletePhoto : { message : null, delLoading : false, delError : null}};

        default :
            return state;
    }
}
