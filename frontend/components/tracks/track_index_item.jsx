import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <li className="track">
        <p className="track-title">{this.props.track.title}</p>
        <audio controls>
          <source src={this.props.track.audio_file} type="audio/mp3" />
        </audio>
      </li>
    );
  }
}

export default TrackIndexItem;
