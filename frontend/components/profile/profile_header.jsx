import React from 'react';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileHeader = this.targetProfileHeader.bind(this);
    this.targetProfileId = this.targetProfileId.bind(this);
  }

  targetProfileHeader() {
    if (this.props.targetArtistProfile) {
      return <img src={this.props.targetArtistProfile.header} className="header-img"/>;
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
      <div className="profile-header">
        {this.targetProfileHeader()}
      </div>
    );
  }
}

export default ProfileHeader;
