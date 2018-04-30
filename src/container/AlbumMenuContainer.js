import {AlbumMenu} from "../component/menu";
import {connect} from 'react-redux';
import {loadAlbums, loadAlbumsSuccess, loadAlbumsFailure, resetLoadAlbums} from "../action/action_album";

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAlbums : () => {
            dispatch(loadAlbums()).then((response) => {
                if(!response.error){
                    dispatch(loadAlbumsSuccess(response.payload));
                }else{
                    dispatch(loadAlbumsFailure(response.payload));
                }
            })
        },
        resetFetchAlbums : () => {
            dispatch(resetLoadAlbums());
        }
    }
}

function mapStateToProps(state){
    return{
        albums : state.album.albumList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumMenu);