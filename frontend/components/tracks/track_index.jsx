import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexItem from './track_index_item';
import { withRouter } from 'react-router-dom';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);

    this.clearTracks = this.clearTracks.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbumTracks(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.clearTracks();
      this.props.fetchAlbumTracks(nextProps.match.params.albumId);
    }
  }

  clearTracks() {
    debugger
    this.props.clearTracks();
  }

  render() {
    let tracks;
    if (this.props.tracks) {
      tracks = Object.keys(this.props.tracks).map(id => (
        <TrackIndexItem
          track={this.props.tracks[id]}
          key={id}
        />
    ));
    }
    return (
      <div className="track-index">
        { tracks }
      </div>
    );
  }
}

export default withRouter(TrackIndex);
