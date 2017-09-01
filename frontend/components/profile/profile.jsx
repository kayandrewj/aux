import React from 'react';
import { Route } from 'react-router-dom';
import ProfileIndex from './profile_index';
import ProfileHeader from './profile_header';
import ProfileSidebar from './profile_sidebar';
import AlbumFormContainer from '../album/album_form_container';

const Profile = (props) => {
    return(
      <div className="artist-profile">

        <ProfileHeader
          targetProfilePath={props.location.pathname}
          fetchUser={props.fetchUser}
          targetUser={props.targetUser}
          targetArtistProfile={props.targetArtistProfile}
          currentUser={props.currentUser}

        />

      <ProfileSidebar
        targetProfilePath={props.location.pathname}
        currentUser={props.currentUser}
        targetArtistProfile={props.targetArtistProfile}
        fetchUser={props.fetchUser}
        targetUser={props.targetUser}
      />

    {props.targetArtistProfile && props.targetArtistProfile.is_artist && props.location.pathname.split("/").reverse()[0] !== "newAlbum" ?
        <ProfileIndex
          currentUser={props.currentUser}
          artistAlbums={props.artistAlbums}
          targetProfilePath={props.location.pathname}
          fetchArtistAlbums={props.fetchArtistAlbums}
          />
      :
        undefined
      }

      <Route path="/profile/:userId/newAlbum" component={AlbumFormContainer} />

      </div>
    );
  };

export default Profile;
