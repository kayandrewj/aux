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
        artistAlbums={props.artistAlbums}
        fetchArtistAlbums={props.fetchArtistAlbums}

        />
    </div>
  );
};

export default Album;
