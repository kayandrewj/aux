import React from 'react';

class ProfileSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileId = this.targetProfileId.bind(this);
    this.targetProfileAvatar = this.targetProfileAvatar.bind(this);
    this.targetProfileBio = this.targetProfileBio.bind(this);
  }


  targetProfileId() {
    if (this.props.targetProfilePath) {
      return parseInt(this.props.targetProfilePath.match(/(\d+$)/)[0]);
    }
  }

  targetProfileAvatar() {
    if (this.props.targetArtistProfile) {
      return <img src={this.props.targetArtistProfile.avatar} className="avatar-img"/>;
    }
  }

  targetProfileBio() {
    if (this.props.targetArtistProfile) {
      return (
        <p className="profile-sidebar-bio">
          {this.props.targetArtistProfile.bio}
        </p>
      );
    }
  }

  componentWillMount() {
    this.props.fetchUser(this.targetProfileId());
  }

  render() {
    return(
      <div className="profile-avatar">
        {this.targetProfileAvatar()}
        <div className="profile-sidebar-info">
          <p className="profile-sidebar-bio">
            {this.targetProfileBio()}
          </p>


        </div>
      </div>
    );
  }
}

export default ProfileSidebar;
