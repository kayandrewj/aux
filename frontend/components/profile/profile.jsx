import React from 'react';
import { Route } from 'react-router-dom';
import ProfileIndex from './profile_index';
import ProfileHeader from './profile_header';

const Profile = (props) => {
    return(
      <div className="artist-profile">

        <ProfileHeader
          targetProfilePath={props.location.pathname}
          fetchUser={props.fetchUser}
          targetUser={props.targetUser}
          targetArtistProfile={props.targetArtistProfile}

        />

        <ProfileIndex
          currentUser={props.currentUser}
          artistAlbums={props.artistAlbums}
          targetProfilePath={props.location.pathname}
          fetchArtistAlbums={props.fetchArtistAlbums}
          />

      </div>
    );
  };

export default Profile;
