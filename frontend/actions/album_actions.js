import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";

export const receiveArtistAlbums = (albums) => {
  return {
    type: RECEIVE_ARTIST_ALBUMS,
    albums
  };
};

export const fetchArtistAlbums = artistId => {
  AlbumApiUtil.fetchArtistAlbums(artistId).then(
    albums => dispatch(receiveArtistAlbums(albums))
  );
};
