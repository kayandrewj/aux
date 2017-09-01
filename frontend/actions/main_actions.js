import * as MainApiUtil from '../util/main_api_util';

export const RECEIVE_FEATURED_ALBUMS = "RECEIVE_FEATURED_ALBUMS";

export const receiveFeaturedAlbums = (albums) => {
  return {
    type: RECEIVE_FEATURED_ALBUMS,
    albums,
  };
};

export const fetchFeaturedAlbums = () => dispatch => {
  return MainApiUtil.fetchFeaturedAlbums().then(
    albums => dispatch(receiveFeaturedAlbums(albums))
  );
};
