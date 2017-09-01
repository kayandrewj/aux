import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tracks from './tracks';
import { fetchAlbumTracks, clearTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    tracks: state.tracks,
    currentUserId: state.session.currentUser,
    displayAlbum: state.albums.displayAlbum,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbumTracks: (albumId) => dispatch(fetchAlbumTracks(albumId)),
    clearTracks: () => dispatch(clearTracks()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tracks));
