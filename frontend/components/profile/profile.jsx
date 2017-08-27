import React from 'react';
import { Route } from 'react-router-dom';
import ProfileIndex from './profile_index';
import ProfileHeader from './profile_header';
import ProfileSidebar from './profile_sidebar';

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

    {props.targetArtistProfile ?
        <ProfileIndex
          currentUser={props.currentUser}
          artistAlbums={props.artistAlbums}
          targetProfilePath={props.location.pathname}
          fetchArtistAlbums={props.fetchArtistAlbums}
          />
      :
        undefined
      }

      </div>
    );
  };

export default Profile;
