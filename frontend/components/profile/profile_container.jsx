import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileIndex from './profile_index';
import { fetchArtistAlbums } from '../../actions/album_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    artistAlbums: state.albums,
    targetProfile: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileIndex));
