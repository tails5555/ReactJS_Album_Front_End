import React, {Component} from 'react';
import {PhotoElement} from "./index";
import '../../index.css';
import './photoBlock.css';
class PhotoList extends Component{
    componentWillMount(){
        this.props.fetchPhotos(this.props.albumId);
    }
    componentWillUnmount(){
        this.props.resetFetchPhotos();
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.albumId !== nextProps.albumId){
            this.props.resetFetchPhotos();
            this.props.fetchPhotos(nextProps.albumId);
        }
    }
    render() {
        const {photos, loading, error} = this.props.photos;
        let photoElements;
        if(photos.length>0){
            photoElements = photos.map((photo, idx) => {
                return(
                    <div className="col-md-2" key={idx}>
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