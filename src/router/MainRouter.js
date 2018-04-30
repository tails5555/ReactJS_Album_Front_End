import React, {Component} from 'react';
import {Router} from 'react-router-dom';
const MainRouter = () => {
    return(
        <div>
            <Router exact path={"/album/:id"} ></Router>
        </div>
    )
};
export default MainRouter;