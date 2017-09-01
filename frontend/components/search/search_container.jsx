import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchIndex from './search_index';
import { sendSearch } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.search.ArtistProfile,
    albums: state.search.Album,
    track: state.search.Track,
  };
};

export default withRouter(connect(mapStateToProps)(SearchIndex));
