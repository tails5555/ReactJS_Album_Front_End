import axios from 'axios';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_ALBUMS_SUCCESS = 'LOAD_ALBUMS_SUCCESS';
export const LOAD_ALBUMS_FAILURE = 'LOAD_ALBUMS_FAILURE';
export const RESET_LOAD_ALBUMS = 'RESET_LOAD_ALBUMS';

export const LOAD_ALBUM_WITH_PHOTOS = 'LOAD_ALBUM_WITH_PHOTOS';
export const LOAD_ALBUM_WITH_PHOTOS_SUCCESS = 'LOAD_ALBUM_WITH_PHOTOS_SUCCESS';
export const LOAD_ALBUM_WITH_PHOTOS_FAILURE = 'LOAD_ALBUM_WITH_PHOTOS_FAILURE';
export const RESET_LOAD_ALBUM_WITH_PHOTOS = 'RESET_LOAD_ALBUM_WITH_PHOTOS';

const ROOT_URL = 'http://localhost:8080/react_album_example_01';

export function loadAlbums(){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/albumList`,
    });
    return{
        type : LOAD_ALBUMS,
        payload : request
    };
}