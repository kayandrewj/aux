import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './main';
import merge from 'lodash/merge';
import { fetchFeaturedAlbums } from '../../util/main_api_util';

const mapStateToProps = (state, ownProps) => {
  let artists = {};
  let keys = Object.keys(state.main);
  let i = 0;
  while (i < 4) {
    artists = merge({}, artists, state.main[keys[i]]);
    i++;
  }
  let albums = {};
  while (i < 8) {
    albums = merge({}, albums, state.main[keys[i]]);
    i++;
  }
  return {
    featuredArtists: artists,
    featuredAlbums: albums,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeaturedAlbums: () => dispatch(fetchFeaturedAlbums),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
