import React from 'react';
import { Link } from 'react-router-dom';


class ProfileAlbumItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="profile-album-box">
        <Link to={`/album/${this.props.album.id}`}>
        <img className="profile-album-img" src={ this.props.album.artwork} />
        <p className="profile-album-text">{this.props.album.title}</p>
      </Link>
      </li>
    );
  }
}

export default ProfileAlbumItem;
