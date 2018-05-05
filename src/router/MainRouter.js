import React from 'react';
import AlbumMenuContainer from '../container/AlbumMenuContainer';
import {Route, Redirect} from 'react-router-dom';
import AlbumMainPage from "../page/AlbumMainPage";

const MainRouter = () => {
    return(
        <div>
            <AlbumMenuContainer />
            <Route exact path="/" render={() => <p>어서오십시오</p>} />
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