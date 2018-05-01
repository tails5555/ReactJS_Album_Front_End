import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './router/MainRouter';
const store = configureStore();
class ApplicationRoot extends Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </Provider>
        )
    }
}
export default ApplicationRoot;