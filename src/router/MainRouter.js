import React from 'react';
import AlbumMenuContainer from '../container/AlbumMenuContainer';
import {Route, Redirect} from 'react-router-dom';
import {AlbumMainPage, HomeMainPage} from "../page";

const MainRouter = () => {
    return(
        <div>
            <AlbumMenuContainer />
            <Route exact path="/" component={HomeMainPage} />
            <Route exact path="/album/:id" component={AlbumMainPage} />
            <Route
                exact
                path="/album/:id/complete"
                render={({ match }) => (
                    <Redirect to={`/album/${match.params.id}`} />
                )}
            />
        </div>
    )
};
export default MainRouter;