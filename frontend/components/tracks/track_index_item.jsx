import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="track">
        <p className="track-title">{this.props.track.title}</p>
      </li>
    );
  }
}

export default TrackIndexItem;
