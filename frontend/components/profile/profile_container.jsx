import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { fetchArtistAlbums } from '../../actions/album_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    artistAlbums: state.albums.artistAlbums,
    targetProfilePath: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
