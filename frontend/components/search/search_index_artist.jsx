import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexArtist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="search-index-artist">
        <p>ARTIST</p>
        <Link to={`/profile/${this.props.artist.user_id}`}>
          <span className="search-index-artist-name">{this.props.artist.band}</span>
        </Link>
      </li>
    );
  }
}

export default SearchIndexArtist;
