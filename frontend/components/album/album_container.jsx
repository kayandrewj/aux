import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Album from './album';
import { fetchAlbum } from '../../util/album_api_util';
import { fetchArtistAlbums } from '../../util/album_api_util';
import { fetchUser } from '../../util/user_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.albums.displayAlbum,
    artistAlbums: state.albums.artistAlbums,
    targetArtistProfile: state.targetUser.targetUser,
    targetProfilePath: ownProps.location.pathname,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album));
