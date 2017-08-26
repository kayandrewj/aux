import React from 'react';
import { Link } from 'react-router-dom';

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);

    this.username = this.username.bind(this);
    this.renderIndex = this.renderIndex.bind(this);
    this.targetProfileId = this.targetProfileId.bind(this);
  }

  targetProfileId() {
    return parseInt(this.props.targetProfile.match(/(\d+$)/)[0]);
  }

  componentDidMount() {
    this.props.fetchArtistAlbums(this.targetProfileId());
  }

  username() {
    return this.props.currentUser ? this.props.currentUser.username : undefined;
  }

  renderIndex() {
    //returns <ul> of <li>, each of which contains an href to the album view
  }


  render() {
    // TODO: render albums here; they should be in state. (so they should be in props as objects nested in a larger object under keys of their ID)
    // this.props.artistAlbums
    // in state they are state.albums.artistAlbums
    // they probably need to be objects in an array; build a selector for them

    //don't do line 26, find the user from the URL not the current user. it's in state.match or something
    return(
        <div className="album-item">
          <h2 className="artist-album-index-header">{this.username()}</h2>
        </div>
    );
  }
}

export default ProfileIndex;
