import React from 'react';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.targetProfileId = this.targetProfileId.bind(this);
  }
   // get id of user from this.props.targetProfilePath
  // then get image from the user with that ID

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
      <div>header here</div>
    );
  }
}

export default ProfileHeader;
