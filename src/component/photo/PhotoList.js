import React, {Component} from 'react';
import {PhotoElement} from "./index";
import {withRouter} from 'react-router-dom';
import '../../index.css';
import './photoBlock.css';
// PhotoList는 각 앨범 별 사진 정보들을 가져와서 보여주는 Component이다.
class PhotoList extends Component{
    // 컴포넌트에서 사진 선택 이후 삭제 작업을 적용하기 위해 여기서는 selectIndex를 state로 적용시켰다.
    constructor(props){
        super(props);
        this.state = { selectIndex : [] }
    }
    // 사용자가 사진 내부에서 선택을 하였을 때 각 Index를 넣거나 배제하는 역할을 하는 handleClick 함수이다.
    handleSelectClick(photoId){
        let tmpIndexes = this.state.selectIndex.slice();
        if(!tmpIndexes.includes(photoId)){
            tmpIndexes.push(photoId);
        }else{
            for(var i in tmpIndexes){
                if(tmpIndexes[i] === photoId){
                    tmpIndexes.splice(i,1);
                    break;
                }
            }
        }
        tmpIndexes.sort(function(a, b){
            return a - b;
        });
        this.setState({ selectIndex : tmpIndexes });
    }

    // 사용자가 선택한 인덱스에 따라서 전체 삭제를 진행을 할 수 있도록 한다.
    handleDeleteClick(){
        let isDeleted = window.confirm("삭제를 진행합니다. 계속 하시겠습니까?");
        if(isDeleted){
            this.props.deletePhotos(this.state.selectIndex);
        }
    }

    // 메뉴에서 앨범을 선택하고 난 뒤에 사진 목록을 추출한다.
    componentWillMount(){
        this.props.fetchPhotos(this.props.albumId);
    }

    // 다른 메뉴로 옮겨지는 경우에는 일시적으로 사진 목록에 대해 초기화를 한다.
    componentWillUnmount(){
        this.props.resetFetchPhotos();
        this.props.resetDeletePhotos();
        this.setState({ selectIndex : [] });
    }

    // 사용자가 앨범 목록들 중에서 다른 앨범을 선택할 때는 이에 맞춰서 변경이 되도록 반영한다.
    componentWillReceiveProps(nextProps) {
        if(this.props.albumId !== nextProps.albumId){
            this.props.resetFetchPhotos();
            this.props.fetchPhotos(nextProps.albumId);
            this.setState({ selectIndex : [] });
        }
    }

    // shouldComponentUpdate에 대해서는 외부에서 적용을 시켜서 여기서는 할 필요가 없다.

    // render는 각 앨범에 존재하는 사진 목록들에 대해서 가져올 때 이용한다.
    render() {
        const {photos, loading, error} = this.props.photos;
        const {status} = this.props.uploadState;
        const {message} = this.props.deleteStatus;
        if(status === 'REDIRECT'){
            this.props.resetAllUpload();
            this.props.resetFetchPhotos();
            this.props.fetchPhotos(this.props.albumId);
        }
        if(message === 'PHOTOS_DELETE_COMPLETE') {
            alert("일부 사진 삭제가 완료되었습니다.");
            this.props.resetDeletePhotos();
            this.setState({ selectIndex : [] });
            this.props.history.push("/");
        }
        let photoElements;
        if(photos.length>0){
            photoElements = photos.map((photo, idx) => {
                return(
                    <div className="col-md-2 photoElement" key={idx}>
                        <PhotoElement photoData={photo} />
                        {
                            this.state.selectIndex.includes(photo.id) ?
                                <button type="button" className="btn btn-block btn-warning" onClick={() => this.handleSelectClick(photo.id)}>취소하기</button> :
                                <button type="button" className="btn btn-block btn-primary" onClick={() => this.handleSelectClick(photo.id)}>선택하기</button>
                        }

                    </div>
                );
            });
        }else if(loading){
            photoElements = <h2 className="hn">사진을 불러오는 중입니다...</h2>;
        }else if(error){
            photoElements = <h2 className="hn">유효하지 않는 앨범을 요청했습니다...</h2>;
        }
        return(
            <form>
                <div className="row photoBlock">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-block btn-danger" onClick={() => this.handleDeleteClick()}>파일 선택 삭제</button>
                    </div>
                    {photoElements}
                </div>
            </form>
        )
    }
}
export default withRouter(PhotoList);