import React from 'react';
import { Route } from 'react-router-dom';
import AlbumBooklet from './album_booklet';
import AlbumSidebar from './album_sidebar';

const Album = (props) => {
  return(
    <div className="album">
      <AlbumBooklet
        album={props.album}
        targetArtistProfile={props.targetArtistProfile}
        fetchAlbum={props.fetchAlbum}

        />
      <AlbumSidebar
        album={props.album}
        targetArtistProfile={props.targetArtistProfile}
        fetchArtistAlbums={props.fetchArtistAlbums}
        artistAlbums={props.artistAlbums}
        />

    </div>
  );
};

export default Album;
