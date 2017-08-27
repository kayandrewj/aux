import React from 'react';

class ProfileSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileId = this.targetProfileId.bind(this);
    this.targetProfileAvatar = this.targetProfileAvatar.bind(this);
    this.targetProfileInfo = this.targetProfileInfo.bind(this);
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



  targetProfileInfo() {
    if (this.props.targetArtistProfile) {
      return (
        <div className="profile-sidebar-info">
          <p classname="profile-sidebar-location">
            {this.props.targetArtistProfile.location}
          </p>
          <p className="profile-sidebar-bio">
            {this.props.targetArtistProfile.bio}
          </p>
        </div>
      );
    }
  }

  componentWillMount() {
    this.props.fetchUser(this.targetProfileId());
  }

  render() {
    return(
      <div className="profile-sidebar">
        <div className="profile-avatar">
          {this.targetProfileAvatar()}
        </div>
        {this.targetProfileInfo()}
      </div>




    );
  }
}

export default ProfileSidebar;
