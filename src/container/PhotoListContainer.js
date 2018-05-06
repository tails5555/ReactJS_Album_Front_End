import {PhotoList} from "../component/photo";
import {connect} from 'react-redux';
import {
    loadAlbumWithPhotos, loadAlbumWithPhotosSuccess, loadAlbumWithPhotosFailure, resetAlbumWithPhotos,
    resetAllUploading, deleteSelectPhotos, deleteSelectPhotosSuccess, deleteSelectPhotosFailure, resetDeleteSelectPhotos
} from "../action/action_photo";
const mapDispatchToProps = (dispatch) => {
    return{
        fetchPhotos : (albumId) => {
            dispatch(loadAlbumWithPhotos(albumId)).then((response) => {
                if(!response.error){
                    dispatch(loadAlbumWithPhotosSuccess(response.payload));
                }else{
                    dispatch(loadAlbumWithPhotosFailure(response.payload));
                }
            });
        },
        resetFetchPhotos : () => {
            dispatch(resetAlbumWithPhotos());
        },
        resetAllUpload : () => {
            dispatch(resetAllUploading());
        },
        deletePhotos : (selectIndexes) => {
            dispatch(deleteSelectPhotos(selectIndexes)).then((response) => {
                if(!response.error){
                    dispatch(deleteSelectPhotosSuccess(response.payload));
                }else{
                    dispatch(deleteSelectPhotosFailure(response.payload));
                }
            })
        },
        resetDeletePhotos : () => {
            dispatch(resetDeleteSelectPhotos());
        }
    }
}
function mapStateToProps(state){
    return{
        photos : state.photo.photoList,
        uploadState : state.photo.uploadState,
        deleteStatus : state.photo.deletePhoto
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);