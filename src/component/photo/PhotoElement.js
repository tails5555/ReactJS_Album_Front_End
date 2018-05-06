import React, {Component} from 'react';
// PhotoElement는 각 사진 정보들에 대해서 표식을 할 수 있도록 하기 위한 Component이다.
class PhotoElement extends Component{
    render() {
        // 사진의 정보를 각각 불러온다. 이는 PhotoList에서 각 사진 별로 props를 통해 받아온다.
        const {id, title, uploadTime} = this.props.photoData;
        return (
            <div className="card bg-secondary mb-3">
                <h3 className="card-header text-center">{title}</h3>
                <img className="zoom" style={{
                    width : "100%",
                    display : "block"
                }} src={`http://localhost:8080/react_album_example_01/main/photo/${id}` }/>
                <div className="card-body">
                    <a href="#" className="card-link">확대하기</a>
                    <a href="#" className="card-link">삭제하기</a>
                </div>
                <div className="card-footer text-muted text-center">
                    {uploadTime}
                </div>
            </div>
        )
    }
}
export default PhotoElement;