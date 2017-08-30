import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_ALBUM_TRACKS = "RECEIVE_ALBUM_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACKS";
export const CLEAR_TRACKS = "CLEAR_TRACKS";

export const receiveAlbumTracks = (albumTracks) => {
  return {
    type: RECEIVE_ALBUM_TRACKS,
    albumTracks,
  };
};

export const fetchAlbumTracks = albumId => (dispatch) => {
  TrackApiUtil.fetchAlbumTracks(albumId).then(
    albumTracks => dispatch(receiveAlbumTracks(albumTracks))
  );
};

export const receiveTrack = (track) => {
  return {
    type: RECEIVE_TRACK,
    track,
  };
};

export const createTrack = track => dispatch => {
  TrackApiUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track))
  );
};

export const clearTracks = () => {
  return {
    type: CLEAR_TRACKS,
    tracks: {}
  };
};