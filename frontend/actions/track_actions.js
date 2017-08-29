import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_ALBUM_TRACKS = "RECEIVE_ALBUM_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACKS";

export const receiveTrack = (track) => {
  return {
    type: RECEIVE_TRACK,
    track,
  };
};

export const createTrack = track => dispatch => {
  debugger
  TrackApiUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track))
  );
};
