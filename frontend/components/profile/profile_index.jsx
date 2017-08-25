import React from 'react';
import { Link } from 'react-router-dom';

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);

    this.username = this.username.bind(this);
  }

  username() {
    return this.props.currentUser ? this.props.currentUser.username : undefined;
  }


  render() {
    return(
        <div className="album-item">
          <h1>{this.username()}</h1>
        </div>
    );
  }
}

export default ProfileIndex;
