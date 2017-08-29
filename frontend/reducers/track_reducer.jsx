import merge from 'lodash/merge';
import { RECEIVE_TRACK } from '../actions/track_actions';

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALBUM_TRACKS:
      return merge({}, state, { tracks: action.albumTracks});

    case RECEIVE_TRACK:
      return merge({}, state, action.trackInfo);
      
    default:
      return state;
  }
};

export default TrackReducer;
