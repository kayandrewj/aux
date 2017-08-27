import React from 'react';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileHeader = this.targetProfileHeader.bind(this);
    this.targetProfileId = this.targetProfileId.bind(this);
    this.userProfileHeader = this.userProfileHeader.bind(this);
  }


  userProfileHeader() {
    if (this.props.currentUser) {
      return (
        <div className="profile-header">
          <img src={this.props.currentUser.header} className="user-header-img"/>
        </div>
      );
    }
  }

  targetProfileHeader() {
    if (this.props.targetArtistProfile) {
      return (
        <div className="profile-header">
          <img src={this.props.targetArtistProfile.header} className="header-img"/>
        </div>
      );
    }
  }

  targetProfileId() {
    if (this.props.targetProfilePath) {
      return parseInt(this.props.targetProfilePath.match(/(\d+$)/)[0]);
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.targetProfileId());
  }

  render() {
    return (
      <div>
        {this.props.targetArtistProfile && this.props.targetArtistProfile.is_artist ? this.targetProfileHeader() : this.userProfileHeader()}
      </div>
    );
  }
}

export default ProfileHeader;
