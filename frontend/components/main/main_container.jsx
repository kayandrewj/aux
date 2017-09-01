import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './main';
import merge from 'lodash/merge';
import { fetchFeaturedAlbums } from '../../actions/main_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.main.features
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeaturedAlbums: () => dispatch(fetchFeaturedAlbums()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
