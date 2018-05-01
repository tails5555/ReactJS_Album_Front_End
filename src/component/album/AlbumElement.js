import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../../index.css';
import './title.css'
class AlbumElement extends Component{
    componentWillMount(){
        this.props.fetchAlbum(this.props.albumId);
    }
    componentWillUnmount(){
        this.props.resetFetchAlbum();
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.albumId !== nextProps.albumId){
            this.props.resetFetchAlbum();
            this.props.fetchAlbum(nextProps.albumId);
        }
    }
    render(){
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
            <div class="hn text-center">
                <h1 class="display-3 title">{title}</h1>
                <p class="lead">ReactJS를 기반으로 한 앨범 구현 페이지입니다.</p>
                <hr class="my-4" />
            </div>
        )
    }
}
export default withRouter(AlbumElement);