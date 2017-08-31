import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="track">
        <span className="track-title">{this.props.track.title}</span>
        <audio controls>
          <source src={this.props.track.audio_file} type="audio/mp3" />
        </audio>
      </li>
    );
  }
}

export default TrackIndexItem;
