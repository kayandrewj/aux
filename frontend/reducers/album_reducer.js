import merge from 'lodash/merge';
import { RECEIVE_ARTIST_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const AlbumReducer = (state = {}, action) => {
  const nullAlbum = Object.freeze({
    title: '',
  });
  switch (action.type) {
    case RECEIVE_ARTIST_ALBUMS:
      return merge({}, state, { artistAlbums: action.artistAlbums });
    case RECEIVE_ALBUM:
      return merge({}, state, action.album, action.albumInfo);
    default:
      return state;
  }
};

export default AlbumReducer;
