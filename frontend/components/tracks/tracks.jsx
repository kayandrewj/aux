import React from 'react';
import { Route } from 'react-router-dom';
import TrackIndex from './track_index';

const Tracks = (props) => {
  return (
    <div className="track-index">
      <TrackIndex
        tracks={props.tracks}
        fetchAlbumTracks={props.fetchAlbumTracks}
        />
    </div>
  );
};

export default Tracks;
