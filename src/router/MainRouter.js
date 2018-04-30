import React from 'react';
import AlbumMenuContainer from '../container/AlbumMenuContainer';
import {Router, BrowserRouter} from 'react-router-dom';
const MainRouter = () => {
    return(
        <BrowserRouter>
            <AlbumMenuContainer />
        </BrowserRouter>
    )
};
export default MainRouter;