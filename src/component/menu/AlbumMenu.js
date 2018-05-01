import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../index.css';
class AlbumMenu extends Component{
    componentWillMount(){
        this.props.fetchAlbums();
    }
    componentWillUnmount(){
        this.props.resetFetchAlbums();
    }
    render(){
        const {albums, loading, error} = this.props.albums;
        let menuList;
        if(albums.length>0){
            menuList = albums.map((album) => {
                return(
                    <li className="nav-item" key={album.id}>
                        <Link className="nav-link hn" to={`/album/${album.id}`}>
                            {album.name}
                        </Link>
                    </li>
                )
            })
        }else if(loading){
            menuList = (
                <li className="nav-item hn">
                    메뉴를 불러오는 중입니다...
                </li>
            )
        }else if(error){
            menuList = (
                <li className="nav-item hn">
                    메뉴를 불러오는 도중 에러가 발생했습니다.
                </li>
            )
        }
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand hn" to="/">React Album Example</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        {menuList}
                    </ul>
                </div>
            </nav>
        )
    }
}
export default AlbumMenu;