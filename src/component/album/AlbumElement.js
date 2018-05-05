import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {renderDropzoneInput} from "../form";
import '../../index.css';
import './title.css';
import {
    allUploadingComplete,
    allUploadingExecute, uploadPhotoFile, uploadPhotoFileFailure,
    uploadPhotoFileSuccess
} from "../../action/action_photo";

const imageUploading = (values, dispatch, props) => {
    const fileArray = values.photoFiles;
    // 데이터 전송 실패 여부에 대해 해결하는 목적으로 간략히 resultCount로 처리하고 이에 대한 자세한 해결 방안은 계속 생각을 해 보겠다.
    if(fileArray){
        let resultCount = fileArray.length; // 총 보내는 파일의 수를 초기화 시킨다.
        dispatch(allUploadingExecute());
        fileArray.map((file) => {
            // 각 사용자가 Dropzone을 통해 사진을 가져와서 업로딩을 진행한다.
            dispatch(uploadPhotoFile(file, props.albumId)).then(res => {
                // 각 사진들을 업로딩하면서 실패하는 경우에는 아래와 같은 함수를 진행한다.
                if (res.payload && res.payload.status !== 200) {
                    resultCount = resultCount-1; // 실패한 파일에 대한 카운팅을 배제한다.
                    dispatch(uploadPhotoFileFailure(res.payload.data));
                    throw new SubmissionError(res.payload.data);
                }
                // 그렇지만 각 사진들의 업로딩이 성공을 하는 경우 아래의 함수를 실행한다.
                dispatch(uploadPhotoFileSuccess(res.payload.data));
            });
        });
        if(fileArray.length === resultCount){
            alert("모든 파일 전송이 완료 되었습니다.");
            dispatch(allUploadingComplete());
        }else{
            alert("사진 일부에 문제가 있습니다. 다시 시도하시길 바랍니다.");
            dispatch(allUploadingComplete());
        }
    }
}
// AlbumElement는 앨범을 선택할 시에 맨 처음에 나오는 부분이다.
class AlbumElement extends Component{
    // Album을 선택할 때 각 앨범의 정보를 추출한다.
    componentWillMount(){
        this.props.fetchAlbum(this.props.albumId);
    }
    // 이 Component가 사라질 때 업로드 Form과 Album 추출 정보를 재설정한다.
    componentWillUnmount(){
        this.props.resetForm();
        this.props.resetFetchAlbum();
    }
    // 사용자가 앨범 목록들 중에서 다른 앨범을 선택할 때는 이에 맞춰서 변경이 되도록 반영한다.
    componentWillReceiveProps(nextProps) {
        if(this.props.albumId !== nextProps.albumId){
            this.props.resetForm();
            this.props.resetFetchAlbum();
            this.props.fetchAlbum(nextProps.albumId);
        }
    }
    // shouldComponentUpdate에 대해서는 외부에서 적용을 시켜서 여기서는 할 필요가 없다.

    // render는 각 앨범 정보와 앨범에 올릴 사진 목록들을 저장할 때 적용시킨다.
    render(){
        const {handleSubmit} = this.props;
        const {album, loading, error} = this.props.album;
        const {status} = this.props.uploadState;
        let title;

        if(status === 'COMPLETE'){
            this.props.resetFetchAlbum();
            this.props.resetUploadFile();
            this.props.resetAllUpload();
            this.props.history.push("/"); // redirect의 문제가 발생하여 임시 방편으로 메인 페이지로 설정을 해 두었다.
        }

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
// 이 Component에서는 Redux Form을 이용하기 때문에 이를 이용해서 export를 진행해야 한다.
export default reduxForm({
    form : 'uploadForm'
})(withRouter(AlbumElement));