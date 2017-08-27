import React from 'react';

class ProfileSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileId = this.targetProfileId.bind(this);
    this.targetProfileAvatar = this.targetProfileAvatar.bind(this);
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

  componentWillMount() {
    debugger
    this.props.fetchUser(this.targetProfileId());
  }


  render() {
    return(
      <div className="profile-avatar">
        {this.targetProfileAvatar()}
      </div>
    );
  }
}

export default ProfileSidebar;
