import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tracks from './tracks';
import { fetchAlbumTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tracks: state.tracks,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbumTracks: (albumId) => dispatch(fetchAlbumTracks(albumId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tracks));
