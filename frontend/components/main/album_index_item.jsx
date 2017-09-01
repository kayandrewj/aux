import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="main-album-box">
        <Link to={`/album/${this.props.album.id}`}>
        <img className="main-album-img" src={ this.props.album.artwork} />
        <p className="main-album-text">{this.props.album.title}</p>
        <p className="main-album-text">{this.props.album.band}</p>
      </Link>
      </li>
    );
  }
}

export default AlbumIndexItem;
