import merge from 'lodash/merge';
import { RECEIVE_ARTIST_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';


const AlbumReducer = (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ARTIST_ALBUMS:
      let newState = merge({}, state);
      if (newState.artistAlbums) {
        newState.artistAlbums = {};
      }
      return merge({}, newState, { artistAlbums: action.artistAlbums });

    case RECEIVE_ALBUM:
      return merge({}, state, action.album, action.albumInfo);

    default:
      return state;
  }
};

export default AlbumReducer;
