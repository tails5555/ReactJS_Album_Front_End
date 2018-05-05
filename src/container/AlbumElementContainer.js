import {AlbumElement} from "../component/album";
import {connect} from 'react-redux';
import {
    selectAlbum, selectAlbumSuccess, selectAlbumFailure, resetSelectAlbum
} from "../action/action_album";
import {
    resetAllUploading, resetUploadPhotoFile
} from "../action/action_photo";
import {reset} from 'redux-form';
const mapDispatchToProps = (dispatch) => {
    return{
        fetchAlbum : (albumId) => {
            dispatch(selectAlbum(albumId)).then((response) => {
                if(!response.error){
                    dispatch(selectAlbumSuccess(response.payload));
                }else{
                    dispatch(selectAlbumFailure(response.payload));
                }
            });
        },
        resetFetchAlbum : () => {
            dispatch(resetSelectAlbum());
        },
        resetForm : () => {
            dispatch(reset('uploadForm'));
        },
        resetUploadFile : () => {
            dispatch(resetUploadPhotoFile());
        },
        resetAllUpload : () => {
            dispatch(resetAllUploading());
        }
    }
}

function mapStateToProps(state){
    return{
        album : state.album.selectAlbum,
        uploading : state.photo.uploading,
        uploadState : state.photo.uploadState,
        uploadForm : state.form.uploadForm
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumElement);