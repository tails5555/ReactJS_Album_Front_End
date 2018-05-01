import React, {Component} from 'react';
import {AlbumElementContainer, PhotoListContainer} from "../container";
import {withRouter} from 'react-router-dom';
class AlbumMainPage extends Component{
    state = {
        albumId : this.props.match.params.id
    };
    componentWillReceiveProps(nextProps) {
        this.setState({ albumId : nextProps.match.params.id });
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.state.albumId !== nextProps.match.params.id;
    }
    render(){
        return(
            <div>
                <AlbumElementContainer albumId={this.state.albumId} />
                <PhotoListContainer albumId={this.state.albumId} />
            </div>
        )
    }
}
export default withRouter(AlbumMainPage);