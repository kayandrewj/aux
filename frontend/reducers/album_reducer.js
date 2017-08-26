import merge from 'lodash/merge';
import { RECEIVE_ARTIST_ALBUMS } from '../actions/album_actions';

const AlbumReducer = (state = {}, action) => {

  const nullAlbum = Object.freeze({
    title: '',
  });
  switch (action.type) {
    case RECEIVE_ARTIST_ALBUMS:
      return merge({}, state, { artistAlbums: action.artistAlbums });
    default:
      return state;
  }
};

export default AlbumReducer;
