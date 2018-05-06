import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import '../../index.css';
import './photoInfo.css';
class PhotoInfo extends Component{
    componentWillMount(){
        this.props.fetchPhoto(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.resetFetchPhoto();
    }
    handleClick(photoId){
        let isDelete = window.confirm("삭제를 진행합니다. 계속 하시겠습니까?");
        if(isDelete){
            this.props.deletePhoto(photoId);
        }
    }
    render(){
        const {photo, loading, error} = this.props.pickPhoto;
        const {message} = this.props.deleteStatus;
        let photoInfo;
        if(message === 'DELETE_COMPLETE'){
            alert("사진 삭제가 완료 되었습니다.");
            this.props.resetDelete();
            this.props.resetFetchPhoto();
            this.props.history.push(`/album/${photo.album.id}`);
        }
        if(loading){
            photoInfo=<h2>사진 정보를 불러오는 중입니다...</h2>
        }else if(!photo || error){
            photoInfo=<h2>사진 정보를 불러오는 중 에러가 발생했습니다.</h2>
        }else{
            photoInfo = (
                <div>
                    <div className="text-center animate_element">
                        <img src={`http://localhost:8080/react_album_example_01/main/photo/view/${photo.id}`} width={photo.width} height={photo.height} />
                    </div>
                    <br/>
                    <div className="text-center hn animate_element">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">{photo.title.toUpperCase()}</div>
                            <div className="card-body">
                                <h4 className="card-title">{photo.title}.{photo.suffix.toLowerCase()}</h4>
                                <p className="card-text">파일 용량 : {photo.size} Bytes</p>
                                <p className="card-text">그림 너비 : {photo.width} px</p>
                                <p className="card-text">그림 높이 : {photo.height} px</p>
                                <p className="card-text">올린 날짜 : {photo.uploadTime}</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="text-center animate_element">
                        <Link to={`/album/${photo.album.id}`}><button className="btn btn-block btn-info">이전으로</button></Link>
                        <br/>
                        <button className="btn btn-block btn-danger" onClick={() => this.handleClick(photo.id)}>삭제하기</button>
                        <br/>
                    </div>
                </div>
            )
        }
        return(
            <div className="container">
                <br/>
                {photoInfo}
            </div>
        )
    }
}
export default withRouter(PhotoInfo);