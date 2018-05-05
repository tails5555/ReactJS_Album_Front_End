import {PhotoList} from "../component/photo";
import {connect} from 'react-redux';
import {
    loadAlbumWithPhotos, loadAlbumWithPhotosSuccess, loadAlbumWithPhotosFailure, resetAlbumWithPhotos,
    resetAllUploading
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
        }
    }
}
function mapStateToProps(state){
    return{
        photos : state.photo.photoList,
        uploadState : state.photo.uploadState
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);