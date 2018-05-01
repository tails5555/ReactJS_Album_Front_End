import axios from 'axios';

export const LOAD_ALBUM_WITH_PHOTOS = 'LOAD_ALBUM_WITH_PHOTOS';
export const LOAD_ALBUM_WITH_PHOTOS_SUCCESS = 'LOAD_ALBUM_WITH_PHOTOS_SUCCESS';
export const LOAD_ALBUM_WITH_PHOTOS_FAILURE = 'LOAD_ALBUM_WITH_PHOTOS_FAILURE';
export const RESET_LOAD_ALBUM_WITH_PHOTOS = 'RESET_LOAD_ALBUM_WITH_PHOTOS';

export const UPLOAD_PHOTO_FILES = 'UPLOAD_PHOTO_FILES';
export const UPLOAD_PHOTO_FILES_SUCCESS = 'UPLOAD_PHOTO_FILES_SUCCESS';
export const UPLOAD_PHOTO_FILES_FAILURE = 'UPLOAD_PHOTO_FILES_FAILURE';
export const RESET_UPLOAD_PHOTO_FILES = 'RESET_UPLOAD_PHOTO_FILES';

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

export function uploadPhotoFiles(files, albumId){
    const formData = new FormData();
    console.log(files);
    formData.append('files', files);
    const request = axios.post(`${ROOT_URL}/album/${albumId}/upload/`, formData, {
        "content-type": "multipart/form-data"
    });
    return{
        type : UPLOAD_PHOTO_FILES,
        payload : request
    }
}