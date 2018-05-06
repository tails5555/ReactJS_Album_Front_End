import {PhotoInfo} from '../component/photo';
import {connect} from 'react-redux';
import {loadPhotoInfo, loadPhotoInfoSuccess, loadPhotoInfoFailure, resetLoadPhotoInfo,
         deletePhoto, deletePhotoSuccess, deletePhotoFailure, resetDeletePhoto} from '../action/action_photo';
const mapDispatchToProps = (dispatch) => {
    return{
        fetchPhoto : (photoId) => {
            dispatch(loadPhotoInfo(photoId)).then((response) => {
                if(!response.error){
                    dispatch(loadPhotoInfoSuccess(response.payload));
                }else{
                    dispatch(loadPhotoInfoFailure(response.payload));
                }
            });
        },
        resetFetchPhoto : () => {
            dispatch(resetLoadPhotoInfo());
        },
        deletePhoto : (photoId) => {
            dispatch(deletePhoto(photoId)).then((response) => {
                if(!response.error){
                    dispatch(deletePhotoSuccess(response.payload));
                }else{
                    dispatch(deletePhotoFailure(response.payload));
                }
            });
        },
        resetDelete : () => {
            dispatch(resetDeletePhoto());
        }
    }
}

function mapStateToProps(state){
    return{
        pickPhoto : state.photo.pickPhoto,
        deleteStatus : state.photo.deletePhoto
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoInfo);