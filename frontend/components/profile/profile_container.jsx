import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { fetchArtistAlbums } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    artistAlbums: state.albums.artistAlbums,
    targetProfilePath: ownProps.location.pathname,
    targetUser: state.targetUser,
    targetArtistProfile: state.targetUser.targetUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
