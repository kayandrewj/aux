import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/session_form_container';
import NavContainer from './nav/nav_container';
import ProfileContainer from './profile/profile_container';
import AlbumContainer from './album/album_container';
import AlbumFormContainer from './album/album_form_container';
import TracksContainer from './tracks/tracks_container';
import TrackFormContainer from './tracks/track_form_container';
import SearchContainer from './search/search_container';
import MainContainer from './main/main_container';


const App = () => {
  return (
    <div className='app'>

      <Route path="/" component={NavContainer} />
      <Route path="/profile/:userId" component={ProfileContainer} />

      <Route path="/results" component={SearchContainer} />

      <Route exact path="/album/:albumId" component={AlbumContainer} />
      <Route path="/profile/:userId/newAlbum" component={AlbumFormContainer} />

      <Route path="/album/:albumId/newTracks" component={TrackFormContainer} />


      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/band" component={SessionFormContainer} />
    </div>

  );
};

export default App;






// <Route exact path="/" component={MainContainer} />
