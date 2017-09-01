import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <li className="search-index-track">
        <p>SONG</p>
          <audio controls>
            <source src={this.props.track.audio_file} type="audio/mp3" />
          </audio>
      </li>
    );
  }
}

export default SearchIndexTrack;
