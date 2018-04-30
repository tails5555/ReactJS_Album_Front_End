import axios from 'axios';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_ALBUMS_SUCCESS = 'LOAD_ALBUMS_SUCCESS';
export const LOAD_ALBUMS_FAILURE = 'LOAD_ALBUMS_FAILURE';
export const RESET_LOAD_ALBUMS = 'RESET_LOAD_ALBUMS';

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