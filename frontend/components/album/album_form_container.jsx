import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { withRouter } from 'react-router-dom';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAlbum: (album) => dispatch(createAlbum(album)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumForm));
