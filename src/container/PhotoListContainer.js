import {PhotoList} from "../component/photo";
import {connect} from 'react-redux';
import {loadAlbumWithPhotos, loadAlbumWithPhotosSuccess, loadAlbumWithPhotosFailure, resetAlbumWithPhotos} from "../action/action_photo";
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
        }
    }
}
function mapStateToProps(state){
    return{
        photos : state.photo.photoList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);