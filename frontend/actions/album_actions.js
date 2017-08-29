import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const receiveArtistAlbums = (artistAlbums) => {
  return {
    type: RECEIVE_ARTIST_ALBUMS,
    artistAlbums,
  };
};

export const fetchArtistAlbums = artistId => dispatch => {
  AlbumApiUtil.fetchArtistAlbums(artistId).then(
    artistAlbums => dispatch(receiveArtistAlbums(artistAlbums))
  );
};

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

export const fetchAlbum = albumId => dispatch => {
  AlbumApiUtil.fetchAlbum(albumId).then(
    album => dispatch(receiveAlbum(album))
  );
};

export const createAlbum = album => dispatch => {
  AlbumApiUtil.createAlbum(album).then(
    album => dispatch(receiveAlbum(album))
  );
};
