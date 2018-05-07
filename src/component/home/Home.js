import React, {Component} from 'react';
import '../../index.css';
import './title.css';
class Home extends Component{
    render(){
        return(
            <div className="container">
                <h1 className="hn display-3 text-center title">ReactJS Album Service</h1>
                <hr/>
                <h3 className="text-center">ReactJS Album Service에 오신 것을 환영합니다.</h3>
                <h3 className="text-center">위의 앨범 메뉴를 이용해서 각 사진을 업로딩해서 이용하면 됩니다.</h3>
            </div>
        )
    }
}
export default Home;