import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileHeader = this.targetProfileHeader.bind(this);
    this.userProfileHeader = this.userProfileHeader.bind(this);
  }

  userProfileHeader() {
    if (this.props.currentUser) {
      return (
        <div className="user-profile-header">
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

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    return (
      <div>
        {this.props.targetArtistProfile && this.props.targetArtistProfile.is_artist ? this.targetProfileHeader() : this.userProfileHeader()}
      </div>
    );
  }
}

export default withRouter(ProfileHeader);
