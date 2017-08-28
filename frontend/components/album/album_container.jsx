import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Album from './album';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchArtistAlbums } from '../../actions/album_actions';
import { fetchUser } from '../../util/user_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.albums.displayAlbum,
    artistAlbums: state.albums.artistAlbums,
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
