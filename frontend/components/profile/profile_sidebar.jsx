import React from 'react';
import { Link } from 'react-router-dom';

class ProfileSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileId = this.targetProfileId.bind(this);
    this.targetProfileAvatar = this.targetProfileAvatar.bind(this);
    this.targetProfileInfo = this.targetProfileInfo.bind(this);
    this.targetProfileAvatar = this.targetProfileAvatar.bind(this);
  }


  targetProfileId() {
    if (this.props.targetProfilePath) {
      return parseInt(this.props.targetProfilePath.match(/(\d+$)/)[0]);
    }
  }

  userProfileAvatar() {
    if (this.props.currentUser) {
      return (
        <div className="user-profile-avatar">
          <img src={this.props.currentUser.avatar} className="user-avatar-img"/>
        </div>
      );
    }
  }

  targetProfileAvatar() {
    if (this.props.targetArtistProfile) {
      return(
        <div className="profile-avatar">
          <img src={this.props.targetArtistProfile.avatar} className="avatar-img"/>
        </div>
      );
    }
  }



  targetProfileInfo() {
    if (this.props.targetArtistProfile) {
      return (
        <div className="profile-sidebar-info">
          <p className="profile-sidebar-bandname">
            {this.props.targetArtistProfile.band}
          </p>
          <p className="profile-sidebar-location">
            {this.props.targetArtistProfile.location}
          </p>
          <p className="profile-sidebar-bio">
            {this.props.targetArtistProfile.bio}
          </p>

          {this.props.currentUser && (this.targetProfileId() === this.props.currentUser.id) ?
            <Link to={`/profile/${this.targetProfileId()}`} className="profile-edit">
              Edit Profile
            </Link>
              :
            undefined
          }

        </div>
      );
    }
  }

  // change to did
  componentWillMount() {
    this.props.fetchUser(this.targetProfileId());
  }

  render() {
    return(
      <div className="profile-sidebar">
        <div className="profile-avatar">


          {this.props.targetArtistProfile && this.props.targetArtistProfile.is_artist ? this.targetProfileAvatar() : this.userProfileAvatar()}


        </div>
        {this.targetProfileInfo()}
      </div>




    );
  }
}

export default ProfileSidebar;
