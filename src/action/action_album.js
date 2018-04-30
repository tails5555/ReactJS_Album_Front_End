import axios from 'axios';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_ALBUMS_SUCCESS = 'LOAD_ALBUMS_SUCCESS';
export const LOAD_ALBUMS_FAILURE = 'LOAD_ALBUMS_FAILURE';
export const RESET_LOAD_ALBUMS = 'RESET_LOAD_ALBUMS';

export const SELECT_ALBUM = 'SELECT_ALBUM';
export const SELECT_ALBUM_SUCCESS = 'SELECT_ALBUM_SUCCESS';
export const SELECT_ALBUM_FAILURE = 'SELECT_ALBUM_FAILURE';
export const RESET_SELECT_ALBUM = 'RESET_SELECT_ALBUM';

const ROOT_URL = 'http://localhost:8080/react_album_example_01/main';

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

export function loadAlbumsSuccess(albums){
    return{
        type : LOAD_ALBUMS_SUCCESS,
        payload : albums.data
    }
}

export function loadAlbumsFailure(error){
    return{
        type : LOAD_ALBUMS_FAILURE,
        payload : error
    }
}

export function resetLoadAlbums(){
    return{
        type : RESET_LOAD_ALBUMS
    }
}

export function selectAlbum(albumId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/album/${albumId}`,
    });
    return{
        type : SELECT_ALBUM,
        payload : request
    }
}

export function selectAlbumSuccess(album){
    return{
        type : SELECT_ALBUM_SUCCESS,
        payload : album.data
    }
}

export function selectAlbumFailure(error){
    return{
        type : SELECT_ALBUM_FAILURE,
        payload : error
    }
}

export function resetSelectAlbum(){
    return{
        type : RESET_SELECT_ALBUM
    }
}