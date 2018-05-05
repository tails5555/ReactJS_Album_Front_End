import React, {Component} from 'react';
import {PhotoElement} from "./index";
import '../../index.css';
import './photoBlock.css';
// PhotoList는 각 앨범 별 사진 정보들을 가져와서 보여주는 Component이다.
class PhotoList extends Component{
    // 메뉴에서 앨범을 선택하고 난 뒤에 사진 목록을 추출한다.
    componentWillMount(){
        this.props.fetchPhotos(this.props.albumId);
    }
    // 다른 메뉴로 옮겨지는 경우에는 일시적으로 사진 목록에 대해 초기화를 한다.
    componentWillUnmount(){
        this.props.resetFetchPhotos();
    }
    // 사용자가 앨범 목록들 중에서 다른 앨범을 선택할 때는 이에 맞춰서 변경이 되도록 반영한다.
    componentWillReceiveProps(nextProps) {
        if(this.props.albumId !== nextProps.albumId){
            this.props.resetFetchPhotos();
            this.props.fetchPhotos(nextProps.albumId);
        }
    }
    // shouldComponentUpdate에 대해서는 외부에서 적용을 시켜서 여기서는 할 필요가 없다.

    // render는 각 앨범에 존재하는 사진 목록들에 대해서 가져올 때 이용한다.
    render() {
        const {photos, loading, error} = this.props.photos;
        const {status} = this.props.uploadState;
        if(status === 'REDIRECT'){
            this.props.resetAllUpload();
            this.props.resetFetchPhotos();
            this.props.fetchPhotos(this.props.albumId);
        }
        let photoElements;
        if(photos.length>0){
            photoElements = photos.map((photo, idx) => {
                return(
                    <div className="col-md-2 photoElement" key={idx}>
                        <PhotoElement photoData={photo} />
                    </div>
                );
            });
        }else if(loading){
            photoElements = <h2 className="hn">사진을 불러오는 중입니다...</h2>;
        }else if(error){
            photoElements = <h2 className="hn">유효하지 않는 앨범을 요청했습니다...</h2>;
        }
        return(
            <div className="row photoBlock">
                {photoElements}
            </div>
        )
    }
}
export default PhotoList;