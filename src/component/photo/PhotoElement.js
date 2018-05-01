import React, {Component} from 'react';
class PhotoElement extends Component{
    render() {
        const {id, title, uploadTime} = this.props.photoData;
        console.log(id);
        return (
            <div className="card bg-secondary mb-3">
                <h3 className="card-header">{title}</h3>
                <img style={{
                    width : "100%",
                    display : "block"
                }} src={`http://localhost:8080/react_album_example_01/main/photo/${id}` }/>
                <div className="card-body">
                    <a href="#" className="card-link">확대하기</a>
                    <a href="#" className="card-link">삭제하기</a>
                </div>
                <div className="card-footer text-muted">
                    {uploadTime}
                </div>
            </div>
        )
    }
}
export default PhotoElement;