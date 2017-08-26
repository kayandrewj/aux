import React from 'react';

class ProfileAlbumItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="profile-album">
        <img src={ this.props.album.artwork} />
        <Link to=

    {this.props.album.title}


      </li>
    );
  }
}

export default ProfileAlbumItem;
