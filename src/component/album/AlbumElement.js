import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {renderDropzoneInput} from "../form";
import '../../index.css';
import './title.css';
import {uploadPhotoFile, uploadPhotoFileFailure, uploadPhotoFileSuccess} from "../../action/action_photo";
const imageUploading = (values, dispatch, props) => {
    const fileArray = values.photoFiles;
    if(fileArray){
        fileArray.map((file) => {
            dispatch(uploadPhotoFile(file, props.albumId)).then(res =>{
                if (res.payload && res.payload.status !== 200) {
                    dispatch(uploadPhotoFileFailure(res.payload.data));
                    throw new SubmissionError(res.payload.data);
                }
                dispatch(uploadPhotoFileSuccess(res.payload.data));
            });
        });
    }
}
class AlbumElement extends Component{
    componentWillMount(){
        this.props.fetchAlbum(this.props.albumId);
    }
    componentWillUnmount(){
        this.props.resetForm();
        this.props.resetFetchAlbum();
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.albumId !== nextProps.albumId){
            this.props.resetForm();
            this.props.resetFetchAlbum();
            this.props.fetchAlbum(nextProps.albumId);
        }
    }
    render(){
        const {handleSubmit} = this.props;
        const {album, loading, error} = this.props.album;
        let title;
        if(loading){
            title = "앨범 제목을 불러오는 중입니다...";
        }else if(error) {
            title = "앨범 제목을 불러오는 도중 에러가 발생했습니다...";
        }else if(album){
            title = album.name + "목록";
        }
        return(
            <div className="hn text-center">
                <h1 className="display-3 title">{title}</h1>
                <p className="lead">ReactJS Component LifeCycle + Redux + Spring Async Album!!!</p>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(imageUploading)} encType="multipart/form-data">
                            <Field
                                name="photoFiles"
                                component={renderDropzoneInput}
                            />
                            <br/>
                            <button type="submit" className="btn btn-primary">사진 추가하기</button>
                        </form>
                    </div>
                </div>
                <hr className="my-4" />
            </div>
        )
    }
}
export default reduxForm({
    form : 'uploadForm'
})(withRouter(AlbumElement));