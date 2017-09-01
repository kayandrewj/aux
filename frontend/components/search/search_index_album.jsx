import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="search-index-album">
        <p>ALBUM</p>
        <img className="search-index-album-art" src={this.props.album.artwork} />
        <Link to={`/album/${this.props.album.id}`}>
          <span className="search-index-album-name">{this.props.album.title}</span>
        </Link>
      </li>
    );
  }
}

export default SearchIndexAlbum;
