import axios from 'axios';

export const LOAD_ALBUM_WITH_PHOTOS = 'LOAD_ALBUM_WITH_PHOTOS';
export const LOAD_ALBUM_WITH_PHOTOS_SUCCESS = 'LOAD_ALBUM_WITH_PHOTOS_SUCCESS';
export const LOAD_ALBUM_WITH_PHOTOS_FAILURE = 'LOAD_ALBUM_WITH_PHOTOS_FAILURE';
export const RESET_LOAD_ALBUM_WITH_PHOTOS = 'RESET_LOAD_ALBUM_WITH_PHOTOS';

export const UPLOAD_PHOTO_FILE = 'UPLOAD_PHOTO_FILE';
export const UPLOAD_PHOTO_FILE_SUCCESS = 'UPLOAD_PHOTO_FILE_SUCCESS';
export const UPLOAD_PHOTO_FILE_FAILURE = 'UPLOAD_PHOTO_FILE_FAILURE';
export const RESET_UPLOAD_PHOTO_FILE = 'RESET_UPLOAD_PHOTO_FILE';

export const ALL_UPLOADING_EXECUTE = 'ALL_UPLOADING_EXECUTE';
export const ALL_UPLOADING_COMPLETE = 'ALL_UPLOADING_COMPLETE';
export const RESET_ALL_UPLOADING = 'RESET_ALL_UPLOADING';

export const LOAD_PHOTO_INFO = 'LOAD_PHOTO_INFO';
export const LOAD_PHOTO_INFO_SUCCESS = 'LOAD_PHOTO_INFO_SUCCESS';
export const LOAD_PHOTO_INFO_FAILURE = 'LOAD_PHOTO_INFO_FAILURE';
export const RESET_LOAD_PHOTO_INFO = 'RESET_LOAD_PHOTO_INFO';

export const DELETE_PHOTO = 'DELETE_PHOTO';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAILURE = 'DELETE_PHOTO_FAILURE';
export const RESET_DELETE_PHOTO = 'RESET_DELETE_PHOTO';

export const DELETE_SELECT_PHOTOS = 'DELETE_SELECT_PHOTOS';
export const DELETE_SELECT_PHOTOS_SUCCESS = 'DELETE_SELECT_PHOTOS_SUCCESS';
export const DELETE_SELECT_PHOTOS_FAILURE = 'DELETE_SELECT_PHOTOS_FAILURE';
export const RESET_DELETE_SELECT_PHOTOS = 'RESET_DELETE_SELECT_PHOTOS';

const ROOT_URL = 'http://localhost:8080/react_album_example_01/main';

export function loadAlbumWithPhotos(albumId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/albumWithPhoto/${albumId}`
    });
    return{
        type : LOAD_ALBUM_WITH_PHOTOS,
        payload : request
    }
}

export function loadAlbumWithPhotosSuccess(photos){
    return{
        type : LOAD_ALBUM_WITH_PHOTOS_SUCCESS,
        payload : photos.data
    }
}

export function loadAlbumWithPhotosFailure(error){
    return{
        type : LOAD_ALBUM_WITH_PHOTOS_FAILURE,
        payload : error
    }
}

export function resetAlbumWithPhotos(){
    return{
        type : RESET_LOAD_ALBUM_WITH_PHOTOS
    }
}

export function uploadPhotoFile(file, albumId){
    let formData = new FormData();
    formData.append('file', file);
    const request = axios({
        method : 'post',
        url : `${ROOT_URL}/album/${albumId}/upload/`,
        data : formData,
        headers : {
            "Content-Type" : "multipart/form-data"
        }
    });
    return{
        type : UPLOAD_PHOTO_FILE,
        payload : request
    }
}

export function uploadPhotoFileSuccess(message){
    return{
        type : UPLOAD_PHOTO_FILE_SUCCESS,
        payload : message.data
    }
}

export function uploadPhotoFileFailure(error){
    return{
        type : UPLOAD_PHOTO_FILE_FAILURE,
        payload : error
    }
}

export function resetUploadPhotoFile(){
    return{
        type : RESET_UPLOAD_PHOTO_FILE
    }
}

export function allUploadingExecute(){
    return{
        type : ALL_UPLOADING_EXECUTE
    }
}

export function allUploadingComplete(){
    return{
        type : ALL_UPLOADING_COMPLETE
    }
}

export function resetAllUploading(){
    return{
        type : RESET_ALL_UPLOADING
    }
}

export function loadPhotoInfo(photoId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/photo/info/${photoId}`
    });
    return{
        type : LOAD_PHOTO_INFO,
        payload : request
    }
}

export function loadPhotoInfoSuccess(photo){
    return{
        type : LOAD_PHOTO_INFO_SUCCESS,
        payload : photo.data
    }
}

export function loadPhotoInfoFailure(error){
    return{
        type : LOAD_PHOTO_INFO_FAILURE,
        payload : error
    }
}

export function resetLoadPhotoInfo(){
    return{
        type : RESET_LOAD_PHOTO_INFO
    }
}

export function deletePhoto(photoId){
    const request=axios({
        method : 'delete',
        url : `${ROOT_URL}/photo/delete/${photoId}`
    });
    return{
        type : DELETE_PHOTO,
        payload : request
    }
}

export function deletePhotoSuccess(message){
    return{
        type : DELETE_PHOTO_SUCCESS,
        payload : message.data
    }
}

export function deletePhotoFailure(error){
    return{
        type : DELETE_PHOTO_FAILURE,
        payload : error
    }
}

export function resetDeletePhoto(){
    return{
        type : RESET_DELETE_PHOTO
    }
}