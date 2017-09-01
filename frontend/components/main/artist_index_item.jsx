import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="main-artist-box">
        <Link to={`/album/${this.props.album.id}`}>
        <img className="main-artist-img" src={ this.props.artist.header} />
        <p className="main-artist-name">{this.props.artist.band}</p>
        <p className="main-artist-bio">{this.props.artist.bio}</p>
      </Link>
      </li>
    );
  }
}

export default ArtistIndexItem;
