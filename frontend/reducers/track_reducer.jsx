import merge from 'lodash/merge';
import { RECEIVE_TRACK, RECEIVE_ALBUM_TRACKS } from '../actions/track_actions';

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALBUM_TRACKS:
      return merge({}, state, action.albumTracks);

    case RECEIVE_TRACK:
      return merge({}, state, action.trackInfo);

    default:
      return state;
  }
};

export default TrackReducer;
