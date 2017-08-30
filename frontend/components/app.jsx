import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/session_form_container';
import NavContainer from './nav/nav_container';
import ProfileContainer from './profile/profile_container';
import AlbumContainer from './album/album_container';
import AlbumFormContainer from './album/album_form_container';
import TracksContainer from './tracks/tracks_container';


const App = () => {
  return (
    <div className='app'>


        <Route path="/album/:albumId" component={AlbumContainer} />
        <Route path="/album/:albumId" component={TracksContainer} />
        <Route path="/profile/:userId" component={ProfileContainer} />
        <Route path="/profile/:userId/newAlbum" component={AlbumFormContainer} />
        <Route path="/" component={NavContainer} />

        <AuthRoute exact path="/signup" component={SessionFormContainer} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <AuthRoute exact path="/band" component={SessionFormContainer} />
      </div>

  );
};

export default App;
