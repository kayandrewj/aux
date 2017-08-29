import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { withRouter } from 'react-router-dom';
import { createTrack } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrack: (track) => dispatch(createAlbum(track)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackForm));
