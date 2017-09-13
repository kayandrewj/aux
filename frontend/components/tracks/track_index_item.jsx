import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this._onPlay = this._onPlay.bind(this);
  }


  _onPlay() {
    let tracks = document.getElementsByTagName('audio');
    let spans = document.querySelectorAll('span.track-title');
    let i = 0;
    while (i < tracks.length) {
      if (tracks[i].currentSrc != this.props.track.audio_file) {
        tracks[i].pause();
        spans[i].classList.value = "track-title";
      } else {
        spans[i].classList.value += " first-list-item";
      }
      i++;
    }
  }

  render() {
    return(
      <li className="track">
        <span className={this.props.idx === 0 ? "first-list-item track-title" : "track-title"}

          >{this.props.track.title}</span>
        <audio controls onPlay={this._onPlay}>
          <source src={this.props.track.audio_file} type="audio/mp3" />
        </audio>
      </li>
    );
  }
}

export default TrackIndexItem;
