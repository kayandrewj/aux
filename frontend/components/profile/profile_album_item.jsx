import React from 'react';
import { Link } from 'react-router-dom';


class ProfileAlbumItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="profile-album">
        <img src={ this.props.album.artwork} />
        <Link to={`/album/${this.props.album.id}`}>{this.props.album.title}</Link>
      </li>
    );
  }
}

export default ProfileAlbumItem;
