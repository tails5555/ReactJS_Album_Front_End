import React, {Component} from 'react';
import {PhotoElement} from "./index";
class PhotoList extends Component{
    render() {
        let imageList = <PhotoElement id={}/>
        return(
            <div className="row">
                <div className="col-md-4">
                    <PhotoElement />
                </div>
            </div>
        )
    }
}
export default PhotoList;