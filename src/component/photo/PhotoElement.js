import React, {Component} from 'react';
class PhotoElement extends Component{
    render() {
        return (
            <div className="card text-white bg-success mb-3">
                <h3 className="card-header"></h3>
                <img style={{
                    height : "200px",
                    width : "100%",
                    display : "block"
                }}  />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">확대하기</a>
                    <a href="#" className="card-link">삭제하기</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        )
    }
}
export default PhotoElement;