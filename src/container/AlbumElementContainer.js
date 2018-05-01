import {AlbumElement} from "../component/album";
import {connect} from 'react-redux';
import {
    selectAlbum, selectAlbumSuccess, selectAlbumFailure, resetSelectAlbum
} from "../action/action_album";

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
        }
    }
}

function mapStateToProps(state){
    return{
        album : state.album.selectAlbum
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumElement);