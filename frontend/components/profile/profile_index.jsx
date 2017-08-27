import React from 'react';
import { Link } from 'react-router-dom';
import ProfileAlbumItem from './profile_album_item';


class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.username = this.username.bind(this);
    this.targetProfileId = this.targetProfileId.bind(this);
  }

  targetProfileId() {
    if (this.props.targetProfilePath) {
      return parseInt(this.props.targetProfilePath.match(/(\d+$)/)[0]);
    }
  }

  componentDidMount() {
    this.props.fetchArtistAlbums(this.targetProfileId());
  }

  username() {
    return this.props.currentUser ? this.props.currentUser.username : undefined;
  }

  render() {
    let albums;
    if (this.props.artistAlbums) {
      albums = Object.keys(this.props.artistAlbums).map(id => (
        <ProfileAlbumItem
          album={this.props.artistAlbums[id]}
          key={ id } />
        )
      );
    }
    return (
      <div className="profile-index">
        { albums }
      </div>
    );

  }
}

export default ProfileIndex;
