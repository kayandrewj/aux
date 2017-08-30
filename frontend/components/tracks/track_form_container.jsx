import { connect } from 'react-redux';
import TrackForm from './track_form';
import { withRouter } from 'react-router-dom';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrack: (track, album_id) => {
      debugger
      return dispatch(createTrack(track, album_id));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackForm));
