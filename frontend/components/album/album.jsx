import React from 'react';
import { Route } from 'react-router-dom';
import AlbumBooklet from './album_booklet';

const Album = (props) => {
  return(
    <div className="album">
      <AlbumBooklet
        album={props.album}
        targetArtistProfile={props.targetArtistProfile}
        targetProfilePath={props.targetProfilePath}
        fetchAlbum={props.fetchAlbum}
        />
    </div>
  );
};

export default Album;
