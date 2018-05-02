import {AlbumElement} from "../component/album";
import {connect} from 'react-redux';
import {
    selectAlbum, selectAlbumSuccess, selectAlbumFailure, resetSelectAlbum
} from "../action/action_album";
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
        }
    }
}

function mapStateToProps(state){
    return{
        album : state.album.selectAlbum,
        uploading : state.photo.uploading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumElement);