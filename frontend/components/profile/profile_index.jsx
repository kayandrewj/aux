import React from 'react';
import { Link } from 'react-router-dom';
import ProfileAlbumItem from './profile_album_item';
import { withRouter } from 'react-router-dom';


class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.username = this.username.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtistAlbums(this.props.match.params.userId);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchArtistAlbums(nextProps.match.params.userId);
    }
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

export default withRouter(ProfileIndex);
